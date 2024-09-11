"use client";
import { fetchResearchedCharacters } from "@/api/CharacterMainPage";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useResearchedCharacter = (parameter: string | null) => {
  const {
    data: researchedCharacter,
    isError: researchedCharacterIsError,
    isLoading: researchedCharacterIsLoading,
  } = useQuery({
    queryKey: ["researchedCharacters", parameter],
    queryFn: () => fetchResearchedCharacters(parameter),
  });
  return {
    researchedCharacter,
    researchedCharacterIsError,
    researchedCharacterIsLoading,
  };
};

export default useResearchedCharacter;
