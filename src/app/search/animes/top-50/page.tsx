"use client";

import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import useTopAnimes from "@/hooks/AnimesHooks/useTopAnimes";
import React from "react";

const Top50Animes = () => {
  const { topAnimes, topAnimesError, topAnimesIsloading } = useTopAnimes();

  if (topAnimesIsloading) {
    return <Loading />;
  }

  if (topAnimesError) {
    return <div>Api is not working...</div>;
  }

  const top = topAnimes || [];

  return (
    <>
      <PagesTitles>Top 50 Anime</PagesTitles>
      <MainPagesGrid datas={top} />
    </>
  );
};

export default Top50Animes;
