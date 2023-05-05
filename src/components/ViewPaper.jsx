import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Document, Page } from "react-pdf";
import ViewPDF from "./ViewPDF";
import makeBlockie from "ethereum-blockies-base64";

const ViewPaper = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);
  const location = useLocation();

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  useEffect(() => {
    setTitle(location.state);
    const fetchData = async () => {
      //get the json from dummy.json
      const response = await fetch("../../assets/dummy.json");

      //convert the response to json
      const json = await response.json();

      const result = json.papers.find((paper) => paper.title === title);
      setData(result);
    };

    fetchData();
  }, [data]);

  return (
    <>
      {data && (
        <div className="mx-auto p-5">
          <div className="grid sm:grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="container md:col-span-1">
              <ViewPDF />
            </div>

            <div className="container md:col-span-1">
              <div>
                <h1 className="text-3xl font-bold">Author</h1>
                <h1 className="w-1/2">{data.author}</h1>
                <div className="my-5">
                  <h1 className="text-3xl font-bold">Public ID:</h1>

                  <div className="  rounded flex justify-between ">
                    <div className="">
                      <p>{data.publisher}</p>
                    </div>
                    <div className="">
                      <img
                        className="rounded w-5 h-5 float-right"
                        src={makeBlockie(data.publisher)}
                        alt="profile"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-5">
                  <h1 className="text-center text-3xl font-bold">Funders:</h1>
                  <div className="bg-base-300 rounded mx-auto w-3/4 h-[60vh]"></div>
                </div>
                <div className="my-5">
                  <div className="bg-base-300 rounded mx-auto w-full h-[20vh]">
                    <h1 className="text-center text-3xl font-bold">
                      Total Donations:
                    </h1>
                    <h1 className="text-center text-2xl">3.4056 ETH</h1>
                    <progress
                      className="progress progress-error w-full px-4 my-5"
                      value="70"
                      max="100"
                    ></progress>
                    <div className="flex justify-center">
                      <button className="btn btn-primary">Donate</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewPaper;
