"use client";

import React, { ReactNode } from "react";
import SubTitles from "../Titles/SubTitles";
import { usePathname } from "next/navigation";
import Link from "next/link";

const StaffContainer = ({
  children,
  id,
}: {
  children: ReactNode;
  id: number;
}) => {
  const urlName = usePathname();
  const queries = urlName.split("/");
  const myPath = queries[1];

  return (
    <>
      <SubTitles>
        {urlName === `/${myPath}/${id}` ? (
          <Link href={`${id}/staffs`}>Staff</Link>
        ) : (
          ""
        )}
      </SubTitles>
      <div className="grid justify-center lg:grid-cols-2 m-4 2xl:grid-cols-3  text-white">
        {children}
      </div>
    </>
  );
};

export default StaffContainer;
