import React, { useEffect, useState } from "react";
import makeBlockie from "ethereum-blockies-base64";
import { Link } from "react-router-dom";

const Explore = () => {
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
    <section className="px-6 xl:px-0">
      <div className=" mx-auto container my-5">
        <div className="w-full">
          <input
            type="text"
            placeholder="Search Papers..."
            className="w-full p-4 mb-8 rounded-md bg-gray-200 text-center text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex">
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8 mb-5">
            {data &&
              data.papers.map((item) => (
                <Link
                  to={`/viewPaper/${item.title}`}
                  state={item.title}
                  key={item.title}
                >
                  <div
                    className="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1 w-full"
                    href="/components/alert"
                  >
                    <figure className="px-4 pt-4">
                      <img
                        src={item.thumbnail}
                        className="border-base-content bg-base-300 rounded-lg border border-opacity-5"
                        alt="Thumbnail"
                      />
                    </figure>{" "}
                    <div className="card-body w-full">
                      <h2 className="card-title flex justify-center">
                        {item.title}
                      </h2>{" "}
                      <p className="text-xs opacity-60 flex justify-center">
                        {item.description}
                      </p>
                    </div>{" "}
                    <div className="flex justify-between w-full">
                      <h1 className="w-1/2">{item.author}</h1>
                      <div className="w-1/2 bg-base-300 rounded flex justify-between">
                        <div className="w-3/4">
                          <p className="truncate ...">{item.publisher}</p>
                        </div>
                        <div className="w-1/4">
                          <img
                            className="rounded w-5 h-5 float-right"
                            src={makeBlockie(item.publisher)}
                            alt="profile"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
