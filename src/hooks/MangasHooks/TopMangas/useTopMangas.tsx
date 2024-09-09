import { fetchTopMangas } from "@/api/MangaMainPage";
import { useQuery } from "@tanstack/react-query";

const useTopMangas = () => {
  const {
    data: topMangas,
    error: topMangasIsError,
    isLoading: topMangasIsLoading,
  } = useQuery({
    queryKey: ["topMangas"],
    queryFn: fetchTopMangas,
  });

  return {
    topMangas,
    topMangasIsError,
    topMangasIsLoading,
  };
};

export default useTopMangas;
