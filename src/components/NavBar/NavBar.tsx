"use client";
import Image from "next/image";

import { Menu } from "./nav";

import logo from "../../app/favicon.ico";

import Link from "next/link";
import MoblieNav from "../SpeedDial/SpeedDial";

const NavBar = () => {
  return (
    <>
      <nav className="bg-[#161616] text-white py-6 px-4 lg:px-32 flex items-center  justify-center rounded-sm">
        <Image src={logo} width={50} height={50} alt="logo" />
        <h1 className="text-white font-bold mx-2 text-xl">AniMoon</h1>

        <div className=" w-full hidden  justify-center lg:flex ">
          <ul className="flex">
            {Menu.map((links) => (
              <li
                className="px-4 text-lg cursor-pointer duration-300 hover:scale-110 ease-in-out"
                key={links.id}
              >
                <Link href={links.href}>{links.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <MoblieNav />
      </nav>
    </>
  );
};

export default NavBar;
