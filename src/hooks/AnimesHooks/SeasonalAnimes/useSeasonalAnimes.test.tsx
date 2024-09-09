import { renderHook, screen, waitFor } from "@testing-library/react";
import { fetchSeasonsAnimes } from "../../../api/AnimeMainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { mock } from "@/hooks/AnimesHooks/mock";
import useSeasonalAnimes from "./useSeasonalAnimes";

jest.mock("../../../api/AnimeMainPage", () => ({
  fetchSeasonsAnimes: jest.fn(),
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

describe("useSeasonalAnimes hook", () => {
  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it("should return datas from api request", async () => {
    (fetchSeasonsAnimes as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useSeasonalAnimes(), {
      wrapper,
    });
    expect(result.current.seasonalIsloading).toBe(true);

    await waitFor(() => {
      expect(result.current.seasonalIsloading).toBe(false);
      expect(result.current.seasonalAnime).toEqual(mock);
      expect(result.current.seasonalError).toBe(null);
    });
  });

  it("should load if api response is loading", async () => {
    (fetchSeasonsAnimes as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useSeasonalAnimes(), { wrapper });

    await waitFor(() => expect(result.current.seasonalIsloading).toBe(true));
  });

  it("should return an erro message if api response is not working", async () => {
    (fetchSeasonsAnimes as jest.Mock).mockRejectedValue(
      new Error("the api is not working...")
    );
    const { result } = renderHook(() => useSeasonalAnimes(), { wrapper });

    expect(result.current.seasonalIsloading).toBe(true);

    await waitFor(() => {
      expect(result.current.seasonalIsloading).toBe(false);
      expect(result.current.seasonalAnime).toBeUndefined();
      expect(result.current.seasonalError).toEqual(
        new Error("the api is not working...")
      );
    });
  });
});
