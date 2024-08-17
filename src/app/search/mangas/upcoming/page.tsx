"use client";

import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import useUpComingMangas from "@/hooks/MangasHooks/useUpComingMangas";
import React from "react";

const UpComingMangas = () => {
  const { allTimePopular, allTimePopularError, allTimePopularIsLoading } =
    useUpComingMangas();

  if (allTimePopularIsLoading) {
    return <Loading />;
  }

  if (allTimePopularError) {
    return <div>api is not working...</div>;
  }

  const upcoming = allTimePopular || [];

  return (
    <>
      <PagesTitles>Up Coming Next Season</PagesTitles>
      <MainPagesGrid datas={upcoming} />
    </>
  );
};

export default UpComingMangas;
