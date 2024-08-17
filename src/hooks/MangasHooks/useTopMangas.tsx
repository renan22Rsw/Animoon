import { fetchTopMangas } from "@/api/MangaMainPage";
import { useQuery } from "@tanstack/react-query";

const useTopMangas = () => {
  const {
    data: topMangas,
    error: topMangasError,
    isLoading: topMangasIsLoading,
  } = useQuery({
    queryKey: ["topMangas"],
    queryFn: fetchTopMangas,
  });

  return {
    topMangas,
    topMangasError,
    topMangasIsLoading,
  };
};

export default useTopMangas;
