import { fetchTrendingMangas, Mangas } from "@/api/MangaMainPage";
import { useQuery } from "@tanstack/react-query";

const useSeasonalMangas = () => {
  const {
    data: trendingMangas,
    error: trendingMangasError,
    isLoading: trendingMangasIsLoading,
  } = useQuery({
    queryKey: ["trendingMangas"],
    queryFn: fetchTrendingMangas,
  });

  return {
    trendingMangas,
    trendingMangasError,
    trendingMangasIsLoading,
  };
};

export default useSeasonalMangas;
