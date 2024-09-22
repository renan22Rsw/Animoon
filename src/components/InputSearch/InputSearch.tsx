"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { Search } from "@mui/icons-material";
import { geners } from "./genres";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const InputSearch = () => {
  const router = useRouter();
  const pathName = usePathname();
  const params = useSearchParams();

  const search = params?.get("search") || "";
  const genres = params?.get("genres") || "";

  const [inputValue, setInputValue] = useState<string>(search);
  const [selectValues, setSelectValues] = useState<string>(genres);
  const [selectInput, setSelectInput] = useState<boolean>(false);

  const pageQuery = useMemo(() => {
    const query = pathName?.split("/") || [];
    return query[2] || "default value";
  }, [pathName]);

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
      <div className=" lg:w-[300px]  flex items-center text-white bg-[#161616] rounded-2xl outline-none border-none">
        <Search className="mx-4" />
        <input
          className="bg-transparent w-[190px]  lg:w-full p-2 outline-none border-none"
          type="search"
          value={inputValue}
          placeholder="Search"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      {pageQuery.length <= 6 && (
        <>
          <ArrowDownwardIcon
            data-testid="select-icon"
            className="mx-4 bg-[#161616] w-[50px] h-[30px] rounded-lg cursor-pointer"
            onClick={() => setSelectInput(true)}
          />
          {selectInput && (
            <div
              className={`w-[250px] h-[250px] absolute top-48 overflow-y-scroll bg-[#161616] rounded-lg md:h-[300px] `}
              data-testid="select-input"
              onMouseLeave={() => setSelectInput(false)}
              onClick={() => setSelectInput(false)}
            >
              <div className="mx-4 my-3 text-xl">Genres</div>

              {geners.map((genre) => (
                <div
                  className="font-bold py-1 px-4 cursor-pointer duration-300 ease-in-out lg:hover:bg-[#101010]"
                  key={genre.id}
                  onClick={() => setSelectValues(genre.genre)}
                  data-testid="options"
                >
                  {genre.genre}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default InputSearch;
