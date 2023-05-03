import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";
import firebase from "firebase/app";
import "firebase/auth";
import config from "../firebase/config";
firebase.initializeApp(config);

// Firebase authentication method
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    const { uid, email: userEmail } = response.user;

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { uid, email: userEmail },
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const register = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    const { uid, email: userEmail } = response.user;

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: { uid, email: userEmail },
    });
  } catch (error) {
    dispatch({ type: REGISTER_USER_FAIL, payload: error.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { uid, email: userEmail } = user;

        dispatch({
          type: LOAD_USER_SUCCESS,
          payload: { uid, email: userEmail },
        });
      } else {
        dispatch({ type: LOAD_USER_FAIL, payload: "User not found" });
      }
    });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await firebase.auth().signOut();

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.message });
  }
};
