"use client";

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
    return <div>Api is not working...</div>;
  }

  const top = topMangas || [];

  return (
    <>
      <PagesTitles>Top 50 Anime</PagesTitles>
      <MainPagesGrid datas={top} />
    </>
  );
};

export default Top50Mangas;
