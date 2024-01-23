import Button from "@/components/common/Buttons";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";

const Subscribe = () => {
  return (
    <section className="relative py-10 md:py-20 " id="pricing">
      <div className="w-full md:max-w-xl absolute right-0 top-2/4 -translate-y-1/2 aspect-[872/609] hidden lg:block ">
        <Image
          src="https://ik.imagekit.io/wsn0zb24lgi/screen_ksQ5T0uuP.svg"
          alt="man smilling"
          fill
          sizes="100%"
          className=" object-contain"
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-5 md:px-16 flex flex-col lg:flex-row lg:items-stretch gap-5 md:gap-4">
        <div className="max-w-[579px]">
          <h3 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-semibold font-['Inter'] leading-tight my-1.5">
            Ready to clear the path to perfect communication?
          </h3>
          <div className="my-5 sm:my-7">
            {[
              "30 days free trial",
              "Cancel at any time",
              "Access to all features",
              "Peronalized onboarding",
            ].map((val) => (
              <div
                key={val}
                className="flex items-center gap-1.5 sm:gap-2.5 my-3"
              >
                <FaRegCheckCircle fill="#175CD3" size={28} />
                &nbsp;
                <span className="text-slate-600 text-xl sm:text-2xl font-normal font-['Inter']">
                  {val}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-2">
            <Button className=" bg-white border border-gray-400 text-gray-900 ">
              Talk to sales
            </Button>

            <Button className="bg-blue-700 text-white">Sign up for free</Button>
          </div>
        </div>
        <div className="lg:flex-1 lg:hidden block relative w-full aspect-[872/609]">
          <Image
            src="https://ik.imagekit.io/wsn0zb24lgi/screen_ksQ5T0uuP.svg"
            alt="man smilling"
            fill
            sizes="100%"
            className=" object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
