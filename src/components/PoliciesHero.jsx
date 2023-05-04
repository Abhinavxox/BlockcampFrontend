import React from "react";
import { useNavigate } from "react-router-dom";

const PoliciesHero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="px-6 xl:px-0">
        <div className=" mx-auto container">
          <div className="flex items-center justify-center w-full">
            <div className="pt-14">
              <div className="container mx-auto">
                <div className="flex flex-wrap mb-12 justify-between sm:justify-center -mx-6">
                  {/* card 1 */}
                  <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                    <div className="py-5 px-4 bg-white border border-gray-200shadow rounded-lg text-left">
                      <h4 className="text-2xl text-indigo-700 font-semibold pb-8">
                        PAPER 1
                      </h4>
                      <ul className="flex flex-col mb-6">
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-800 text-base font-normal">
                            24/7 access
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-800 text-base font-normal">
                            Order labs + Results
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="opacity-0 mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-400 text-base font-normal">
                            Radiology tests + Results
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="opacity-0 mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-400 text-base font-normal">
                            Partnership + Discounts
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="opacity-0 mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-400 text-base font-normal">
                            Direct doctor phone number
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="opacity-0 mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-400 text-base font-normal">
                            Specialists appoinments
                          </p>
                        </li>
                      </ul>
                      <p className="text-base text-indigo-700 relative pl-3">
                        <span className="font-light text-lg">$</span>
                        <span className="text-2xl font-semibold">20</span>
                        <span className="text-gray-600 font-light text-lg">
                          /month
                        </span>
                      </p>
                      <button className="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-indigo-700 px-8 py-3 text-base font-semibold">
                        Choose
                      </button>
                    </div>
                  </div>
                  {/* card 2 */}
                  <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                    <div className="py-5 px-4 bg-indigo-700 border border-gray-200 shadow rounded-lg text-left">
                      <h4 className="text-2xl text-white font-semibold pb-8">
                        PAPER 2
                      </h4>
                      <ul className="flex flex-col mb-6">
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-white text-base font-normal">
                            24/7 access
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-white text-base font-normal">
                            Order labs + Results
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-white text-base font-normal">
                            Radiology tests + Results
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-white text-base font-normal">
                            Partnership + Discounts
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4 opacity-0"
                            alt="check-mark"
                          />
                          <p className="text-indigo-700 text-base font-normal">
                            Direct doctor phone number
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4 opacity-0"
                            alt="check-mark"
                          />
                          <p className="text-indigo-700 text-base font-normal">
                            Specialists appoinments
                          </p>
                        </li>
                      </ul>
                      <p className="text-base text-white relative pl-3">
                        <span className="font-light text-lg">$</span>
                        <span className="text-2xl font-semibold">100</span>
                        <span className="font-light text-lg">/month</span>
                      </p>
                      <button className="mt-5 w-full text-indigo-700 focus:outline-none transition duration-150 ease-in-out rounded bg-white hover:bg-gray-100 px-8 py-3 text-base font-semibold">
                        Choose
                      </button>
                    </div>
                  </div>
                  {/* card 3 */}
                  <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                    <div className="py-5 px-4 bg-white border border-gray-200shadow rounded-lg text-left">
                      <h4 className="text-2xl text-indigo-700 font-semibold pb-8">
                        PAPER 3
                      </h4>
                      <ul className="flex flex-col mb-6">
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-800 text-base font-normal">
                            24/7 access
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-800 text-base font-normal">
                            Order labs + Results
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-800 text-base font-normal">
                            Radiology tests + Results
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-800 text-base font-normal">
                            Partnership + Discounts
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-800 text-base font-normal">
                            Direct doctor phone number
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-800 text-base font-normal">
                            Specialists appoinments
                          </p>
                        </li>
                      </ul>
                      <p className="text-base text-indigo-700 relative pl-3">
                        <span className="font-light text-lg">$</span>
                        <span className="text-2xl font-semibold">200</span>
                        <span className="font-light text-lg">/month</span>
                      </p>
                      <button className="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-indigo-700 px-8 py-3 text-base font-semibold">
                        Choose
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center -mt-8">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/explore")}
                >
                  See All Papers
                </button>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html: "",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <style>
        {` 
            .checkbox:checked {
                right: 0;
                background-color: #4338ca;
            }
            `}
      </style>
    </div>
  );
};

export default PoliciesHero;
