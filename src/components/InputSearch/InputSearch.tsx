"use client";

import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { Search } from "@mui/icons-material";
import { geners } from "./genres";

const InputSearch = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectValues, setSelectValues] = useState<string>("");

  const router = useRouter();
  const pathName = usePathname();

  const pageQuery = useMemo(() => {
    const query = pathName?.split("/") || [];
    return query[2] || "default value";
  }, [pathName]);

  const HandleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSelectValues = (e: any) => {
    setSelectValues(e.target.value);
  };

  useEffect(() => {
    const searchAction = setTimeout(() => {
      if (inputValue && selectValues) {
        router.push(
          `${pageQuery}/?search=${inputValue}&genres=${selectValues}`
        );
      } else if (inputValue) {
        router.push(`?search=${inputValue}`);
      } else if (selectValues) {
        router.push(`?genres=${selectValues}`);
      } else {
        router.push(`/search/${pageQuery}`);
      }
    }, 1000);

    return () => clearTimeout(searchAction);
  }, [router, inputValue, selectValues, pageQuery]);
  return (
    <>
      <div className=" md:w-[320px] flex items-center text-white bg-[#161616] rounded-2xl outline-none border-none">
        <Search className="mx-4" />
        <input
          className="bg-transparent w-full p-2 outline-none border-none"
          type="search"
          value={inputValue}
          onChange={HandleSearchChange}
        />
      </div>
      {pageQuery.length <= 6 ? (
        <select
          onChange={handleSelectValues}
          className="mx-4 p-2 rounded-xl bg-[#161616] w-[20px] md:w-auto"
          data-testid="select-input"
        >
          {geners.map((genre) => (
            <option key={genre.id} value={genre.genre} className="bg-[#161616]">
              {genre.genre}
            </option>
          ))}
        </select>
      ) : (
        ""
      )}
    </>
  );
};

export default InputSearch;
