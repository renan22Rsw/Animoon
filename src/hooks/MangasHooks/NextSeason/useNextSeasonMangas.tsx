import { fetchNextSeasonMangas } from "@/api/MangaMainPage";
import { useQuery } from "@tanstack/react-query";

const useNextSeasonMangas = () => {
  const {
    data: nextSeasonManga,
    error: nextSeasonMangaIsError,
    isLoading: nextSeasonMangaIsLoading,
  } = useQuery({
    queryKey: ["nextSeasonMangas"],
    queryFn: fetchNextSeasonMangas,
  });

  return {
    nextSeasonManga,
    nextSeasonMangaIsError,
    nextSeasonMangaIsLoading,
  };
};

export default useNextSeasonMangas;
