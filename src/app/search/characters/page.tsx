"use client";

import ApiNotWorking from "@/components/ApiNotWorking/ApiNotWorking";
import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import useCharactersBirthdays from "@/hooks/CharactersHooks/Birthdays/useCharactersBirthdays";
import useMostFavoritesCharacters from "@/hooks/CharactersHooks/MostFavorites/useMostFavoritesCharacters";
import useResearchedCharacter from "@/hooks/CharactersHooks/ResearchedCharacters/useResearchedCharacter";
import { useSearchParams } from "next/navigation";
import React from "react";

const CharactersPage = () => {
  const query = useSearchParams();
  const parameterValue = query.get("search");

  const {
    characterBirthday,
    characterBirthdayIsError,
    characterBirthdayIsLoading,
  } = useCharactersBirthdays();

  const {
    mostFavoritesCharacter,
    mostFavoritesCharacterIsError,
    mostFavoritesCharacterIsLoading,
  } = useMostFavoritesCharacters();

  const {
    researchedCharacter,
    researchedCharacterIsError,
    researchedCharacterIsLoading,
  } = useResearchedCharacter(parameterValue);

  if (
    characterBirthdayIsLoading ||
    mostFavoritesCharacterIsLoading ||
    researchedCharacterIsLoading
  ) {
    return <Loading />;
  }

  if (
    characterBirthdayIsError ||
    mostFavoritesCharacterIsError ||
    researchedCharacterIsError
  ) {
    return <ApiNotWorking />;
  }

  const birthday = characterBirthday?.slice(0, 30) || [];
  const mostFavorited = mostFavoritesCharacter?.slice(0, 30) || [];
  const researched = researchedCharacter || [];

  return (
    <>
      {!parameterValue ? (
        <>
          <PagesTitles>Birthdays</PagesTitles>
          <MainPagesGrid datas={birthday} />

          <PagesTitles>Most Favorited Characters</PagesTitles>
          <MainPagesGrid datas={mostFavorited} />
        </>
      ) : (
        <>
          <PagesTitles>Search: {parameterValue}</PagesTitles>
          <MainPagesGrid datas={researched} />
        </>
      )}
    </>
  );
};

export default CharactersPage;
