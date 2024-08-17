"use client";

import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import useSeasonalAnimes from "@/hooks/AnimesHooks/useSeasonalAnimes";
import React from "react";

const TrendingAnimes = () => {
  const { seasonalAnime, seasonalError, seasonalIsloading } =
    useSeasonalAnimes();

  if (seasonalIsloading) {
    return <Loading />;
  }

  if (seasonalError) {
    return <div>api is not working...</div>;
  }

  const trending = seasonalAnime || [];

  return (
    <>
      <PagesTitles>Trending Animes</PagesTitles>
      <MainPagesGrid datas={trending} />
    </>
  );
};

export default TrendingAnimes;
