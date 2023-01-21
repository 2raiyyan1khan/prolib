import React from "react";
import { Link } from "react-router-dom";
import ListHeader from "../../Common/ListHeader";
import Sidebar from "../../Sidebar";

const BookList = () => {
  return (
    <>
      <div className="mb-8">
        {/* <ListHeader /> */}
        <h2 className="text-2xl font-medium text-textPrimary">Latest</h2>
        {/* header */}
        <div className="grid gap-1 py-6">
          {/* <div className="col-span-1">
            <Sidebar />
          </div> */}
          <div className="grid grid-cols-4  grid-flow-row gap-5 col-span-3 gap-y-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => {
              return (
                <div
                  key={i}
                  className="bg-mainOffPrimary rounded-lg  p-4 shadow-lg cursor-pointer group hover:scale-110 hover:z-20 transition-all ease-linear duration-500"
                >
                  <Link to={"/book/20"} class="block ">
                    <img
                      alt="Home"
                      src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      class="h-56 w-full rounded-lg object-cover"
                    />

                    <div class="mt-2">
                      <dl>
                        <div>
                          <dt class="sr-only">Address</dt>

                          <dd class="font-medium text-textPrimary">
                            123 Wallaby Avenue, Park Road
                          </dd>
                          <p className="text-textSecondary text-sm opacity-70">
                            category
                          </p>
                        </div>
                      </dl>

                      <div class="mt-6 flex items-center gap-8 text-xs">
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

      <div className="static ">
        {/* <ListHeader /> */}
        <h2 className="text-2xl font-medium text-textPrimary">Popular</h2>
        {/* header */}
        <div className="grid gap-1 py-6">
          {/* <div className="col-span-1">
            <Sidebar />
          </div> */}
          <div className="grid grid-cols-4  grid-flow-row gap-5 col-span-3 gap-y-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => {
              return (
                <div
                  key={i}
                  className="bg-mainOffPrimary rounded-lg  p-4 shadow-lg cursor-pointer group hover:scale-110 hover:z-20 transition-all ease-linear duration-500"
                >
                  <Link to={"/book/20"} class="block ">
                    <img
                      alt="Home"
                      src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      class="h-56 w-full rounded-lg object-cover"
                    />

                    <div class="mt-2">
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

                      <div class="mt-6 flex items-center gap-8 text-xs">
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
    </>
  );
};

export default BookList;
