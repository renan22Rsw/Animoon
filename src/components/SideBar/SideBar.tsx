import React from "react";
import { Side } from "./side";

const SideBar = () => {
  return (
    <div className="bg-black opacity-95 text-white w-3/5 h-screen absolute top-0.5 lg:hidden">
      <ul>
        {Side.map((sideBar) => (
          <li
            key={sideBar.id}
            className="py-4 px-2 border-b-gray-200 border-solid border-b-2 w-4/5"
          >
            <a href={sideBar.href}>{sideBar.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
