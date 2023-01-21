import React, { useEffect } from "react";

import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import HomeIcon from "../Common/Icon/HomeIcon";
import LibraryIcon from "../Common/Icon/LibraryIcon";
import NavLink from "../Common/NavLink";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('location.pathname === "/"', `${location.pathname === "/"}`);
  return (
    <div class="flex flex-col justify-between h-screen bg-bgSecondary shadow-lg  w-1/6 fixed">
      <div class="px-4 py-6">
        <Link to={"/"} className="">
          <span class=" w-32 h-10 bg-mainOffPrimary text-textPrimary shadow-lg rounded-lg flex justify-center items-center font-bold text-3xl">
            ProLib
          </span>
        </Link>

        <nav aria-label="Main Nav" class="flex flex-col mt-6 space-y-2">
          <div class="relative bg-mainOffPrimary rounded-lg mb-5  focus:border-mainPrimary">
            <span class="pointer-events-none absolute inset-y-0 left-0 grid w-10 place-content-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 opacity-75"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>

            <input
              type="email"
              id="UserEmail"
              placeholder="Search"
              class="w-full h-full px-4 py-2 text-textPrimary outline-none outline-offset-2 outline-transparent focus:outline-mainPrimary rounded-lg bg-mainOffPrimary border-0  pl-10 shadow-md sm:text-sm  "
            />
          </div>

          <NavLink
            to={"/"}
            active={location.pathname === "/"}
            title={"Home"}
            icon={<HomeIcon />}
          />
          <details class="group [&_summary::-webkit-details-marker]:hidden bg-mainOffPrimary">
            <summary
              className={`flex items-center px-4 py-2 border-l-[3px]  rounded  ${
                location.pathname === "/categories"
                  ? ` border-mainPrimary text-textPrimary  `
                  : "text-textSecondary border-transparent"
              }  hover:border-mainPrimary hover:bg-mainOffPrimary hover:text-textPrimary`}
              onClick={() =>
                searchParams.get("category") ? null : navigate("/categories")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 opacity-75"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>

              <span class="ml-3 text-sm font-medium block w-full">
                {" "}
                Categories
              </span>

              <span class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <nav
              aria-label="Categories Nav"
              class="mt-1.5 p-4 flex flex-col  space-y-2 pb-4"
            >
              <NavLink
                to={"/categories?category=All"}
                active={
                  location.pathname + location.search ===
                  "/categories?category=All"
                }
                title={"All"}
              />
              <NavLink
                to={"/categories?category=Life"}
                active={
                  location.pathname + location.search ===
                  "/categories?category=Life"
                }
                title={"Life"}
              />
              <NavLink
                to={"/categories?category=Technology"}
                active={
                  location.pathname + location.search ===
                  "/categories?category=Technology"
                }
                title={"Technology"}
              />
            </nav>
          </details>
        </nav>
      </div>

      <div class="sticky inset-x-0 bottom-0  shadow-md px-4 mb-4">
        <details class="group [&_summary::-webkit-details-marker]:hidden  bg-mainOffPrimary ">
          <summary
            onClick={() =>
              location.pathname.includes("/profile")
                ? null
                : navigate("/profile/my-library")
            }
            className={`flex items-center px-4 py-2 border-l-[3px]  rounded  ${
              location.pathname.includes("/profile")
                ? ` border-mainPrimary text-textPrimary bg-mainOffPrimary  `
                : "text-textSecondary border-transparent"
            }  hover:border-mainPrimary hover:bg-mainOffPrimary hover:text-textPrimary`}
          >
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="object-cover w-10 h-10 rounded-full"
            />

            <div class="ml-1.5 ">
              <p class="text-xs flex flex-col">
                <strong class="text-sm font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>
            <span class="ml-auto block transition duration-300 shrink-0 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <nav
            aria-label="Account Nav"
            class="mt-1.5 p-4 flex flex-col space-y-2"
          >
            <NavLink
              to={"/profile/my-library"}
              active={location.pathname === "/profile/my-library"}
              title={"My library"}
              icon={<LibraryIcon />}
            />
            <NavLink
              to={"/profile/logout"}
              active={location.pathname === "/profile/logout"}
              title={"Log out"}
              icon={<HomeIcon />}
            />
          </nav>
        </details>
      </div>
    </div>
  );
};

export default Sidebar;
