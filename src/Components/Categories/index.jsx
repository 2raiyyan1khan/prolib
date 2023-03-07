import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import CategoryList from "../CategoryList/CategoryList";
import Bar from "../Common/Icon/Bar";
import Modal from "./Modal";
const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showCategories, setShowCategories] = useState(false);
  useEffect(() => {
    if (searchParams.get("category")) {
    } else {
      searchParams.set("category", "All");
      setSearchParams(searchParams);
    }
  }, []);

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium text-textPrimary "> Categories</h2>
        <button
          onClick={() => setShowCategories(!showCategories)}
          className="hover:cursor-pointer rounded-lg   p-2 shadow-sm hover:shadow-lg hover:ring-violet-400 hover:ring-1"
        >
          <Bar />
        </button>
      </div>

      <section className="flex gap-6 mt-14">
        <article className="relative w-full">
          <img
            className="blur-2xl overflow-clip   opacity-70  transition-opacity duration-300  w-1/4 h-44 "
            src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="bg"
          />
          <div className=" absolute inset-0 flex gap-6 ">
            <img
              alt="Les Paul"
              src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="object-cover w-48 h-44 aspect-square rounded-xl"
            />
            <article className="pt-3">
              <strong class="text-mainPrimary uppercase text-xs font-medium tracking-wider ">
                ALL
              </strong>
              <div class="flex justify-between">
                <div class="max-w-[35ch]">
                  <h1 class="text-2xl font-bold text-textPrimary">
                    Fun Product
                  </h1>

                  <p class="mt-0.5 text-sm text-textSecondary">
                    Highest Rated Product
                  </p>
                </div>
              </div>

              <details class="group relative mt-2 [&_summary::-webkit-details-marker]:hidden">
                <summary class="block">
                  <div>
                    <div class="prose max-w-sm group-open:hidden text-textPrimary">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa veniam dicta beatae eos.
                      </p>
                    </div>
                  </div>
                </summary>
              </details>
            </article>
          </div>
        </article>
      </section>
      <div class="overflow-x-auto pt-16 min-h-screen">
        <table class="min-w-full text-sm divide-y-2 overflow-hidden  divide-mainPrimary bg-mainOffPrimary rounded-lg shadow-sm">
          <thead className="">
            <tr>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-textPrimary w-14 ">
                #
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-textPrimary">
                Title
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-textPrimary ">
                Year
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-textPrimary ">
                Page
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-textPrimary ">
                Added
              </th>
            </tr>
          </thead>

          <tbody class="bg-mainOffPrimary divide-y-4 divide-bgPrimary">
            <tr className="hover:bg-bgPrimary">
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                1
              </td>
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary w-[470px]">
                <section className="flex gap-4 w-full">
                  <article>
                    <img
                      alt="Les Paul"
                      src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      class="object-cover w-16 h-16 aspect-square rounded"
                    />
                  </article>

                  <article className="">
                    <div class="flex justify-between">
                      <div class="max-w-[35ch]">
                        <Link to={"/book/10"} class="text-lg font-medium">
                          Fun Product
                        </Link>

                        <p class="mt-0.5 text-sm text-gray-600 font-normal">
                          Highest Rated Product
                        </p>
                      </div>
                    </div>
                  </article>
                </section>
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                24/05/1995
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                Singer
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                $20,000
              </td>
            </tr>

            <tr class="[&>*]:whitespace-nowrap [&>*]:px-4 [&>*]:py-2 hover:bg-bgPrimary">
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                2
              </td>
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                <section className="flex gap-4 w-full">
                  <article>
                    <img
                      alt="Les Paul"
                      src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      class="object-cover w-16 h-16 aspect-square rounded"
                    />
                  </article>

                  <article className="">
                    <div class="flex justify-between">
                      <div class="max-w-[35ch]">
                        <Link to={"/book/10"} class="text-lg font-medium">
                          Fun Product
                        </Link>

                        <p class="mt-0.5 text-sm text-gray-600 font-normal">
                          Highest Rated Product
                        </p>
                      </div>
                    </div>
                  </article>
                </section>
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                24/05/1995
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                Singer
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                $20,000
              </td>
            </tr>

            <tr class="[&>*]:whitespace-nowrap [&>*]:px-4 [&>*]:py-2 hover:bg-bgPrimary">
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                3
              </td>
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                <section className="flex gap-4 w-full">
                  <article>
                    <img
                      alt="Les Paul"
                      src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      class="object-cover w-16 h-16 aspect-square rounded"
                    />
                  </article>

                  <article className="">
                    <div class="flex justify-between">
                      <div class="max-w-[35ch]">
                        <Link to={"/book/10"} class="text-lg font-medium">
                          Fun Product
                        </Link>

                        <p class="mt-0.5 text-sm text-gray-600 font-normal">
                          Highest Rated Product
                        </p>
                      </div>
                    </div>
                  </article>
                </section>
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                24/05/1995
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                Singer
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                $20,000
              </td>
            </tr>
            <tr class="[&>*]:whitespace-nowrap [&>*]:px-4 [&>*]:py-2 hover:bg-bgPrimary">
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                3
              </td>
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                <section className="flex gap-4 w-full">
                  <article>
                    <img
                      alt="Les Paul"
                      src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      class="object-cover w-16 h-16 aspect-square rounded"
                    />
                  </article>

                  <article className="">
                    <div class="flex justify-between">
                      <div class="max-w-[35ch]">
                        <Link to={"/book/10"} class="text-lg font-medium">
                          Fun Product
                        </Link>

                        <p class="mt-0.5 text-sm text-gray-600 font-normal">
                          Highest Rated Product
                        </p>
                      </div>
                    </div>
                  </article>
                </section>
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                24/05/1995
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                Singer
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                $20,000
              </td>
            </tr>
            <tr class="[&>*]:whitespace-nowrap [&>*]:px-4 [&>*]:py-2">
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                3
              </td>
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                <section className="flex gap-4 w-full">
                  <article>
                    <img
                      alt="Les Paul"
                      src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      class="object-cover w-16 h-16 aspect-square rounded"
                    />
                  </article>

                  <article className="">
                    <div class="flex justify-between">
                      <div class="max-w-[35ch]">
                        <Link to={"/book/10"} class="text-lg font-medium">
                          Fun Product
                        </Link>

                        <p class="mt-0.5 text-sm text-gray-600 font-normal">
                          Highest Rated Product
                        </p>
                      </div>
                    </div>
                  </article>
                </section>
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                24/05/1995
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                Singer
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                $20,000
              </td>
            </tr>
            <tr class="[&>*]:whitespace-nowrap [&>*]:px-4 [&>*]:py-2">
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                3
              </td>
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                <section className="flex gap-4 w-full">
                  <article>
                    <img
                      alt="Les Paul"
                      src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      class="object-cover w-16 h-16 aspect-square rounded"
                    />
                  </article>

                  <article className="">
                    <div class="flex justify-between">
                      <div class="max-w-[35ch]">
                        <Link to={"/book/10"} class="text-lg font-medium">
                          Fun Product
                        </Link>

                        <p class="mt-0.5 text-sm text-gray-600 font-normal">
                          Highest Rated Product
                        </p>
                      </div>
                    </div>
                  </article>
                </section>
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                24/05/1995
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                Singer
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                $20,000
              </td>
            </tr>
            <tr class="[&>*]:whitespace-nowrap [&>*]:px-4 [&>*]:py-2">
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                3
              </td>
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                <section className="flex gap-4 w-full">
                  <article>
                    <img
                      alt="Les Paul"
                      src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      class="object-cover w-16 h-16 aspect-square rounded"
                    />
                  </article>

                  <article className="">
                    <div class="flex justify-between">
                      <div class="max-w-[35ch]">
                        <Link to={"/book/10"} class="text-lg font-medium">
                          Fun Product
                        </Link>

                        <p class="mt-0.5 text-sm text-gray-600 font-normal">
                          Highest Rated Product
                        </p>
                      </div>
                    </div>
                  </article>
                </section>
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                24/05/1995
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                Singer
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                $20,000
              </td>
            </tr>
            <tr class="[&>*]:whitespace-nowrap [&>*]:px-4 [&>*]:py-2">
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                3
              </td>
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                <section className="flex gap-4 w-full">
                  <article>
                    <img
                      alt="Les Paul"
                      src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      class="object-cover w-16 h-16 aspect-square rounded"
                    />
                  </article>

                  <article className="">
                    <div class="flex justify-between">
                      <div class="max-w-[35ch]">
                        <Link to={"/book/10"} class="text-lg font-medium">
                          Fun Product
                        </Link>

                        <p class="mt-0.5 text-sm text-gray-600 font-normal">
                          Highest Rated Product
                        </p>
                      </div>
                    </div>
                  </article>
                </section>
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                24/05/1995
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                Singer
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                $20,000
              </td>
            </tr>
            <tr class="[&>*]:whitespace-nowrap [&>*]:px-4 [&>*]:py-2">
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                3
              </td>
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                <section className="flex gap-4 w-full">
                  <article>
                    <img
                      alt="Les Paul"
                      src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      class="object-cover w-16 h-16 aspect-square rounded"
                    />
                  </article>

                  <article className="">
                    <div class="flex justify-between">
                      <div class="max-w-[35ch]">
                        <Link to={"/book/10"} class="text-lg font-medium">
                          Fun Product
                        </Link>

                        <p class="mt-0.5 text-sm text-gray-600 font-normal">
                          Highest Rated Product
                        </p>
                      </div>
                    </div>
                  </article>
                </section>
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                24/05/1995
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                Singer
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                $20,000
              </td>
            </tr>
            <tr class="[&>*]:whitespace-nowrap [&>*]:px-4 [&>*]:py-2">
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                3
              </td>
              <td class="whitespace-nowrap px-4 py-2 font-medium text-textPrimary">
                <section className="flex gap-4 w-full">
                  <article>
                    <img
                      alt="Les Paul"
                      src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      class="object-cover w-16 h-16 aspect-square rounded"
                    />
                  </article>

                  <article className="">
                    <div class="flex justify-between">
                      <div class="max-w-[35ch]">
                        <Link to={"/book/10"} class="text-lg font-medium">
                          Fun Product
                        </Link>

                        <p class="mt-0.5 text-sm text-gray-600 font-normal">
                          Highest Rated Product
                        </p>
                      </div>
                    </div>
                  </article>
                </section>
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                24/05/1995
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                Singer
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-textSecondary ">
                $20,000
              </td>
            </tr>
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex justify-end items-center  ">
          <div class=" mt-4 inline-flex  items-center justify-center gap-3 rounded-lg bg-mainOffPrimary px-3  shadow-sm">
            <div className="border-r-4 border-bgPrimary py-1">
              <a
                href="#"
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
              </a>
            </div>
            <p class="text-xs text-textPrimary">
              3<span class="mx-0.25">/</span>
              12
            </p>
            <div className="border-l-4 border-bgPrimary py-1">
              <a
                href="#"
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
              </a>
            </div>
          </div>
        </div>
      </div>
      <Modal
        handleClose={() => setShowCategories(!showCategories)}
        isOpen={showCategories}
      >
        <CategoryList />
      </Modal>
    </div>
  );
};

export default Categories;
