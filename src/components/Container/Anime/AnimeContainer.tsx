import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" grid justify-center md:pl-44 lg:pl-28 ">{children}</div>
  );
};

export default Container;
