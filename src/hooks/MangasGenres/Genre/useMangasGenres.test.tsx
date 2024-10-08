import { fetchGenresMangas } from "@/api/MangaMainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { mock } from "../mock";
import { renderHook, waitFor } from "@testing-library/react";
import useGenresMangas from "./useMangasGenres";

jest.mock("../../../api/MangaMainPage", () => ({
  fetchGenresMangas: jest.fn(),
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("UseMangasGenres hook", () => {
  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it("should return api response datas", async () => {
    (fetchGenresMangas as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useGenresMangas("Romance"), {
      wrapper,
    });

    expect(result.current.genresMangasIsLoading).toBe(true);
    await waitFor(() => {
      expect(result.current.genresMangasIsLoading).toBe(false);
      expect(result.current.genresMangas).toEqual(mock);
      expect(result.current.genresMangasIsError).toBe(false);
    });
  });

  it("should load if api response is loading", async () => {
    (fetchGenresMangas as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useGenresMangas("Action"), {
      wrapper,
    });
    await waitFor(() => {
      expect(result.current.genresMangasIsLoading).toBe(true);
    });
  });

  it("should return an error message if api is not working", async () => {
    (fetchGenresMangas as jest.Mock).mockRejectedValue(
      new Error("api is not working...")
    );

    const { result } = renderHook(() => useGenresMangas("Error"), {
      wrapper,
    });
    expect(result.current.genresMangasIsLoading).toBe(true);
    await waitFor(() => {
      expect(result.current.genresMangasIsLoading).toBe(false);
      expect(result.current.genresMangas).toBeUndefined();
      expect(result.current.genresMangasIsError).toBe(true);
    });
  });
});
