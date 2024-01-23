import {
  CalendarIcon,
  LockUnlockedIcon,
  RecordingIcon,
  VideoRecorderIcon,
} from "@/assets/icons";
import Image from "next/image";
import React from "react";

const advantages = [
  {
    icon: <VideoRecorderIcon />,
    title: "Crystal-clear HD video",
    description:
      "No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.",
  },
  {
    icon: <RecordingIcon />,
    title: "Noise-canceling audio",
    description:
      "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
  },
  {
    icon: <CalendarIcon />,
    title: "Scheduling made easy",
    description:
      "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
  },
  {
    icon: <LockUnlockedIcon />,
    title: "Bank-grade security",
    description:
      "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
  },
];

const Advantage = () => {
  return (
    <section id="products">
      <div className="max-w-screen-xl mx-auto py-10 md:py-20 px-5 md:px-16 text-center lg:text-left">
        <span className="text-blue-700 text-base sm:text-lg font-semibold font-['Inter']">
          The ClearLink Advantage
        </span>
        <h2 className="text-slate-800 text-3xl sm:text-4xl md:text-5xl font-semibold font-['Inter'] leading-tight my-1.5">
          Why choose ClearLink?
        </h2>
        <p className="max-w-3xl text-gray-500 text-lg sm:text-xl md:text-2xl font-normal font-['Inter'] leading-loose my-2">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>

        <div className="flex flex-col lg:flex-row lg:items-stretch gap-7 md:gap-8 mt-6 md:mt-10">
          <div className="lg:flex-1 grid grid-cols-2 justify-between gap-6 md:gap-8">
            {advantages.map((advantage, i) => (
              <div
                key={`${advantage.title}-${i}`}
                className="flex flex-col gap-2 items-center md:items-start"
              >
                <div className="w-14 h-14 p-4 bg-gray-50 rounded-[100px] border border-gray-200 justify-center items-center gap-2.5 inline-flex mb-3">
                  <div className="text-2xl relative">{advantage.icon}</div>
                </div>
                <h3 className="text-gray-900 text-lg sm:text-xl md:text-2xl font-semibold font-['Inter'] leading-tight">
                  {advantage.title}{" "}
                </h3>
                <p className="text-slate-600 text-base md:text-lg font-['Inter']">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
          <div className="relative w-full md:max-w-[544px] aspect-[544/527]">
            <div
              className="w-[238.23px] h-[157.32px] absolute -top-24 origin-top-left rotate-[-154.74deg]"
              style={{
                backgroundImage: "url(/images/Hand-drawn arrow.svg)",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            ></div>
            <Image
              src="https://ik.imagekit.io/wsn0zb24lgi/peoples_FsTB2xLJ7.svg"
              alt="People of different races smiling"
              fill
              sizes="100%"
              className=" object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
