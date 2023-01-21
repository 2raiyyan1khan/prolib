import React from "react";

const ListHeader = () => {
  return (
    <div className="flex items-center justify-between h-16 w-full">
      <div className="flex-1">
        <button className="btn btn-square btn-ghost ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-none gap-2 flex ">
        <div className="form-control ">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered bg-opacity-10 "
          />
        </div>
        <div>
          <button className="btn btn-ghost btn-square ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListHeader;
