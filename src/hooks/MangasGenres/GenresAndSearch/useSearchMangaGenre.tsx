import { fetchSearchMangasByGenre } from "@/api/MangaMainPage";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useSearchGenreManga = (search: string | null, genre: string | null) => {
  const {
    data: searchGenreManga,
    isError: seachGenreMangaIsError,
    isLoading: seachGenreMangaIsLoading,
  } = useQuery({
    queryKey: ["fetchSearchAnimeByGenre", search, genre],
    queryFn: () => fetchSearchMangasByGenre(search, genre),
  });
  return {
    searchGenreManga,
    seachGenreMangaIsError,
    seachGenreMangaIsLoading,
  };
};

export default useSearchGenreManga;
