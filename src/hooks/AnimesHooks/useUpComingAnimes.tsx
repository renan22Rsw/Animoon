import { fetchNextSeason } from "@/api/AnimeMainPage";
import { useQuery } from "@tanstack/react-query";

const useNextSeason = () => {
  const {
    data: nextSeason,
    error: nextSeasonError,
    isLoading: nextSeasonLoading,
  } = useQuery({
    queryKey: ["seasonsUpComing"],
    queryFn: fetchNextSeason,
  });

  return {
    nextSeason,
    nextSeasonError,
    nextSeasonLoading,
  };
};

export default useNextSeason;
