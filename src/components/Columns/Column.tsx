import React, { ReactNode } from "react";

interface ColumnProps {
  children: ReactNode;
}

const Column = ({ children }: ColumnProps) => {
  return (
    <div className="hidden lg:block">
      <h2 className="m-4 uppercase text-[#EDEDED] font-bold cursor-pointer"></h2>
      <div className="flex-col justify-center">{children}</div>
    </div>
  );
};

export default Column;
