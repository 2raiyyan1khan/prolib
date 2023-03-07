import React from "react";
function CategoryList() {
  return (
    <div className="p-6 ">
      <div className="mb-7">
        <h2 className="tracking-wider  font-semibold text-lg">Categories</h2>
      </div>
      <div class="flex flex-wrap items-start justify-center ">
        <a
          class="relative px-3 py-1 m-1 text-sm rounded-full shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-400 text-gray-50 bg-gray-600 no-underline  ring-violet-400 ring-opacity-75"
          href="/components/article"
        >
          <span class="absolute top-0 right-0 p-1 text-xs opacity-0 group-hover:opacity-100 text-gray-100">
            {" "}
            {1}
          </span>
          <span class="text-sm font-medium tracking-wider">All</span>
        </a>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, i) => {
          return (
            <a
              key={i}
              class="relative px-3 py-1 m-1 text-sm rounded-full shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring-1 hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-400 text-gray-50 bg-gray-600 no-underline"
              href="/components/article"
            >
              <span class="absolute top-0 right-0 p-1 text-xs opacity-0 group-hover:opacity-100 text-gray-100">
                {" "}
                {i + 2}
              </span>
              <span class="text-sm font-medium tracking-wider">
                Article with t
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryList;
