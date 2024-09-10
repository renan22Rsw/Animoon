import { fetchPopularMangas } from "@/api/MangaMainPage";
import { useQuery } from "@tanstack/react-query";

const usePopularMangas = () => {
  const {
    data: popularMangas,
    error: popularMangasIsError,
    isLoading: popularMangasIsLoading,
  } = useQuery({
    queryKey: ["popularMangas"],
    queryFn: fetchPopularMangas,
  });

  return {
    popularMangas,
    popularMangasIsError,
    popularMangasIsLoading,
  };
};

export default usePopularMangas;
