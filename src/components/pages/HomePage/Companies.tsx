import Image from "next/image";
import React from "react";

const Companies = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto py-10 md:py-20 px-5 md:px-16">
        <p className=" text-center text-slate-600 text-lg sm:text-xl font-medium font-['Inter'] mb-8 md:mb-11">
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>
        <div className="w-full aspect-[1372/43] relative">
          <Image
            src="https://ik.imagekit.io/wsn0zb24lgi/companies_kRgbQrkLDd.svg"
            alt="companies using our product"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Companies;
