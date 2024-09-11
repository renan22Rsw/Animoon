"use client";
import { fetchMostFavoritedCharacters } from "@/api/CharacterMainPage";
import { useQuery } from "@tanstack/react-query";

const useMostFavoritesCharacters = () => {
  const {
    data: mostFavoritesCharacter,
    isError: mostFavoritesCharacterIsError,
    isLoading: mostFavoritesCharacterIsLoading,
  } = useQuery({
    queryKey: ["mostFavoritesCharacter"],
    queryFn: fetchMostFavoritedCharacters,
  });

  return {
    mostFavoritesCharacter,
    mostFavoritesCharacterIsError,
    mostFavoritesCharacterIsLoading,
  };
};

export default useMostFavoritesCharacters;
