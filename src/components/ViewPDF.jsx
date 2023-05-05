import React, { useState } from "react";
import PDF from "react-pdf-js";

const ViewPDF = () => {
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const onDocumentComplete = (total) => {
    setTotalPages(total);
  };

  const handlePreviousPage = () => {
    if (pages > 1) {
      setPages(pages - 1);
    }
  };

  const handleNextPage = () => {
    if (pages < totalPages) {
      setPages(pages + 1);
    }
  };

  return (
    <div className="bg-base-300 rounded">
      <PDF
        file="https://www.africau.edu/images/default/sample.pdf"
        onDocumentComplete={onDocumentComplete}
        page={pages}
      />
      {totalPages && (
        <p className="p-5 text-3xl font-bold">
          Page {pages} of {totalPages}
        </p>
      )}
      <div className="flex justify-between p-5">
        <button className="btn btn-primary" onClick={handlePreviousPage}>
          Previous
        </button>
        <button className="btn btn-primary" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ViewPDF;
