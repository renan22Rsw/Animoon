"use client";

import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import React from "react";
import useAllTimePopular from "@/hooks/MangasHooks/PopularMangas/usePopularMangas";

const UpComingMangas = () => {
  const { popularMangas, popularMangasIsError, popularMangasIsLoading } =
    useAllTimePopular();

  if (popularMangasIsLoading) {
    return <Loading />;
  }

  if (popularMangasIsLoading) {
    return <div>api is not working...</div>;
  }

  const popular = popularMangas || [];

  return (
    <>
      <PagesTitles>All Time Popular</PagesTitles>
      <MainPagesGrid datas={popular} />
    </>
  );
};

export default UpComingMangas;
