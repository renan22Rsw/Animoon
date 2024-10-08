import ApiNotWorking from "@/components/ApiNotWorking/ApiNotWorking";
import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import useSeasonalMangas from "@/hooks/MangasHooks/SeasonalMangas/useSeasonalMangas";
import React from "react";

const TrendingMangasContent = () => {
  const { seasonalMangas, seasonalMangasIsError, seasonalMangasIsLoading } =
    useSeasonalMangas();

  if (seasonalMangasIsLoading) {
    return <Loading />;
  }

  if (seasonalMangasIsError) {
    return <ApiNotWorking />;
  }

  const trending = seasonalMangas || [];

  return (
    <>
      <PagesTitles>Trending Mangas</PagesTitles>
      <MainPagesGrid datas={trending} />
    </>
  );
};

export default TrendingMangasContent;
