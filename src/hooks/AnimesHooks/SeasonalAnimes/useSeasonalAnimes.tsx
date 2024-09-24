import { fetchSeasonsAnimes } from "@/api/AnimeMainPage";
import { useQuery } from "@tanstack/react-query";

export default function useSeasonalAnimes() {
  const {
    data: seasonalAnime,
    error: seasonalError,
    isLoading: seasonalIsloading,
  } = useQuery({
    queryKey: ["seasonAnimes"],
    queryFn: fetchSeasonsAnimes,
  });

  return {
    seasonalAnime,
    seasonalError,
    seasonalIsloading,
  };
}
