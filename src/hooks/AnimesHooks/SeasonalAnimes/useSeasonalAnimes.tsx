import { fetchSeasonsAnimes } from "@/api/AnimeMainPage";
import { useQuery } from "@tanstack/react-query";

const useSeasonalAnimes = () => {
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
};

export default useSeasonalAnimes;
