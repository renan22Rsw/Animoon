import { fetchResearchedMangas } from "@/api/MangaMainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { mock } from "../mock";
import { renderHook, waitFor } from "@testing-library/react";
import useResearchedMangas from "./useResearchedMangas";

jest.mock("../../../api/MangaMainPage", () => ({
  fetchResearchedMangas: jest.fn(),
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

describe("useResearchedMangas hook", () => {
  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it("should return datas from api request", async () => {
    (fetchResearchedMangas as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useResearchedMangas("Omori"), {
      wrapper,
    });
    expect(result.current.researchedMangasIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.researchedMangasIsLoading).toBe(false);
      expect(result.current.researchedMangas).toEqual(mock);
      expect(result.current.researchedMangasIsError).toBe(false);
    });
  });

  it("should load if data from api is loading", async () => {
    (fetchResearchedMangas as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useResearchedMangas("Mirai Nikki"), {
      wrapper,
    });
    await waitFor(() =>
      expect(result.current.researchedMangasIsLoading).toBe(true)
    );
  });

  it("should return an error message if api is not working", async () => {
    (fetchResearchedMangas as jest.Mock).mockRejectedValue(
      new Error("api is not working...")
    );

    const { result } = renderHook(() => useResearchedMangas("error"), {
      wrapper,
    });

    expect(result.current.researchedMangasIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.researchedMangasIsLoading).toBe(false);
      expect(result.current.researchedMangas).toBeUndefined();
      expect(result.current.researchedMangasIsError).toBe(true);
    });
  });
});
