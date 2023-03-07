import React from "react";
import { Carousel } from "react-responsive-carousel";

const BookDetails = () => {
  return (
    <section className="h-full">
      <div class="relative mx-auto max-w-screen pb-16">
        <div class="grid gap-8 lg:grid-cols-5 lg:items-start">
          <div class="lg:col-span-3 shadow-sm rounded-lg">
            <div>
              <Carousel>
                <div>
                  <img
                    alt="Tee"
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    class="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                  />
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img
                    alt="Tee"
                    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    class="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                  />
                  <p className="legend">Legend 2</p>
                </div>
                <div>
                  <img
                    alt="Tee"
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    class="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                  />
                  <p className="legend">Legend 3</p>
                </div>
              </Carousel>
            </div>
          </div>

          <div class="lg:sticky lg:top-0 pt-4 col-span-2 bg-mainOffPrimary p-5 rounded-lg shadow-sm">
            <div>
              <strong class="text-mainPrimary uppercase text-xs font-medium tracking-wider ">
                Category
              </strong>
              <h1 class="text-xl font-semibold lg:text-3xl text-textPrimary">
                Simple Clothes Basic Tee
              </h1>
              <p className="text-textPrimary text-base mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                error?
              </p>
            </div>
            <form class="space-y-4 lg:pt-8 ">
              <div role="alert" class="rounded-lg   bg-bgPrimary p-4">
                <strong class="block font-medium text-red-500 ">
                  {" "}
                  Remainder
                </strong>

                <p class="text-xs text-red-200">
                  You have total available limit 2 of 2 to add in your library
                </p>
              </div>
              <div className="h-3">
                {/* <p class="text-xl font-bold">$19.99</p> */}
              </div>
              <div className="flex justify-between items-center gap-4 ">
                <button
                  type="button"
                  className="w-full font-bold hover:bg-bgPrimary text-mainPrimary uppercase tracking-wide px-6 py-3 text-sm rounded focus:ring hover:ring-1 focus:ring-opacity-75  focus:ring-violet-400 hover:ring-violet-400"
                >
                  Preview
                </button>
                <button
                  type="button"
                  className="w-full font-bold uppercase tracking-wide px-6 py-3 text-sm rounded focus:ring-1 hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400"
                >
                  Add library
                </button>
              </div>
            </form>
          </div>

          <div class="lg:col-span-3 bg-mainOffPrimary p-5 rounded-lg shadow-sm">
            <div class="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
              <h3 className="font-semibold text-xl mb-2 text-textPrimary">
                Description
              </h3>
              <p className="text-textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                ad labore nostrum, a explicabo iste est dolorem deserunt id
                ullam magni accusamus saepe, nulla sed sint reiciendis, aperiam
                cumque officiis!
              </p>

              <p className="text-textSecondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                eveniet ipsam mollitia nesciunt illo! Suscipit, corrupti!
              </p>
            </div>

            <div class="max-w-2xl mx-auto mt-12">
              <h3 className="font-semibold text-xl text-textPrimary">
                Ratings
              </h3>
              <p className=" mb-2 text-textSecondary text-sm">
                Total Review: 4000
              </p>

              <div class="flex items-center">
                <svg
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="w-5 h-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <div class="max-w-2xl mx-auto mt-6">
              <h3 className="font-semibold text-xl mb-4 text-textPrimary">
                Post a Review
              </h3>
              <div class="flex items-center">
                <svg
                  class="w-8 h-8 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="w-8 h-8 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="w-8 h-8 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="w-8 h-8 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="w-8 h-8 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <div className="mt-4">
                <input
                  type="search"
                  name="Search"
                  placeholder="Search..."
                  className="w-80 py-2 pl-3 text-sm dark:border-transparent shadow-sm rounded-md  focus:outline-none  focus:ring-1 focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 block"
                />
                <button
                  type="button"
                  className="min-w-max mt-4 font-bold uppercase tracking-wide px-3 py-2 text-sm rounded focus:ring-1 hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
