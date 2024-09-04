"use client";

import ApiNotWorking from "@/components/ApiNotWorking/ApiNotWorking";
import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import useBirthdayCharacter from "@/hooks/CharactersHooks/useBirthdayCharacter";
import useMostFavoritesCharacters from "@/hooks/CharactersHooks/useMostFavoritesCharacters";
import useResearchedCharacter from "@/hooks/CharactersHooks/useResearchedCharacter";
import { useSearchParams } from "next/navigation";
import React from "react";

const CharactersPage = () => {
  const query = useSearchParams();
  const parameterValue = query.get("search");

  const {
    bithdayCharacter,
    bithdayCharacterIsError,
    bithdayCharacterIsLoading,
  } = useBirthdayCharacter();

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
    bithdayCharacterIsLoading ||
    mostFavoritesCharacterIsLoading ||
    researchedCharacterIsLoading
  ) {
    return <Loading />;
  }

  if (
    bithdayCharacterIsError ||
    mostFavoritesCharacterIsError ||
    researchedCharacterIsError
  ) {
    return <ApiNotWorking />;
  }

  const birthday = bithdayCharacter?.slice(0, 30) || [];
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
