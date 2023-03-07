import React from "react";
import { Link } from "react-router-dom";

function Search() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-medium text-textPrimary "> Search</h2>
      </div>
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
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 dark:bg-gray-700 dark:border-gray-600  outline-none dark:placeholder-gray-400 dark:text-white focus:ring-violet-400 "
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 top-1 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex items-center gap-4 mt-2">
        <p className="text-textSecondary text-sm">Search History</p>
        <a
          class="relative px-3 py-1 m-1 text-sm rounded-full shadow-sm sm:text-base ring ring-transparent group  hover:ring-1 hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-400 text-gray-50 bg-gray-600 no-underline"
          href="/components/article"
        >
          <span class="absolute top-0 right-0 p-1 text-xs opacity-0 group-hover:opacity-100 text-gray-100">
            {" "}
          </span>
          <span class="text-sm font-medium tracking-wider">Article </span>
        </a>
      </div>
      <div className="mt-16">
        <div className="mb-8">
          <h2 className="text-xl font-medium text-textPrimary ">
            To rated books
          </h2>
        </div>
        <div className="grid grid-cols-4  grid-flow-row gap-5 col-span-3 gap-y-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => {
            return (
              <div
                key={i}
                className="bg-mainOffPrimary rounded-lg   shadow-sm cursor-pointer group hover:scale-110 hover:z-20 transition-all ease-linear duration-500"
              >
                <Link to={"/book/20"} class="block ">
                  <img
                    alt="Home"
                    src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    class="h-56 w-full  rounded-t-lg object-cover"
                  />

                  <div class=" p-4">
                    <dl>
                      <div>
                        <dt class="sr-only">Price</dt>

                        <dd class="text-xs tracking-wider text-gray-400 shadow-md uppercase  ">
                          <span className="bg-mainOffPrimary block w-20">
                            Category
                          </span>
                        </dd>
                      </div>

                      <div>
                        <dt class="sr-only">Address</dt>

                        <dd class="font-medium text-textPrimary">
                          123 Wallaby Avenue, Park Road
                        </dd>
                      </div>
                    </dl>

                    <div class="mt-2 flex items-center gap-8 text-xs">
                      <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5 text-mainPrimary"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                          />
                        </svg>

                        <div class="mt-1.5 sm:ml-3 sm:mt-0">
                          <p class="text-gray-400">Page</p>

                          <p class="font-medium text-textSecondary">400</p>
                        </div>
                      </div>

                      <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5 text-mainPrimary"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                          />
                        </svg>

                        <div class="mt-1.5 sm:ml-3 sm:mt-0">
                          <p class="text-gray-400">Released</p>

                          <p class="font-medium text-textSecondary">2001</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
