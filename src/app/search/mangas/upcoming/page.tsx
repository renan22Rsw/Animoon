"use client";

import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import React from "react";
import useNextSeasonMangas from "@/hooks/MangasHooks/NextSeason/useNextSeasonMangas";

const UpComingMangas = () => {
  const { nextSeasonManga, nextSeasonMangaIsError, nextSeasonMangaIsLoading } =
    useNextSeasonMangas();

  if (nextSeasonMangaIsLoading) {
    return <Loading />;
  }

  if (nextSeasonMangaIsError) {
    return <div>api is not working...</div>;
  }

  const nextSeason = nextSeasonManga || [];

  return (
    <>
      <PagesTitles>Up Coming Next Season</PagesTitles>
      <MainPagesGrid datas={nextSeason} />
    </>
  );
};

export default UpComingMangas;
