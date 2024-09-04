"use client";
import React, { ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SubTitles from "@/components/Titles/SubTitles";

interface CharactersContainerProps {
  children: ReactNode;
  id: number;
}

const CharactersContainer = ({ children, id }: CharactersContainerProps) => {
  const urlName = usePathname();
  const queries = urlName?.split("/") || [];
  const myPath = queries[1] || "default value";

  return (
    <>
      <SubTitles>
        {urlName === `/${myPath}/${id}` ? (
          <Link href={`${id}/characters`}>Characters</Link>
        ) : (
          ""
        )}
      </SubTitles>
      <div className="grid  lg:grid-cols-2  2xl:grid-cols-3 justify-center gap-x-4  text-white  m-4 rounded-md">
        {children}
      </div>
    </>
  );
};

export default CharactersContainer;
