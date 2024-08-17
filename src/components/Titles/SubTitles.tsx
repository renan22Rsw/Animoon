import React, { ReactNode } from "react";

const SubTitles = ({ children }: { children: ReactNode }) => {
  return <h3 className="m-4 px-4 text-[#EDEDED]">{children}</h3>;
};

export default SubTitles;
