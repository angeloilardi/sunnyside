"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "features",
    },
    {
      id: 2,
      link: "prices",
    },
    {
      id: 3,
      link: "resources",
    },
  ];

  return (
    <div className="flex justify-start items-center w-full text-white bg-transparent p-5">
      {/* Logo */}
      <div>
        <h1 className="text-5xl">
          <a className="underline" href="" target="_blank" rel="noreferrer">
            <Image src="/images/logo.svg" alt="" width={124} height={24} />
          </a>
        </h1>
      </div>

      {/* Deesktop navigation */}
      <ul className="hidden md:flex">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="px-8 cursor-pointer capitalize text-silver hover:text-very_dark_violet font-semibold"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <ul className="hidden md:flex ml-auto items-center gap-4">
        <li className="px-4 cursor-pointer capitalize text-silver hover:text-very_dark_violet font-semibold ml-auto">
          <Link href="#">Login</Link>
        </li>
        <li className="ml-auto">
          <button className="bg-robin_egg_blue text-white rounded-full px-4 py-3 w-[100px] hover:bg-robin_egg_blue/60">
            Sign Up
          </button>
        </li>
      </ul>

      {/* Burger menu */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden ml-auto"
      >
        <Image src="/images/icon-hamburger.svg" width={24} height={18} alt="" />
      </div>

      {/* Mobile navigation */}

      {nav && (
        <ul className="md:hidden flex flex-col justify-center items-center absolute w-[88%] top-28 bg-english_violet rounded-md text-white font-semibold aspect-[11/9] max-h-[480px] mx-0 left-[6%] -right-[6%] gap-8 py-8 px-4">
          {links.map(({ id, link }) => (
            <li key={id} className=" cursor-pointer capitalize text-lg">
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
          <hr className="bg-rose_quartz w-full" />
          <li className=" cursor-pointer capitalize text-lg">
            <Link onClick={() => setNav(!nav)} href="#">
              Login
            </Link>
          </li>
          <li>
            <button className="bg-robin_egg_blue text-white rounded-full p-4 w-[195px] hover:opacity-60">
              Sign Up
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
