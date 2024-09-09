import { fetchSeasonsMangas, Mangas } from "@/api/MangaMainPage";
import { useQuery } from "@tanstack/react-query";

const useSeasonalMangas = () => {
  const {
    data: seasonalMangas,
    error: seasonalMangasIsError,
    isLoading: seasonalMangasIsLoading,
  } = useQuery({
    queryKey: ["trendingMangas"],
    queryFn: fetchSeasonsMangas,
  });

  return {
    seasonalMangas,
    seasonalMangasIsError,
    seasonalMangasIsLoading,
  };
};

export default useSeasonalMangas;
