import React from "react";

const Hero = () => {
  return (
    <div className="static mx-auto py-10 mb-16 bg-mainOffPrimary px-5 rounded-lg shadow-lg">
      <div className="flex mx-auto justify-between items-center">
        <div className="mb-2 w-3/5">
          <div className="pb-10">
            <h1 className="text-7xl font-extrabold font-title mb-2  text-mainPrimary">
              Prolib
            </h1>
            <p className=" font-title text-3xl font-extrabold text-textPrimary ">
              Destination to read tech books
            </p>
          </div>
          <div className="flex flex-col gap-2 pl-4">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right text-mainPrimary"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
              </svg>
              <p className="text-xl text-textSecondary">Free to use</p>
            </div>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right text-mainPrimary"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
              </svg>
              <p className="text-xl text-textSecondary">Vast Collection</p>
            </div>
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right text-mainPrimary "
                viewBox="0 0 16 16"
              >
                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
              </svg>
              <p className="text-xl text-textSecondary">
                Provides Reading Progress
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <img alt="" src="/book.svg" className="w-full  " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
