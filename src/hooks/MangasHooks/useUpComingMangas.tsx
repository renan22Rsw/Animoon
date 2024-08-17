import { fetchAllTimePopular } from "@/api/MangaMainPage";
import { useQuery } from "@tanstack/react-query";

const useUpComingMangas = () => {
  const {
    data: allTimePopular,
    error: allTimePopularError,
    isLoading: allTimePopularIsLoading,
  } = useQuery({
    queryKey: ["allTimePopular"],
    queryFn: fetchAllTimePopular,
  });

  return {
    allTimePopular,
    allTimePopularError,
    allTimePopularIsLoading,
  };
};

export default useUpComingMangas;
