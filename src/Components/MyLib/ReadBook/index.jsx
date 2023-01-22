import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Reader = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="bg-mainOffPrimary p-4 rounded-lg">
      <Document
        file="https://prod-assignments.s3.ap-south-1.amazonaws.com/student/mgmt11learn156/23558/1633438144000.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
        className="flex flex-row flex-grow-2  w-full pdf-document"
      >
        <Page pageNumber={pageNumber} />
        {/* {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            className="pdf-page"
            pageNumber={index + 1}
            width="200"
          />
        ))} */}
      </Document>

      <div className="flex justify-end items-center  ">
        <div class=" mt-4 inline-flex  items-center justify-center gap-3 rounded-lg bg-bgPrimary px-3  shadow-lg">
          <div className="border-r-4 border-mainOffPrimary py-1">
            <button
              onClick={() =>
                setPageNumber(() =>
                  pageNumber !== 1 ? pageNumber - 1 : pageNumber
                )
              }
              class="inline-flex h-8 w-8 items-center justify-center "
            >
              <span class="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 text-mainPrimary"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <p class="text-xs text-textPrimary">
            {pageNumber}
            <span class="mx-0.25">/</span>
            {numPages}
          </p>
          <div className="border-l-4 border-mainOffPrimary py-1">
            <button
              onClick={() =>
                setPageNumber(() =>
                  pageNumber !== numPages ? pageNumber + 1 : pageNumber
                )
              }
              class="inline-flex h-8 w-8 items-center justify-center "
            >
              <span class="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-mainPrimary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reader;
