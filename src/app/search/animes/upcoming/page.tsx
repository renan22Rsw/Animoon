"use client";

import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import useNextSeason from "@/hooks/AnimesHooks/useUpComingAnimes";
import React from "react";

const UpComingAnimes = () => {
  const { nextSeason, nextSeasonError, nextSeasonLoading } = useNextSeason();

  if (nextSeasonLoading) {
    return <Loading />;
  }

  if (nextSeasonError) {
    return <div>api is not working...</div>;
  }

  const upcoming = nextSeason || [];

  return (
    <>
      <PagesTitles>Up Coming Next Season</PagesTitles>
      <MainPagesGrid datas={upcoming} />
    </>
  );
};

export default UpComingAnimes;
