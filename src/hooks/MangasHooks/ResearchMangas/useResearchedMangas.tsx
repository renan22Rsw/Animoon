import { fetchResearchedMangas } from "@/api/MangaMainPage";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useResearchedMangas = (parameter: string | null) => {
  const {
    data: researchedMangas,
    isError: researchedMangasIsError,
    isLoading: researchedMangasIsLoading,
  } = useQuery({
    queryKey: ["researchedMangas", parameter],
    queryFn: () => fetchResearchedMangas(parameter),
  });
  return {
    researchedMangas,
    researchedMangasIsError,
    researchedMangasIsLoading,
  };
};

export default useResearchedMangas;
