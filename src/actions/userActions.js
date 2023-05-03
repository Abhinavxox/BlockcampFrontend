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
} from "../constants/userConstant";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import config from "../firebase/config";

const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);
const firestore = getFirestore();

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    // Query the users collection in Firestore for the user with the specified email
    const usersRef = collection(firestore, "Users");
    const usersQuery = query(usersRef, where("email", "==", email));
    const userSnapshot = await getDocs(usersQuery);

    if (!userSnapshot.empty) {
      // If user exists, retrieve their credentials from the snapshot
      const user = userSnapshot.docs[0];
      const { password: hashedPassword } = user.data();

      // Verify the user's password
      if (password === hashedPassword) {
        const { uid, email: userEmail } = user;

        dispatch({
          type: LOGIN_SUCCESS,
          payload: { uid, email: userEmail },
        });
      } else {
        throw new Error("Invalid password");
      }
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.log("ERROR", error.message);
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const register = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

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

    onAuthStateChanged(auth, (user) => {
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
    await signOut(auth);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.message });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
