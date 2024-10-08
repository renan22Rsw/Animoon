import ApiNotWorking from "@/components/ApiNotWorking/ApiNotWorking";
import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import useSeasonalAnimes from "@/hooks/AnimesHooks/SeasonalAnimes/useSeasonalAnimes";
import React from "react";

const TrendingAnimesContent = () => {
  const { seasonalAnime, seasonalError, seasonalIsloading } =
    useSeasonalAnimes();

  if (seasonalIsloading) {
    return <Loading />;
  }

  if (seasonalError) {
    return <ApiNotWorking />;
  }

  const trending = seasonalAnime || [];

  return (
    <>
      <PagesTitles>Trending Animes</PagesTitles>
      <MainPagesGrid datas={trending} />
    </>
  );
};

export default TrendingAnimesContent;
