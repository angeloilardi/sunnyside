"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "public/images/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "services",
    },
    {
      id: 3,
      link: "projects",
    },
  ];

  return (
    <div className="flex justify-start items-center w-full text-white bg-transparent p-5">
      {/* Logo */}
      <div>
        <h1 className="text-5xl">
          <a className="underline" href="" target="_blank" rel="noreferrer">
            <Logo fill="#FFF" />
          </a>
        </h1>
      </div>

      {/* Deesktop navigation */}
      <ul className="hidden md:flex ml-auto items-center">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="px-8 cursor-pointer capitalize text-silver hover:text-very_dark_violet font-semibold"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}

        <li>
          <button className="bg-white text-gunmetal rounded-full p-4 w-[140px] hover:opacity-60 font-fraunces">
            CONTACT
          </button>
        </li>
      </ul>

      {/* Burger menu */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-500 md:hidden ml-auto"
      >
        <Image src="/images/icon-hamburger.svg" width={24} height={18} alt="" />
      </div>

      {/* Mobile navigation */}

      {nav && (
        <>
          <div
            className="w-0 h-0 md:hidden
                                    [border-width:0_0_22px_22px]
                                    [border-color:transparent_transparent_#FFF_transparent] absolute top-16 right-[6%]"
          ></div>
          <ul className="md:hidden flex flex-col justify-center items-center absolute w-[88%] top-20 bg-white text-french_gray font-semibold aspect-[11/9] max-h-[480px] left-[6%] -right-[6%] gap-10 py-10 px-4 z-10 font-barlow">
            {links.map(({ id, link }) => (
              <li key={id} className=" cursor-pointer capitalize text-lg">
                <Link onClick={() => setNav(!nav)} href={link}>
                  {link}
                </Link>
              </li>
            ))}
            <li>
              <button className="bg-gold text-gunmetal rounded-full p-4 w-[140px] hover:opacity-60 font-fraunces">
                CONTACT
              </button>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Navbar;
