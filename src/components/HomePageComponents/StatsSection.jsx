import React from "react";

const StatsSection = () => {
  return (
    <section className="text-white container">
      <div className="   px-4 py-12 sm:px-6 md:py-16  ">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Trusted by eCommerce Businesses
          </h2>

          <p className="mt-4 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolores laborum labore provident impedit esse recusandae facere
            libero harum sequi.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium">Total Sales</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                $4.8m
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium">
                Official Addons
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                24
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium">Total Addons</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                86
              </dd>
            </div>

            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none">
              Order Now
            </button>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
