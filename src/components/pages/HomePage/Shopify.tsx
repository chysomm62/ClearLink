import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const Shopify = () => {
  return (
    <section className=" bg-gray-50">
      <div className="max-w-screen-xl mx-auto py-10 md:py-20 px-5 md:px-16 flex flex-col lg:flex-row lg:items-stretch gap-7 md:gap-4">
        <div className="lg:flex-1">
          <div className="w-[112.79px] h-8 relative">
            <Image
              src="/images/Shopify.svg"
              alt="Shopify logo"
              fill
              sizes="100%"
              className=" object-contain"
            />
          </div>
          <div className="w-[116px] h-5 justify-start items-center gap-1 inline-flex my-4 md:my-7">
            {Array.from(Array(5).keys()).map((i) => (
              <div
                className="text-blue-700/30 -rotate-180 text-lg md:text-[22px] font-['Roboto']"
                key={i}
              >
                <FaStar fontSize={20} fill="#FDB022" />
              </div>
            ))}
          </div>

          <h2 className="max-w-[640px] text-gray-900 text-3xl sm:text-4xl md:text-[44px] font-medium font-['Inter'] leading-tight sm:leading-tight md:leading-tight">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and
            <br />
            top-notch security make it essential for our team.
          </h2>

          <div className="justify-start items-start gap-3 flex mt-5 sm:mt-8">
            <div className="justify-start items-start gap-4 flex">
              <div className="w-14 h-14 rounded-[200px] relative">
                <Image
                  src="https://ik.imagekit.io/wsn0zb24lgi/sarah_ULI7sqVC5.svg"
                  alt="Sarah Thompson avatar"
                  fill
                  sizes="100%"
                  className=" object-contain"
                />
              </div>
              <div className="flex-col justify-start items-start gap-0.5 flex">
                <h4 className="self-stretch text-gray-900 text-lg sm:text-xl font-semibold font-['Inter']">
                  Sarah Thompson
                </h4>
                <p className="self-stretch text-slate-600 text-sm sm:text-lg font-normal font-['Inter']">
                  Project Manager, Shopify
                </p>
              </div>
            </div>
            <div className="justify-start items-start gap-4 sm:gap-8 flex ml-auto">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-white bg-opacity-90 rounded-[28px] border border-blue-100 justify-center items-center gap-3 flex text-lg sm:text-2xl">
                <FaArrowLeft fill="#175CD3" />
              </div>
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-white bg-opacity-90 rounded-[28px] border border-blue-100 justify-center items-center gap-3 flex text-lg sm:text-2xl">
                <FaArrowRight fill="#175CD3" />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-xl w-full aspect-[640/496] relative">
          <Image
            src="https://ik.imagekit.io/wsn0zb24lgi/tech-guys_uQhwicDLO.svg"
            alt="tech guys"
            fill
            sizes="100%"
            className=" object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Shopify;
