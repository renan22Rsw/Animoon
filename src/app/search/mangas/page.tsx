"use client";

import React from "react";

import useSeasonalMangas from "@/hooks/MangasHooks/SeasonalMangas/useSeasonalMangas";
import useTopMangas from "@/hooks/MangasHooks/TopMangas/useTopMangas";
import useResearchedMangas from "@/hooks/MangasHooks/ResearchMangas/useResearchedMangas";
import useGenresMangas from "@/hooks/MangasGenres/Genre/useMangasGenres";
import usePopularMangas from "@/hooks/MangasHooks/PopularMangas/usePopularMangas";
import useSearchGenreManga from "@/hooks/MangasGenres/GenresAndSearch/useSearchMangaGenre";

import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import Column from "@/components/Columns/Column";
import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import ApiNotWorking from "@/components/ApiNotWorking/ApiNotWorking";
import TopColumnsMangas from "@/components/TopColumns/Manga/TopColumnsMangas";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

const MangaPage = () => {
  const query = useSearchParams();
  const parameterValue = query?.get("search");
  const genreParameter = query?.get("genres");

  const { seasonalMangas, seasonalMangasIsError, seasonalMangasIsLoading } =
    useSeasonalMangas();
  const { popularMangas, popularMangasIsError, popularMangasIsLoading } =
    usePopularMangas();

  const { topMangas, topMangasIsError, topMangasIsLoading } = useTopMangas();

  const {
    researchedMangas,
    researchedMangasIsError,
    researchedMangasIsLoading,
  } = useResearchedMangas(parameterValue);

  const { genresMangas, genresMangasIsError, genresMangasIsLoading } =
    useGenresMangas(genreParameter);

  const { searchGenreManga, seachGenreMangaIsError, seachGenreMangaIsLoading } =
    useSearchGenreManga(parameterValue, genreParameter);

  if (
    seasonalMangasIsLoading ||
    seachGenreMangaIsLoading ||
    popularMangasIsLoading ||
    topMangasIsLoading ||
    researchedMangasIsLoading ||
    genresMangasIsLoading ||
    seachGenreMangaIsLoading
  ) {
    return <Loading />;
  }

  if (
    seasonalMangasIsError ||
    seachGenreMangaIsError ||
    popularMangasIsError ||
    topMangasIsError ||
    researchedMangasIsError ||
    genresMangasIsError ||
    seachGenreMangaIsError
  ) {
    return <ApiNotWorking />;
  }

  const seassonal = seasonalMangas?.slice(0, 6) || [];
  const popular = popularMangas?.slice(0, 6) || [];
  const top10Mangas = topMangas?.slice(0, 10) || [];
  const researched = researchedMangas || [];
  const genre = genresMangas || [];
  const searchMangaAndGenre = searchGenreManga || [];
  return (
    <>
      {!parameterValue && !genreParameter ? (
        <>
          <Link href={"mangas/trending"}>
            <PagesTitles>Trending Now</PagesTitles>
          </Link>
          <MainPagesGrid datas={seassonal} />

          <Link href={"mangas/popular"}>
            <PagesTitles>All Time Popular</PagesTitles>
          </Link>
          <MainPagesGrid datas={popular} />

          <div className="lg:hidden">
            <Link href={"mangas/top-50"}>
              <PagesTitles>Top 10 Mangas</PagesTitles>
            </Link>
            <MainPagesGrid datas={top10Mangas} />
          </div>

          <div className="hidden lg:block">
            <Link href={"mangas/top-50"}>
              <PagesTitles>Top 10 Mangas</PagesTitles>
            </Link>
          </div>

          <Column>
            {top10Mangas.map((topMangas, index) => (
              <TopColumnsMangas
                key={topMangas.id}
                id={topMangas.id}
                rank={index + 1}
                title={topMangas.title.romaji}
                images={topMangas.coverImage.large}
                meanScore={topMangas.meanScore}
                chapters={topMangas.chapters}
                source={topMangas.type}
                type={topMangas.type}
                status={topMangas.status}
                volumes={topMangas.volumes}
                favorites={topMangas.favourites}
              />
            ))}
          </Column>
        </>
      ) : (
        <>
          {parameterValue && genreParameter ? (
            <MainPagesGrid datas={searchMangaAndGenre} />
          ) : parameterValue ? (
            <>
              <PagesTitles>Search: {parameterValue}</PagesTitles>
              <MainPagesGrid datas={researched} />
            </>
          ) : genreParameter ? (
            <>
              <PagesTitles>Genre: {genreParameter}</PagesTitles>
              <MainPagesGrid datas={genre} />
            </>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default MangaPage;
