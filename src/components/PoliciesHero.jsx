import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const PoliciesHero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState();

  const fetchDummyData = async () => {
    //get the json from dummy.json
    const response = await fetch("../../assets/dummy.json");
    //convert the response to json
    const json = await response.json();
    //set the data to the json
    setData(json);
  };

  useEffect(() => {
    fetchDummyData();
  }, [data]);
  return (
    <div>
      <section className="px-6 xl:px-0">
        {data && (
          <div className=" mx-auto container">
            <div className="flex items-center justify-center w-full">
              <div className="pt-14">
                <div className="container mx-auto">
                  <div className="flex flex-wrap mb-12 justify-between sm:justify-center -mx-6">
                    {/* card 1 */}
                    <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                      <div className="py-5 px-4 bg-white border border-gray-200shadow rounded-lg text-left">
                        <h4 className="text-2xl text-indigo-700 font-semibold pb-8">
                          {data.papers[0].title}
                        </h4>
                        <div>
                          <img
                            src={data.papers[0].thumbnail}
                            className="border-base-content bg-base-300 rounded-lg border border-opacity-5 w-full"
                            alt="Thumbnail"
                          />
                        </div>
                        <p className="text-base text-indigo-700 relative pl-3">
                          <span className="text-gray-600 font-light text-lg">
                            <p className="truncate ...">
                              {data.papers[0].description}
                            </p>
                          </span>
                        </p>
                        <Link
                          to={`/viewPaper/${data.papers[0].title}`}
                          state={data.papers[0].title}
                        >
                          <button className="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-indigo-700 px-8 py-3 text-base font-semibold">
                            Read or Buy
                          </button>
                        </Link>
                      </div>
                    </div>
                    {/* card 2 */}
                    <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                      <div className="py-5 px-4 bg-indigo-700 border border-gray-200 shadow rounded-lg text-left">
                        <h4 className="text-2xl text-white font-semibold pb-8">
                          {data.papers[1].title}
                        </h4>
                        <div>
                          <img
                            src={data.papers[1].thumbnail}
                            className="border-base-content bg-base-300 rounded-lg border border-opacity-5 w-full"
                            alt="Thumbnail"
                          />
                        </div>
                        <p className="text-base text-white relative pl-3">
                          <span className="text-white font-light text-lg">
                            <p className="truncate ...">
                              {data.papers[1].description}
                            </p>
                          </span>
                        </p>
                        <Link
                          to={`/viewPaper/${data.papers[1].title}`}
                          state={data.papers[1].title}
                        >
                          <button className="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-indigo-700 px-8 py-3 text-base font-semibold">
                            Read or Buy
                          </button>
                        </Link>
                      </div>
                    </div>
                    {/* card 3 */}
                    <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6 h-[20vh]">
                      <div className="py-5 px-4 bg-white border border-gray-200shadow rounded-lg text-left">
                        <h4 className="text-2xl text-indigo-700 font-semibold pb-8">
                          {data.papers[2].title}
                        </h4>
                        <div>
                          <img
                            src={data.papers[2].thumbnail}
                            className="border-base-content bg-base-300 rounded-lg border border-opacity-5 w-full"
                            alt="Thumbnail"
                          />
                        </div>
                        <p className="text-base text-indigo-700 relative pl-3">
                          <span className="text-gray-600 font-light text-lg">
                            <p className="truncate ...">
                              {data.papers[2].description}
                            </p>
                          </span>
                        </p>
                        <Link
                          to={`/viewPaper/${data.papers[2].title}`}
                          state={data.papers[2].title}
                        >
                          <button className="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-indigo-700 px-8 py-3 text-base font-semibold">
                            Read or Buy
                          </button>
                        </Link>
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
        )}
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
