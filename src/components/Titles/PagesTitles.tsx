import React, { ReactNode } from "react";

interface PageTitleProp {
  children: ReactNode;
}

const PagesTitles = ({ children }: PageTitleProp) => {
  return (
    <span className="flex text-[#EDEDED] justify-between cursor-pointer">
      <h2 className="m-4 uppercase font-bold cursor-pointer">{children}</h2>
    </span>
  );
};

export default PagesTitles;
