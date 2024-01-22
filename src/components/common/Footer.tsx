import Image from "next/image";
import logo from "@/assets/images/logo.svg";
// import { FacebookIcon, InstagramIcon, XIcon } from "@/assets/icons";
import { Key } from "react";
import Link from "next/link";

// const socials = [
//   {
//     link: "",
//     logo: <XIcon />,
//   },
//   {
//     link: "",
//     logo: <InstagramIcon />,
//   },
//   {
//     link: "",
//     logo: <FacebookIcon />,
//   },
// ];
const Footer = () => {
  return (
    <footer>
      <div className="bg-indigo-50">
        <div className=" max-w-screen-xl mx-auto px-5 md:px-12 flex flex-col lg:flex-row items-start justify-between py-9 md:py-14">
          <div className="relative w-[284px] h-[139px] flex-[3]">
            <Image
              fill
              sizes="100%"
              alt="logo"
              className=" object-contain"
              src={logo}
            />
          </div>
          <div className=" flex-col justify-start items-start gap-4 inline-flex flex-[2]">
            <div className="text-black text-base font-normal font-outfit leading-snug tracking-tight">
              Address
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-zinc-900 text-base font-light font-outfit leading-snug tracking-tight">
                House 2/4, KSB Banjo close
              </div>
              <div className="text-zinc-900 text-base font-light font-outfit leading-snug tracking-tight">
                Off Ofada Rd.
              </div>
              <div className="text-zinc-900 text-base font-light font-outfit leading-snug tracking-tight">
                Mowe
              </div>
              <div className="text-zinc-900 text-base font-light font-outfit leading-snug tracking-tight">
                Ogun State
              </div>
            </div>
          </div>
          <div className=" flex-col justify-start items-start gap-4 inline-flex flex-[2]">
            <div className="text-black text-base font-medium font-outfit leading-snug tracking-tight">
              Contact
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-zinc-900 text-base font-light font-outfit leading-snug tracking-tight">
                +234 809 345 0000
              </div>
              <div className="text-zinc-900 text-base font-light font-outfit leading-snug tracking-tight">
                Brightwayhall@gmail.org
              </div>
            </div>
          </div>
          <div className=" flex-col justify-start items-start gap-4 inline-flex flex-[2]">
            <div className="text-neutral-700 text-base font-medium font-outfit leading-snug tracking-tight">
              Socials
            </div>
            {/* <div className="justify-start items-start gap-2.5 inline-flex">
              {socials.map((social, i: Key) => (
                <Link key={i} href={social.link} className="text-2xl">
                  {social.logo}
                </Link>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      <div className="bg-stone-900">
        <div className=" max-w-screen-xl mx-auto px-5 md:px-12 py-7">
          <p className="text-white text-sm font-light font-outfit leading-tight tracking-tight">
            {new Date().getFullYear()} All rights reserved. Bright hall and
            event center
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
