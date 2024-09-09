import { fetchTopMangas } from "@/api/MangaMainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { mock } from "./mock";
import { renderHook, waitFor } from "@testing-library/react";
import useTopMangas from "./useTopMangas";

jest.mock("../../../api/MangaMainPage", () => ({
  fetchTopMangas: jest.fn(),
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

describe("useTopMangas hook", () => {
  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it("should return datas from api response", async () => {
    (fetchTopMangas as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useTopMangas(), { wrapper });

    expect(result.current.topMangasIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.topMangasIsLoading).toBe(false);
      expect(result.current.topMangas).toEqual(mock);
      expect(result.current.topMangasIsError).toBe(null);
    });
  });

  it("should load if datas from api response is loading", async () => {
    (fetchTopMangas as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useTopMangas(), { wrapper });

    await waitFor(() => expect(result.current.topMangasIsLoading).toBe(true));
  });

  it("should return an error message if api response is not working", async () => {
    (fetchTopMangas as jest.Mock).mockRejectedValue(
      new Error("api is not working...")
    );
    const { result } = renderHook(() => useTopMangas(), { wrapper });

    expect(result.current.topMangasIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.topMangasIsLoading).toBe(false);
      expect(result.current.topMangas).toBeUndefined();
      expect(result.current.topMangasIsError).toEqual(
        new Error("api is not working...")
      );
    });
  });
});
