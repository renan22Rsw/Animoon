import { fetchSeasonsMangas } from "@/api/MangaMainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { mock } from "../mock";
import { renderHook, waitFor } from "@testing-library/react";
import useSeasonalMangas from "./useSeasonalMangas";

jest.mock("../../../api/MangaMainPage", () => ({
  fetchSeasonsMangas: jest.fn(),
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

describe("useSeasonalMangas hook", () => {
  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it("should return datas from api request", async () => {
    (fetchSeasonsMangas as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useSeasonalMangas(), { wrapper });

    expect(result.current.seasonalMangasIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.seasonalMangasIsLoading).toBe(false);
      expect(result.current.seasonalMangas).toEqual(mock);
      expect(result.current.seasonalMangasIsError).toBe(null);
    });
  });

  it("should load if api response is loading", async () => {
    (fetchSeasonsMangas as jest.Mock).mockResolvedValue(mock);
    const { result } = renderHook(() => useSeasonalMangas(), { wrapper });

    await waitFor(() =>
      expect(result.current.seasonalMangasIsLoading).toBe(true)
    );
  });

  it("should return an error message if api response is not working", async () => {
    (fetchSeasonsMangas as jest.Mock).mockRejectedValue(
      new Error("api is not working...")
    );

    const { result } = renderHook(() => useSeasonalMangas(), { wrapper });
    expect(result.current.seasonalMangasIsLoading).toBe(true);
    await waitFor(() => {
      expect(result.current.seasonalMangasIsLoading).toBe(false);
      expect(result.current.seasonalMangas).toBeUndefined();
      expect(result.current.seasonalMangasIsError).toEqual(
        new Error("api is not working...")
      );
    });
  });
});
