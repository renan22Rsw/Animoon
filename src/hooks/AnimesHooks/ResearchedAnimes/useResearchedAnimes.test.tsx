import { screen, renderHook, waitFor, render } from "@testing-library/react";
import { fetchResearchedAnimes } from "../../../api/AnimeMainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mock } from "@/hooks/AnimesHooks/mock";
import { ReactNode } from "react";
import useResearchedAnimes from "./useResearchedAnimes";

jest.mock("../../../api/AnimeMainPage", () => ({
  fetchResearchedAnimes: jest.fn(),
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

describe("useResearchedAnimes hook", () => {
  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it("should return datas from api request", async () => {
    (fetchResearchedAnimes as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useResearchedAnimes("Naruto"), {
      wrapper,
    });

    expect(result.current.researchedAnimeIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.researchedAnimeIsLoading).toBe(false);
      expect(result.current.researchedAnimes).toEqual(mock);
      expect(result.current.researchedAnimesIsError).toBe(false);
    });
  });

  it("should load if datas from api response is loading", async () => {
    (fetchResearchedAnimes as jest.Mock).mockResolvedValue(mock);
    const { result } = renderHook(() => useResearchedAnimes("One piece"), {
      wrapper,
    });
    await waitFor(() =>
      expect(result.current.researchedAnimeIsLoading).toBe(true)
    );
  });

  it("should return an error message if api is error", async () => {
    (fetchResearchedAnimes as jest.Mock).mockRejectedValue(
      new Error("the api is not working")
    );

    const { result } = renderHook(() => useResearchedAnimes("error"), {
      wrapper,
    });

    expect(result.current.researchedAnimeIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.researchedAnimeIsLoading).toBe(false);
      expect(result.current.researchedAnimesIsError).toBe(true);
      expect(result.current.researchedAnimes).toBeUndefined();
    });
  });
});
