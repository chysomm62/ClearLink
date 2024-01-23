"use client";

import { MinusIcon, PlusIcon } from "@/assets/icons";
import { FAQuestions } from "@/lib/variables/FAQuestions";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQs = () => {
  const [show, setShow] = useState(null);

  const handleClick = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLHeadingElement, MouseEvent>,
    index: any
  ) => {
    if (show === index) {
      setShow(null);
    } else {
      setShow(index);
    }
  };
  return (
    <section id="resources">
      <div className="max-w-screen-xl mx-auto py-10 md:py-20 px-5 md:px-16 flex flex-col lg:flex-row lg:items-stretch gap-7 md:gap-14 justify-between">
        <div className=" max-w-[490px]">
          <span className="text-blue-700 text-lg font-semibold font-['Inter'] leading-7">
            Support
          </span>
          <h2 className="text-slate-800 text-3xl sm:text-4xl md:text-5xl font-semibold font-['Inter'] leading-tight my-2">
            FAQs
          </h2>
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl font-normal font-['Inter'] leading-loose">
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please{" "}
            <span className=" underline">chat to our friendly team</span>.
          </p>
        </div>

        <div className="lg:flex-1">
          {FAQuestions &&
            FAQuestions.map((question, index) => {
              return (
                <div
                  key={`${question} - ${index}`}
                  className={`py-5 p-8 ${
                    show === index &&
                    "bg-gray-50 border-gray-200 border rounded-2xl"
                  }  border-b border-gray-200 last:border-b-0`}
                >
                  <div className="font-normal text-base flex items-start justify-between gap-2 md:gap-5 font-inter">
                    <div className="flex items-start gap-5 ">
                      <div>
                        <h4
                          className={`${
                            show === index && ""
                          }  text-gray-900 text-lg sm:text-xl font-semibold font-['Inter'] cursor-pointer`}
                          onClick={(
                            e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
                          ) => handleClick(e, index)}
                        >
                          {question.header}
                        </h4>
                        <p
                          className={
                            show === index
                              ? "block mt-3 text-slate-600 text-base sm:text-lg font-normal font-['Inter'] whitespace-pre-line"
                              : "hidden"
                          }
                        >
                          {question.content}
                        </p>
                      </div>
                    </div>
                    <button
                      className="text-gray-400 text-xl md:text-2xl font-normal transition ease-in-out duration-300"
                      onClick={(
                        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                      ) => handleClick(e, index)}
                    >
                      {show === index ? <MinusIcon /> : <PlusIcon />}
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
