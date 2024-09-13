import { fetchTopAnimes } from "@/api/AnimeMainPage";
import { useQuery } from "@tanstack/react-query";

export const useTopAnimes = () => {
  const {
    data: topAnimes,
    error: topAnimesError,
    isLoading: topAnimesIsloading,
  } = useQuery({
    queryKey: ["topAnimes"],
    queryFn: fetchTopAnimes,
  });

  return {
    topAnimes,
    topAnimesError,
    topAnimesIsloading,
  };
};

export default useTopAnimes;
