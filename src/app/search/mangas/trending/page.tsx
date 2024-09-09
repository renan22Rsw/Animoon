"use client";

import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import useSeasonalMangas from "@/hooks/MangasHooks/SeasonalMangas/useSeasonalMangas";
import React from "react";

const TrendingMangas = () => {
  const { trendingMangas, trendingMangasError, trendingMangasIsLoading } =
    useSeasonalMangas();

  if (trendingMangasIsLoading) {
    return <Loading />;
  }

  if (trendingMangasError) {
    return <div>Api is not working...</div>;
  }

  const trending = trendingMangas || [];

  return (
    <>
      <PagesTitles>Trending Now</PagesTitles>
      <MainPagesGrid datas={trending} />
    </>
  );
};

export default TrendingMangas;
