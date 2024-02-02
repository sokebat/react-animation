import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

const TestimonialSection = () => {
  return (
    <section>
      <div className="mx-auto  w-full p-6 ">
        <div className="  flex flex-col items-start justify-between sm:flex-row  ">
          <div className=" w-[60%]">
            <p className="  text-4xl font-bold tracking-tight text-orange-500  sm:text-5xl">
              Read trusted reviews from our customers
            </p>
          </div>

          <div >
            {" "}
            <Carousel>
              <CarouselContent className=" flex items-end ">
                <CarouselItem className=" w-48">
                  <div className="bg-[#0D0E1B] max-w-md h-auto rounded-xl overflow-hidden p-2 flex flex-col justify-between">
                    <blockquote className="flex h-full flex-col justify-between p-6 shadow-sm sm:p-8 lg:p-12">
                      <div>
                        <div className="flex gap-0.5 text-green-500">
                          {[...Array(5)].map((_, index) => (
                            <svg
                              key={index}
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        <div className="mt-4">
                          <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                            Stayin' Alive
                          </p>

                          <p className="mt-4 leading-relaxed text-white">
                            No, Rose, they are not breathing. And they have no
                            arms or legs … Where are they? You know what? If we
                            come across somebody with no arms or legs, do we
                            bother resuscitating them? I mean, what quality of
                            life do we have there?
                          </p>
                        </div>
                      </div>

                      <footer className="mt-4 text-sm font-medium text-gray-300 sm:mt-6">
                        &mdash; Michael Scott
                      </footer>
                    </blockquote>
                  </div>
                </CarouselItem>
                <CarouselItem className=" w-48">
                  <div className="bg-[#0D0E1B] max-w-md h-auto rounded-xl overflow-hidden p-2 flex flex-col justify-between">
                    <blockquote className="flex h-full flex-col justify-between p-6 shadow-sm sm:p-8 lg:p-12">
                      <div>
                        <div className="flex gap-0.5 text-green-500">
                          {[...Array(5)].map((_, index) => (
                            <svg
                              key={index}
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        <div className="mt-4">
                          <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                            Stayin' Alive
                          </p>

                          <p className="mt-4 leading-relaxed text-white">
                            No, Rose, they are not breathing. And they have no
                            arms or legs … Where are they? You know what? If we
                            come across somebody with no arms or legs, do we
                            bother resuscitating them? I mean, what quality of
                            life do we have there?
                          </p>
                        </div>
                      </div>

                      <footer className="mt-4 text-sm font-medium text-gray-300 sm:mt-6">
                        &mdash; Michael Scott
                      </footer>
                    </blockquote>
                  </div>
                </CarouselItem>
                <CarouselItem className=" w-48">
                  <div className="bg-[#0D0E1B] max-w-md h-auto rounded-xl overflow-hidden p-2 flex flex-col justify-between">
                    <blockquote className="flex h-full flex-col justify-between p-6 shadow-sm sm:p-8 lg:p-12">
                      <div>
                        <div className="flex gap-0.5 text-green-500">
                          {[...Array(5)].map((_, index) => (
                            <svg
                              key={index}
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        <div className="mt-4">
                          <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                            Stayin' Alive
                          </p>

                          <p className="mt-4 leading-relaxed text-white">
                            No, Rose, they are not breathing. And they have no
                            arms or legs … Where are they? You know what? If we
                            come across somebody with no arms or legs, do we
                            bother resuscitating them? I mean, what quality of
                            life do we have there?
                          </p>
                        </div>
                      </div>

                      <footer className="mt-4 text-sm font-medium text-gray-300 sm:mt-6">
                        &mdash; Michael Scott
                      </footer>
                    </blockquote>
                  </div>
                </CarouselItem>
                
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
