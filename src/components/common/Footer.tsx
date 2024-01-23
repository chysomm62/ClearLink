import Image from "next/image";
import logo from "@/assets/images/logo.svg";
// import { FacebookIcon, InstagramIcon, XIcon } from "@/assets/icons";
import { Key } from "react";
import Link from "next/link";
import { UrlObject } from "url";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets/icons";

const products = [
  { text: "Overview", href: "/" },
  { text: "Features", href: "/" },
  { text: "Solutions", href: "/" },
  { text: "Tutorials", href: "/" },
  { text: "Pricing", href: "/" },
];

const company = [
  { text: "About us", href: "/" },
  { text: "Careers", href: "/" },
  { text: "Press", href: "/" },
  { text: "News", href: "/" },
  { text: "Contact", href: "/" },
];

const resources = [
  { text: "Blog", href: "/" },
  { text: "Events", href: "/" },
  { text: "Help centre", href: "/" },
  { text: "Tutorials", href: "/" },
  { text: "Support", href: "/" },
];

const legal = [
  { text: "Terms", href: "/" },
  { text: "Privacy", href: "/" },
  { text: "Cookies", href: "/" },
  { text: "Licenses", href: "/" },
  { text: "Contact", href: "/" },
];

const socials = [
  {
    link: "",
    logo: <LinkedInIcon />,
  },
  {
    link: "",
    logo: <TwitterIcon />,
  },
  {
    link: "",
    logo: <FacebookIcon />,
  },
  {
    link: "",
    logo: <InstagramIcon />,
  },
  {
    link: "",
    logo: <GithubIcon />,
  },
  {
    link: "",
    logo: <YoutubeIcon />,
  },
];
const Footer = () => {
  return (
    <footer id="solutions">
      <div className="bg-indigo-50">
        <div className=" max-w-screen-xl mx-auto px-5 md:px-16 flex flex-wrap items-start justify-between py-9 md:py-20 gap-x-5 gap-y-9 md:gap-8">
          <div className="lg:flex-1 w-full max-w-96">
            <Link href="/" title="Go to home page">
              <div className="w-[152px] h-7 relative">
                <Image
                  fill
                  sizes="100%"
                  src={logo}
                  alt="Clear link logo"
                  className="z-50 object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-slate-600 text-lg font-normal font-['Inter'] leading-7 mt-7">
              ClearLink is your gateway to effortless, high-quality video
              conferencing. Join us in shaping the future of communication!
            </p>
          </div>

          <FooterLinks header="Product" links={products} />
          <FooterLinks header="Company" links={company} />
          <FooterLinks header="Resources" links={resources} />
          <FooterLinks header="Legal" links={legal} />
          <div className="max-w-36 flex-col justify-start items-start gap-4 inline-flex">
            <h4 className="text-blue-700 text-base font-semibold font-['Inter'] leading-normal">
              Get the app
            </h4>
            <div className="w-[135px] h-10 relative bg-black rounded-[7px] border border-neutral-400">
              <Image
                src="/images/appstore.svg"
                alt="App store badge"
                fill
                sizes="100%"
                className=" object-contain"
              />
            </div>
            <div className="w-[135px] h-10 relative bg-black rounded-[7px] border border-neutral-400">
              <Image
                src="/images/playstore.svg"
                alt="Play store badge"
                fill
                sizes="100%"
                className=" object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className=" max-w-screen-xl mx-auto px-5 md:px-16 py-7 flex flex-col lg:flex-row justify-between gap-6">
          <p className="text-gray-500 text-sm md:text-base font-outfit">
            &copy; {new Date().getFullYear()} ClearLink. All rights reserved.
          </p>
          <div className="justify-start items-start gap-5 inline-flex">
            {socials.map((social, i: Key) => (
              <Link
                key={i}
                href={social.link}
                className="text-2xl text-gray-400 hover:text-blue-700"
              >
                {social.logo}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterLinks = (props: { header: string; links: any }) => {
  const { header, links } = props;
  return (
    <div className="w-[calc(50%-20px)] md:max-w-40 flex-col justify-start items-start gap-2.5 sm:gap-4 flex">
      <h4 className="text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
        {header}
      </h4>

      {links.map((link: { href: string | UrlObject; text: string }, i: Key) => (
        <Link
          href={link.href}
          key={`${link.text}-${i}`}
          className="text-slate-600 text-sm sm:text-base md:text-lg font-semibold font-['Inter'] leading-7"
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};
