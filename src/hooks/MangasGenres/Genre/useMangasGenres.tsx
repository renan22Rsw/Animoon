import { fetchGenresMangas } from "@/api/MangaMainPage";
import { useQuery } from "@tanstack/react-query";

const useGenresMangas = (parameter: string | null) => {
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

export default useGenresMangas;
