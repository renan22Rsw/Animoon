"use client";

import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { Search } from "@mui/icons-material";
import { geners } from "./genres";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const InputSearch = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectValues, setSelectValues] = useState<string>("");
  const [selectInput, setSelectInput] = useState<boolean>(false);

  const router = useRouter();
  const pathName = usePathname();

  const pageQuery = useMemo(() => {
    const query = pathName?.split("/") || [];
    return query[2] || "default value";
  }, [pathName]);

  const HandleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleGenres = () => {
    setSelectInput((e) => !e);
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

    handleGenres(); // close my selectInput

    return () => clearTimeout(searchAction);
  }, [router, inputValue, selectValues, pageQuery]);
  return (
    <>
      <div className=" md:w-[320px] flex items-center text-white bg-[#161616] rounded-2xl outline-none border-none">
        <Search className="mx-4" />
        <input
          className="bg-transparent w-[180px] p-2 outline-none border-none"
          type="search"
          value={inputValue}
          placeholder="Search"
          onChange={HandleSearchChange}
        />
      </div>

      <ArrowDownwardIcon
        data-testid="select-icon"
        className="mx-4 bg-[#161616] w-[50px] h-[30px] rounded-lg cursor-pointer"
        onClick={handleGenres}
      />
      {pageQuery.length <= 6 && (
        <>
          {selectInput && (
            <div
              className={`w-[250px] h-[250px] absolute top-48 overflow-y-scroll bg-[#161616] rounded-lg md:h-[300px] `}
              data-testid="select-input"
              onMouseLeave={(e) => setSelectInput(!e)}
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
