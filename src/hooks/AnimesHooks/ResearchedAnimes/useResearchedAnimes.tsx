import { fetchResearchedAnimes } from "@/api/AnimeMainPage";
import { useQuery } from "@tanstack/react-query";

const useResearchedAnimes = (parameter: string | null) => {
  const {
    data: researchedAnimes,
    isError: researchedAnimesIsError,
    isLoading: researchedAnimeIsLoading,
  } = useQuery({
    queryKey: ["researchedAnimes", parameter],
    queryFn: () => fetchResearchedAnimes(parameter),
  });

  return {
    researchedAnimes,
    researchedAnimesIsError,
    researchedAnimeIsLoading,
  };
};

export default useResearchedAnimes;
