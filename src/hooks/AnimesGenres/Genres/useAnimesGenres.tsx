import { fetchGenresAnimes } from "@/api/AnimeMainPage";
import { useQuery } from "@tanstack/react-query";

const useGenresAnimes = (parameter: string | null) => {
  const {
    data: genresAnimes,
    isError: genresAnimesIsError,
    isLoading: genresAnimesIsLoading,
  } = useQuery({
    queryKey: ["fetchGenresAnimes", parameter],
    queryFn: () => fetchGenresAnimes(parameter),
  });

  return {
    genresAnimes,
    genresAnimesIsError,
    genresAnimesIsLoading,
  };
};

export default useGenresAnimes;
