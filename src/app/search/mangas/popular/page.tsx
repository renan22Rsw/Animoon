"use client";

import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import React from "react";
import useAllTimePopular from "@/hooks/MangasHooks/PopularMangas/usePopularMangas";
import ApiNotWorking from "@/components/ApiNotWorking/ApiNotWorking";

const AllTimePopular = () => {
  const { popularMangas, popularMangasIsError, popularMangasIsLoading } =
    useAllTimePopular();

  if (popularMangasIsLoading) {
    return <Loading />;
  }

  if (popularMangasIsError) {
    return <ApiNotWorking />;
  }

  const popular = popularMangas || [];

  return (
    <>
      <PagesTitles>All Time Popular</PagesTitles>
      <MainPagesGrid datas={popular} />
    </>
  );
};

export default AllTimePopular;
