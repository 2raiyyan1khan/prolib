import React from "react";
import { Link } from "react-router-dom";
import Card from "../Common/Card/Card";
import PageTitle from "../Common/PageTitle";
import SectionTitle from "../Common/SectionTitle";
function Search() {
  return (
    <div>
      <PageTitle title="Search" />
      <div className="p-16 ">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600  outline-none dark:placeholder-gray-400 dark:text-white focus:ring-violet-400 focus:ring-1"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 top-1 bottom-1 bg-violet-400 hover:bg-violet-500 focus:outline-none focus:ring-violet-300 focus:ring-1  font-medium rounded-full text-sm px-6 py-3"
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex items-center gap-4 mt-2 ml-4">
          <p className="text-textSecondary text-xs">Search History</p>
          <Link
            class="flex items-center justify-center px-3 py-1 text-sm rounded-full shadow-sm    hover:ring-1 hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-400 text-gray-50 bg-gray-600 no-underline"
            to="/book/20"
          >
            <span class="text-xs font-base tracking-wider  leading-none">
              Article{" "}
            </span>
          </Link>
        </div>
      </div>
      <div className="">
        <SectionTitle title="To rated books" />

        <div className="grid grid-cols-4  grid-flow-row gap-5 col-span-3 gap-y-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => {
            return <Card key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
