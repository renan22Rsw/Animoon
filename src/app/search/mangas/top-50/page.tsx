"use client";

import ApiNotWorking from "@/components/ApiNotWorking/ApiNotWorking";
import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import useTopMangas from "@/hooks/MangasHooks/TopMangas/useTopMangas";
import React from "react";

const Top50Mangas = () => {
  const { topMangas, topMangasIsError, topMangasIsLoading } = useTopMangas();

  if (topMangasIsLoading) {
    return <Loading />;
  }

  if (topMangasIsError) {
    return <ApiNotWorking />;
  }

  const top = topMangas || [];

  return (
    <>
      <PagesTitles>Top 50 Mangas</PagesTitles>
      <MainPagesGrid datas={top} />
    </>
  );
};

export default Top50Mangas;
