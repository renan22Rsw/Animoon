import { fetchCharactersBirthdays } from "@/api/CharacterMainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { mock } from "../mock";
import { renderHook, waitFor } from "@testing-library/react";
import useCharactersBirthdays from "./useCharactersBirthdays";

jest.mock("../../../api/CharacterMainPage", () => ({
  fetchCharactersBirthdays: jest.fn(),
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

describe("useCharactersBirthdays hook", () => {
  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });
  it("should return datas from api response", async () => {
    (fetchCharactersBirthdays as jest.Mock).mockResolvedValue(mock);

    const { result } = renderHook(() => useCharactersBirthdays(), { wrapper });
    expect(result.current.characterBirthdayIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.characterBirthdayIsLoading).toBe(false);
      expect(result.current.characterBirthday).toEqual(mock);
      expect(result.current.characterBirthdayIsError).toBe(false);
    });
  });

  it("should load if datas from api response is loading", async () => {
    (fetchCharactersBirthdays as jest.Mock).mockResolvedValue(mock);
    const { result } = renderHook(() => useCharactersBirthdays(), { wrapper });

    await waitFor(() =>
      expect(result.current.characterBirthdayIsLoading).toBe(true)
    );
  });

  it("should return an error message if api response is not working", async () => {
    (fetchCharactersBirthdays as jest.Mock).mockRejectedValue(
      new Error("api is not working...")
    );
    const { result } = renderHook(() => useCharactersBirthdays(), { wrapper });

    expect(result.current.characterBirthdayIsLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.characterBirthdayIsLoading).toBe(false);
      expect(result.current.characterBirthday).toBeUndefined();
      expect(result.current.characterBirthdayIsError).toBe(true);
    });
  });
});
