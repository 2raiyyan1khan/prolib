import React from "react";

function CategoryList() {
  // "Humour and satire";
  // "Literary fiction";
  // "Mystery";
  // "Poetry";
  // "Plays";
  // "Romance";
  // "Science fiction";
  // "Short stories";
  // "Thrillers";
  // "War";
  // "Women’s fiction";
  // "Young adult";
  const data = [
    {
      id: 0,
      type: "All",
      bookList: [{ id: 1, title: "All" }],
    },
    {
      id: 1,
      type: "Fiction",
      bookList: [
        { id: 1, title: "Adventure stories" },
        { id: 2, title: "Classics" },
        {
          id: 2,
          title: "Crime",
        },
        {
          id: 2,
          title: "Fairy tales, fables, and folk tales",
        },
        {
          id: 2,
          title: "Fantasy",
        },
        {
          id: 2,
          title: "Historical fiction",
        },
        {
          id: 2,
          title: "Horror",
        },
      ],
    },
    {
      id: 2,
      type: "Non-Fiction",
      bookList: [
        { id: 1, title: "Adventure stories" },
        { id: 2, title: "Classics" },
        {
          id: 2,
          title: "Crime",
        },
        {
          id: 2,
          title: "Fairy tales, fables, and folk tales",
        },
        {
          id: 2,
          title: "Fantasy",
        },
        {
          id: 2,
          title: "Historical fiction",
        },
        {
          id: 2,
          title: "Horror",
        },
      ],
    },
  ];

  return (
    <div className="p-6 ">
      <div className="mb-7">
        <h2 className="tracking-wider  font-semibold text-lg">Categories</h2>
      </div>
      <div class="">
        {data.map((item, i) => {
          return (
            <div key={i} className="mb-8">
              <h2 className="mb-8">{item.type}</h2>
              <div class="flex flex-wrap items-start justify-center ">
                {item.bookList &&
                  item.bookList.map((el, index) => {
                    return (
                      <button
                        key={index}
                        class="flex items-center h-16 w-auto justify-center px-3 py-1 text-sm border border-bgPrimary shadow-sm    hover:ring-1 hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-400 text-gray-50 bg-gray-600 no-underline"
                      >
                        <span class="text-sm font-medium tracking-wider">
                          {el.title}
                        </span>
                      </button>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryList;
