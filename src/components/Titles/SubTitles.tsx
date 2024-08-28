import React, { ReactNode } from "react";

const SubTitles = ({ children }: { children: ReactNode }) => {
  return <div className="m-4 px-4 text-[#EDEDED]">{children}</div>;
};

export default SubTitles;
