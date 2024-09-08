import { fetchSearchAnimeByGenre } from "@/api/AnimeMainPage";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useSearchAnimeGenre = (search: string | null, genre: string | null) => {
  const {
    data: searchGenreAnime,
    isError: seachGenreAnimeIsError,
    isLoading: seachGenreAnimeIsLoading,
  } = useQuery({
    queryKey: ["fetchSearchAnimeByGenre", search, genre],
    queryFn: () => fetchSearchAnimeByGenre(search, genre),
  });
  return {
    searchGenreAnime,
    seachGenreAnimeIsError,
    seachGenreAnimeIsLoading,
  };
};

export default useSearchAnimeGenre;
