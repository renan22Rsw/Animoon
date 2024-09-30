"use client";

import ApiNotWorking from "@/components/ApiNotWorking/ApiNotWorking";
import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import useNextSeason from "@/hooks/AnimesHooks/NextSeasonAnimes/useNextSeasonAnimes";
import React from "react";

const NextSeasonAnimes = () => {
  const { nextSeason, nextSeasonError, nextSeasonLoading } = useNextSeason();

  if (nextSeasonLoading) {
    return <Loading />;
  }

  if (nextSeasonError) {
    return <ApiNotWorking />;
  }

  const upcoming = nextSeason || [];

  return (
    <>
      <PagesTitles>Up Coming Next Season</PagesTitles>
      <MainPagesGrid datas={upcoming} />
    </>
  );
};

export default NextSeasonAnimes;
