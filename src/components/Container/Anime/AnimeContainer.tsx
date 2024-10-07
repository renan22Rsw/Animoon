import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className=" grid justify-center lg:pl-20 ">{children}</div>;
};

export default Container;
