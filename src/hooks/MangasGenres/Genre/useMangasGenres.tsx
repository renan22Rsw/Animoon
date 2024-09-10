import { fetchGenresMangas } from "@/api/MangaMainPage";
import { useQuery } from "@tanstack/react-query";

export const useGenresMangas = (parameter: string | null) => {
  const {
    data: genresMangas,
    isError: genresMangasIsError,
    isLoading: genresMangasIsLoading,
  } = useQuery({
    queryKey: ["fetchGenresAnimes", parameter],
    queryFn: () => fetchGenresMangas(parameter),
  });

  return {
    genresMangas,
    genresMangasIsError,
    genresMangasIsLoading,
  };
};
