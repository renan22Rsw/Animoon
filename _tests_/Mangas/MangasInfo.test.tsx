import { getMangaById } from "@/api/MangaInfoPage";
import { mockMangaInfo } from "./mock";
import { render, screen, waitFor } from "@testing-library/react";
import MangaInfo from "@/app/mangas/[id]/page";

jest.mock("../../src/api/MangaInfoPage", () => ({
  getMangaById: jest.fn(),
}));

describe("Manga Info page", () => {
  beforeEach(() => {
    (getMangaById as jest.Mock).mockResolvedValue([mockMangaInfo]);
  });
  it("should render Manga Info datas", async () => {
    render(await MangaInfo({ params: { id: 20 } }));
    await waitFor(() => {
      const titles = screen.getAllByText("Test Manga");
      expect(titles[0]).toBeInTheDocument();
      expect(titles[1]).toBeInTheDocument();

      const descriptions = screen.getAllByText("Test description for manga");
      expect(descriptions[0]).toBeInTheDocument();
      expect(descriptions[1]).toBeInTheDocument();

      //sideBar infos
      expect(screen.getByText("Format")).toBeInTheDocument();
      expect(screen.getByText(mockMangaInfo.format)).toBeInTheDocument();
      expect(screen.getByText("Status")).toBeInTheDocument();
      expect(screen.getByText(mockMangaInfo.status)).toBeInTheDocument();
      expect(screen.getByText("Average Score")).toBeInTheDocument();
      expect(
        screen.getByText(mockMangaInfo.averageScore + "%")
      ).toBeInTheDocument();
      expect(screen.getByText("Mean Score")).toBeInTheDocument();
      expect(
        screen.getByText(mockMangaInfo.meanScore + "%")
      ).toBeInTheDocument();
      expect(screen.getByText("Popularity")).toBeInTheDocument();
      expect(screen.getByText(mockMangaInfo.popularity)).toBeInTheDocument();
      expect(screen.getByText("Favorites")).toBeInTheDocument();
      expect(screen.getByText(mockMangaInfo.favourites)).toBeInTheDocument();
      expect(screen.getByText("Genres")).toBeInTheDocument();
      expect(screen.getByText("Drama, Fantasy")).toBeInTheDocument();
      expect(screen.getByText("Source")).toBeInTheDocument();
      expect(screen.getByText(mockMangaInfo.source)).toBeInTheDocument();

      //images
      expect(screen.getByAltText("Header-Image")).toBeInTheDocument();
      expect(screen.getByAltText("Card-image-character")).toBeInTheDocument();
      expect(screen.getByAltText("Card-image-staffs")).toBeInTheDocument();
      expect(screen.getByAltText("recomendation-manga")).toBeInTheDocument();

      //links
      const links = screen.getAllByRole("link");
      expect(links[0]).toHaveAttribute("href", "/characters/1");
      expect(links[2]).toHaveAttribute("href", "/staffs/1");
      expect(links[3]).toHaveAttribute("href", "/mangas/1");

      //cards

      expect(screen.getByText("Manga Character 1")).toBeInTheDocument();
      expect(screen.getByText("Main")).toBeInTheDocument();

      expect(screen.getByText("Manga Author 1")).toBeInTheDocument();
      expect(screen.getByText("Author")).toBeInTheDocument();

      expect(screen.getByText("Trailer")).toBeInTheDocument();
      expect(screen.getByText("Recommendations")).toBeInTheDocument();
      expect(
        screen.getByText(
          mockMangaInfo.recommendations.nodes[0].mediaRecommendation.title
            .romaji
        )
      ).toBeInTheDocument();
    });
  });
});
