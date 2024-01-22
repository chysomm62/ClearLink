import { RobotIcon } from "@/assets/icons";
import Button from "@/components/common/Buttons";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: "url(/images/bg-pattern.svg)",
        backgroundPosition: "center 1%",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-screen-xl mx-auto py-7 md:py-12 pt-32 md:pt-36 px-5 md:px-12 flex flex-col lg:flex-row mt-9 items-center gap-0.5">
        <div className="flex-1">
          <h1 className=" md:max-w-3xl text-slate-800 text-4xl sm:text-5xl md:text-6xl leading-tight font-semibold font-['Inter']">
            Uniting the world,
            <br />
            one video call at a time
          </h1>
          <p className="md:max-w-xl text-gray-500 text-lg sm:text-xl md:text-2xl font-normal font-['Inter'] leading-loose my-2.5 md:my-3.5">
            Experience the future of communication with ClearLink – where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>

          <div className="flex items-center gap-0.5 my-4 md:my-5">
            <Button className=" bg-blue-700 text-white">
              Start your free trial
            </Button>

            <Button className="text-blue-700 text-lg shadow-none">
              <RobotIcon className="text-xl" />
              Discover AI assistant
            </Button>
          </div>

          <div className="flex items-center gap-1.5">
            <div className=" w-[152px] h-10 relative">
              <Image
                src="https://ik.imagekit.io/wsn0zb24lgi/avatars_dUhfLLwmr.svg"
                alt="combination of avatars"
                fill
                sizes="100%"
              />
            </div>
            <div>
              <div className="w-[116px] h-5 justify-start items-center gap-1 inline-flex">
                {Array.from(Array(5).keys()).map((i) => (
                  <div
                    className="text-blue-700/30 -rotate-180 text-lg md:text-[22px] font-['Roboto']"
                    key={i}
                  >
                    <FaStar fontSize={20} fill="#FDB022" />
                  </div>
                ))}
                <span className="text-slate-700 text-base font-semibold font-['Inter'] leading-none">
                  5.0
                </span>
              </div>
              <p className="text-slate-600 text-base font-medium font-['Inter'] leading-none">
                from 3,000+ reviews
              </p>
            </div>
          </div>
        </div>
        <div className=" md:max-w-xl w-full aspect-[584/424] relative">
          <Image
            fill
            sizes="100%"
            src="https://ik.imagekit.io/wsn0zb24lgi/hero-people_hd0Do547x.svg"
            alt="people of different colors"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
