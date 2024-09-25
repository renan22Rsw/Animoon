"use client";

import ApiNotWorking from "@/components/ApiNotWorking/ApiNotWorking";
import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import useTopAnimes from "@/hooks/AnimesHooks/TopAnimes/useTopAnimes";
import React from "react";

const Top50Animes = () => {
  const { topAnimes, topAnimesError, topAnimesIsloading } = useTopAnimes();

  if (topAnimesIsloading) {
    return <Loading />;
  }

  if (topAnimesError) {
    return <ApiNotWorking />;
  }

  const top = topAnimes || [];

  return (
    <>
      <PagesTitles>Top 50 Animes</PagesTitles>
      <MainPagesGrid datas={top} />
    </>
  );
};

export default Top50Animes;
