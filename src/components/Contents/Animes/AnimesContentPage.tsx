import React from "react";
import useSeasonalAnimes from "@/hooks/AnimesHooks/SeasonalAnimes/useSeasonalAnimes";
import useTopAnimes from "@/hooks/AnimesHooks/TopAnimes/useTopAnimes";
import useGenresAnimes from "@/hooks/AnimesGenres/Genres/useAnimesGenres";
import useSearchGenre from "@/hooks/AnimesGenres/GenresAndSearch/useSearchGenre";
import useResearchedAnimes from "@/hooks/AnimesHooks/ResearchedAnimes/useResearchedAnimes";
import useNextSeason from "@/hooks/AnimesHooks/NextSeasonAnimes/useNextSeasonAnimes";

import Loading from "@/components/Loading/Loading";
import PagesTitles from "@/components/Titles/PagesTitles";
import Column from "@/components/Columns/Column";
import TopColumns from "@/components/TopColumns/Anime/TopColumns";
import { useSearchParams } from "next/navigation";
import MainPagesGrid from "@/components/Grids/MainPagesGrid";
import Link from "next/link";
import ApiNotWorking from "@/components/ApiNotWorking/ApiNotWorking";

const AnimePageContent = () => {
  const query = useSearchParams();
  const parameterValue = query?.get("search");
  const genreParameter = query?.get("genres");

  const { seasonalAnime, seasonalIsloading, seasonalError } =
    useSeasonalAnimes();
  const { nextSeason, nextSeasonError, nextSeasonLoading } = useNextSeason();
  const { topAnimes, topAnimesError, topAnimesIsloading } = useTopAnimes();
  const {
    researchedAnimes,
    researchedAnimesIsError,
    researchedAnimeIsLoading,
  } = useResearchedAnimes(parameterValue);
  const { genresAnimes, genresAnimesIsError, genresAnimesIsLoading } =
    useGenresAnimes(genreParameter);
  const { searchGenreAnime, seachGenreAnimeIsError, seachGenreAnimeIsLoading } =
    useSearchGenre(parameterValue, genreParameter);

  if (
    seasonalIsloading ||
    nextSeasonLoading ||
    topAnimesIsloading ||
    researchedAnimeIsLoading ||
    genresAnimesIsLoading ||
    seachGenreAnimeIsLoading
  ) {
    return <Loading />;
  }

  if (
    seasonalError ||
    nextSeasonError ||
    topAnimesError ||
    researchedAnimesIsError ||
    genresAnimesIsError ||
    seachGenreAnimeIsError
  ) {
    return <ApiNotWorking />;
  }

  const seasonal = seasonalAnime?.slice(0, 6) || [];
  const nextSeasonal = nextSeason?.slice(0, 6) || [];
  const top = topAnimes?.slice(0, 10) || [];
  const researched = researchedAnimes || [];
  const genre = genresAnimes || [];
  const searchAnimeAndGenre = searchGenreAnime || [];

  return (
    <>
      {!parameterValue && !genreParameter ? (
        <>
          <Link href={"animes/trending"}>
            <PagesTitles>Trending Now</PagesTitles>
          </Link>
          <MainPagesGrid datas={seasonal} />

          <Link href={"animes/next_season"}>
            <PagesTitles>UpComing Next Season</PagesTitles>
          </Link>
          <MainPagesGrid datas={nextSeasonal} />

          <div className="lg:hidden">
            <Link href={"animes/top-50"}>
              <PagesTitles>Top 10 Animes</PagesTitles>
            </Link>
            <MainPagesGrid datas={top} />
          </div>

          <div className="hidden lg:block">
            <Link href={"animes/top-50"}>
              <PagesTitles>Top 10 Animes</PagesTitles>
            </Link>
          </div>

          <Column>
            {top.map((topAnimes, index) => (
              <TopColumns
                key={topAnimes.id}
                id={topAnimes.id}
                rank={index + 1}
                title={topAnimes.title.romaji}
                images={topAnimes.coverImage.large}
                episodes={topAnimes.episodes}
                season={topAnimes.season}
                type={topAnimes.type}
                status={topAnimes.status}
                year={topAnimes.seasonYear}
                favorites={topAnimes.favourites}
                format={topAnimes.format}
              />
            ))}
          </Column>
        </>
      ) : (
        <>
          {parameterValue && genreParameter ? (
            <MainPagesGrid datas={searchAnimeAndGenre} />
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

export default AnimePageContent;
