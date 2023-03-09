import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryList from "../CategoryList/CategoryList";
import DataTable from "../Common/DataTable";
import Bar from "../Common/Icon/Bar";
import PageTitle from "../Common/PageTitle";
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

  const columns = [
    {
      id: 1,
      title: "Title",
    },
    {
      id: 2,
      title: "Year",
    },
    {
      id: 3,
      title: "Page",
    },
    {
      id: 4,
      title: "Added",
    },
  ];
  return (
    <div className="">
      <PageTitle title="Categories">
        <button
          onClick={() => setShowCategories(!showCategories)}
          className="hover:cursor-pointer rounded-lg   p-2 shadow-sm hover:shadow-lg hover:ring-violet-400 hover:ring-1"
        >
          <Bar />
        </button>
      </PageTitle>

      <section className="flex gap-6">
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
            <article className="">
              <strong class="text-mainPrimary uppercase text-xs font-medium tracking-wider ">
                all
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
      <DataTable columns={columns} />
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
