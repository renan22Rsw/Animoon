"use client";

import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import useSeasonalMangas from "@/hooks/MangasHooks/SeasonalMangas/useSeasonalMangas";
import React from "react";

const TrendingMangas = () => {
  const { seasonalMangas, seasonalMangasIsError, seasonalMangasIsLoading } =
    useSeasonalMangas();

  if (seasonalMangasIsLoading) {
    return <Loading />;
  }

  if (seasonalMangasIsError) {
    return <div>Api is not working...</div>;
  }

  const trending = seasonalMangas || [];

  return (
    <>
      <PagesTitles>Trending Now</PagesTitles>
      <MainPagesGrid datas={trending} />
    </>
  );
};

export default TrendingMangas;
