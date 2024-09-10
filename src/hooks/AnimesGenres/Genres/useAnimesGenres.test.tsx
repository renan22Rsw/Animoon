import { fetchGenresAnimes } from "@/api/AnimeMainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { mock } from "../mock";
import { renderHook, waitFor } from "@testing-library/react";
import { useGenresAnimes } from "./useAnimesGenres";
jest.mock("../../../api/AnimeMainPage", () => ({
  fetchGenresAnimes: jest.fn(),
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

describe("useAnimesGenres hook", () => {
  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it("should return datas from api response", async () => {
    (fetchGenresAnimes as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useGenresAnimes("Horror"), { wrapper });

    expect(result.current.genresAnimesIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.genresAnimesIsLoading).toBe(false);
      expect(result.current.genresAnimes).toEqual(mock);
      expect(result.current.genresAnimesIsError).toBe(false);
    });
  });

  it("should load if datas from api response is loading", async () => {
    (fetchGenresAnimes as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useGenresAnimes("Action"), { wrapper });

    await waitFor(() => {
      expect(result.current.genresAnimesIsLoading).toBe(true);
    });
  });

  it("should return an erro message if api response is not working", async () => {
    (fetchGenresAnimes as jest.Mock).mockRejectedValue(
      new Error("the api is not working")
    );

    const { result } = renderHook(() => useGenresAnimes("Romance"), {
      wrapper,
    });

    expect(result.current.genresAnimesIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.genresAnimesIsLoading).toBe(false);
      expect(result.current.genresAnimes).toBeUndefined();
      expect(result.current.genresAnimesIsError).toBe(true);
    });
  });
});
