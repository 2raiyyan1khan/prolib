import React from "react";
import { Carousel } from "react-responsive-carousel";

const BookDetails = () => {
  return (
    <section className="h-screen">
      <div class="relative mx-auto max-w-screen pb-16">
        <div class="grid gap-8 lg:grid-cols-5 lg:items-start">
          <div class="lg:col-span-3 shadow-lg rounded-lg">
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

          <div class="lg:sticky lg:top-0 pt-4 col-span-2 bg-mainOffPrimary p-4 rounded-lg shadow-lg">
            <div>
              <strong class="rounded-lg bg-bgSecondary  text-textPrimary shadow-lg px-3 py-1  uppercase text-xs font-medium tracking-wider ">
                Category
              </strong>
              <h1 class="text-2xl font-semibold lg:text-3xl text-textPrimary">
                Simple Clothes Basic Tee
              </h1>
              <p className="text-textPrimary mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                error?
              </p>
            </div>
            <form class="space-y-4 lg:pt-8 ">
              <div
                role="alert"
                class="rounded-lg  border-l-4 border-red-300 bg-bgSecondary px-4 py-2"
              >
                <strong class="block font-medium text-red-300">
                  {" "}
                  Remainder
                </strong>

                <p class="mt-1 text-sm text-red-300">
                  You have total available limit 2 of 2 to add in your library
                </p>
              </div>
              <div className="h-3">
                {/* <p class="text-xl font-bold">$19.99</p> */}
              </div>
              <div className="flex justify-between items-center gap-4 ">
                <button
                  type="submit"
                  class="w-full rounded-lg  hover:bg-bgSecondary  hover:shadow-lg text-mainPrimary px-6 py-3 text-sm font-bold uppercase tracking-wide "
                >
                  Preview
                </button>
                <button
                  type="button"
                  class="w-full rounded-lg text-center shadow-lg bg-mainPrimary px-6 py-3 text-sm font-bold uppercase tracking-wide text-mainOffPrimary hover:bg-opacity-75"
                >
                  {" "}
                  Add library
                </button>
              </div>
            </form>
          </div>

          <div class="lg:col-span-3 bg-mainOffPrimary p-4 rounded-lg shadow-lg">
            <div class="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
              <h3 className="font-semibold text-xl mb-2 text-textPrimary">
                Description
              </h3>
              <p className="text-textPrimary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                ad labore nostrum, a explicabo iste est dolorem deserunt id
                ullam magni accusamus saepe, nulla sed sint reiciendis, aperiam
                cumque officiis!
              </p>

              <p className="text-textPrimary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                eveniet ipsam mollitia nesciunt illo! Suscipit, corrupti!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
