import React from "react";

const index = () => {
  return (
    <footer
      aria-label="Site Footer"
      class="bg-bgSecondary mx-auto shadow-sm rounded-lg"
    >
      <div class="mx-auto max-w-screen-xl  px-4  sm:px-6 lg:px-8">
        {/* <div class="mx-auto max-w-md ">
          <strong class="block text-center text-xl font-medium text-gray-900 sm:text-3xl">
            Want us to email you with the latest collection?
          </strong>

          <form class="mt-6">
            <div class="relative max-w-lg">
              <label class="sr-only" for="email">
                {" "}
                Email{" "}
              </label>

              <input
                class="w-full rounded-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <button
                class="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div> */}

        <div class="py-4">
          <p class="text-center text-xs leading-relaxed text-textPrimary">
            © Company 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default index;
