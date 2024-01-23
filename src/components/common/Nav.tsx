"use client";

import Logo from "@/assets/images/logo.svg";
import mobileLogo from "@/assets/images/mobileLogo.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Key, useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

import { FaChevronDown } from "react-icons/fa";
import { NavList } from "../../lib/variables/NavList";
import Button from "./Buttons";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const applyHandler = () => {
    setIsMenuOpen(false);
  };

  const linkClick = (link: string) => {
    setIsMenuOpen(false);
    router.push(link);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const path = usePathname();
  const router = useRouter();
  let basePath = "";

  try {
    basePath = path.split("/")[1];
  } catch (error) {}

  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed w-full top-0 z-10 px-2 py-2 md:px-14 md:py-5 lg:pb-0 ${
        isMenuOpen && "bottom-0"
      }`}
    >
      <div
        className={`max-w-screen-xl mx-auto shadow-12 flex justify-between items-start lg:items-center px-8 py-4 bg-gray-100  border border-gray-300 relative ${
          isMenuOpen
            ? "menu overflow-y-auto rounded-3xl lg:rounded-[100px]"
            : "h-[5.25rem] rounded-[100px]"
        }`}
      >
        <Link href="/" title="Go to home page" className="hidden lg:block ">
          <div className="hidden lg:block w-[152px] h-7 relative">
            <Image
              fill
              sizes="100%"
              src={Logo}
              alt="Clear link logo"
              className="z-50 object-contain"
              priority
            />
          </div>
        </Link>
        <Link href="/" title="Go to home page">
          <div className="lg:hidden mt-3 w-8 h-8 relative">
            <Image
              fill
              sizes="100%"
              src={mobileLogo}
              alt="Clear link logo"
              className="z-50 object-contain"
              priority
            />
          </div>
        </Link>
        <div
          className={
            isMenuOpen
              ? `lg:w-full flex items-center flex-col lg:h-auto lg:flex-row lg:justify-betwee lg:bg-transparent lg:p-0 z-10 transition duration-700 ease-in-out absolute top-20 left-5 right-5 bottom-5 lg:relative`
              : "hidden w-full lg:flex items-center justify-center flex-col lg:static lg:h-auto lg:flex-row lg:justify-between transition duration-500 ease-in-out subMenu"
          }
        >
          <ul className="flex flex-col lg:flex-row lg:ml-10 lg:justify-center lg:items-center gap-3 lg:gap-7 lg:lg:flex-1 text-left lg:text-center w-full lg:px-1 lg:flex-1 py-6 lg:py-0">
            {NavList.map((link, index: Key) => (
              <Dropdown
                key={`${link.label} - ${index}`}
                link={link}
                basePath={basePath}
                linkClick={linkClick}
              />
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <Button className=" bg-white border border-gray-400 text-gray-900 ">
            Talk to sales
          </Button>

          <Button className="bg-blue-700 text-white">Sign up for free</Button>
        </div>

        <div className="flex gap-4 items-center z-50 lg:hidden py-3 lg:py-0">
          <button className="relative z-10 md:hidden pl-3" onClick={toggleMenu}>
            {isMenuOpen ? (
              <div className="border border-purple-1 rounded-full p-1">
                <MdClose color="black" fontSize="25px" />
              </div>
            ) : (
              <MdMenu fontSize="25px" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

const Dropdown = (props: { link: any; basePath: string; linkClick: any }) => {
  const { link, basePath, linkClick } = props;
  const [subOpen, setSubOpen] = useState(false);
  return (
    <>
      <li
        onClick={() => {
          linkClick(link.href);
        }}
        className={
          basePath === link.id
            ? `text-gray-500 text-lg font-semibold font-inter leading-7 hover:text-green-1 cursor-pointer text-green-1 lg:relative transition duration-500 ease-in flex items-center justify-between py-3 tracking-wider hover:text-blue-700`
            : "text-gray-500 text-lg font-semibold font-inter leading-7 hover:text-green-1 cursor-pointer lg:relative transition duration-500 ease-in flex items-center justify-between py-3 tracking-wider hover:text-blue-700"
        }
      >
        {link.label}{" "}
        {link.sub && (
          <button
            className={`px-1.5 py-1.5 text-lg text-gray-500 !rounded-full   ${
              subOpen && "rotate-180"
            } `}
            onClick={() => {
              subOpen ? setSubOpen(false) : setSubOpen(true);
            }}
            title="Show more options"
          >
            <FaChevronDown size={18} />
          </button>
        )}
      </li>
    </>
  );
};
