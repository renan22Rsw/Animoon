import React, { ReactNode } from "react";

const AnimeContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" md:absolute lg:left-[20%] md:left-[30%] ">{children}</div>
  );
};

export default AnimeContainer;
