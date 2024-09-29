import { getAnimeById } from "@/api/AnimeInfoPage";
import AnimeInfo from "@/app/animes/[id]/page";
import { render, screen, waitFor } from "@testing-library/react";
import { mockAnimeInfo } from "./mock";

jest.mock("../../src/api/AnimeInfoPage", () => ({
  getAnimeById: jest.fn(),
}));

describe("Anime Info page", () => {
  beforeEach(() => {
    (getAnimeById as jest.Mock).mockResolvedValue([mockAnimeInfo]);
  });
  it("should render Anime Info page datas", async () => {
    render(await AnimeInfo({ params: { id: 20 } }));
    await waitFor(() => {
      const titles = screen.getAllByText("Test Anime");
      expect(titles[0]).toBeInTheDocument();
      expect(titles[1]).toBeInTheDocument();

      const descriptions = screen.getAllByText("Test description");
      expect(descriptions[0]).toBeInTheDocument();
      expect(descriptions[1]).toBeInTheDocument();

      //sideBar infos

      expect(screen.getByText("Format")).toBeInTheDocument();
      expect(screen.getByText(mockAnimeInfo.format)).toBeInTheDocument();
      expect(screen.getByText("Episode Duration")).toBeInTheDocument();
      expect(
        screen.getByText(mockAnimeInfo.duration + "min")
      ).toBeInTheDocument();
      expect(screen.getByText("Status")).toBeInTheDocument();
      expect(screen.getByText(mockAnimeInfo.status)).toBeInTheDocument();
      expect(screen.getByText("Season")).toBeInTheDocument();
      expect(screen.getByText(mockAnimeInfo.season)).toBeInTheDocument();
      expect(screen.getByText("Season Year")).toBeInTheDocument();
      expect(screen.getByText(mockAnimeInfo.seasonYear)).toBeInTheDocument();
      expect(screen.getByText("Average Score")).toBeInTheDocument();
      expect(
        screen.getByText(mockAnimeInfo.averageScore + "%")
      ).toBeInTheDocument();
      expect(screen.getByText("Mean Score")).toBeInTheDocument();
      expect(
        screen.getByText(mockAnimeInfo.meanScore + "%")
      ).toBeInTheDocument();
      expect(screen.getByText("Popularity")).toBeInTheDocument();
      expect(screen.getByText(mockAnimeInfo.popularity)).toBeInTheDocument();
      expect(screen.getByText("Favorites")).toBeInTheDocument();
      expect(screen.getByText(mockAnimeInfo.favourites)).toBeInTheDocument();
      expect(screen.getByText("Genres")).toBeInTheDocument();
      expect(screen.getByText("Action, Adventure")).toBeInTheDocument();
      expect(screen.getByText("Source")).toBeInTheDocument();
      expect(screen.getByText(mockAnimeInfo.source)).toBeInTheDocument();

      //images
      expect(screen.getByAltText("Header-Image")).toBeInTheDocument();
      expect(screen.getByAltText("Card-image-character")).toBeInTheDocument();
      expect(screen.getByAltText("Card-image-voices")).toBeInTheDocument();
      expect(screen.getByAltText("Card-image-staffs")).toBeInTheDocument();
      expect(screen.getByAltText("recomendation-anime")).toBeInTheDocument();

      //links

      const links = screen.getAllByRole("link");
      expect(links[0]).toHaveAttribute("href", "/characters/1");
      expect(links[2]).toHaveAttribute("href", "/staffs/1");
      expect(links[3]).toHaveAttribute("href", "/animes/1");

      //cards
      expect(screen.getByText("Character 1")).toBeInTheDocument();
      expect(screen.getByText("Main")).toBeInTheDocument();

      expect(screen.getByText("Voice Actor 1")).toBeInTheDocument();
      expect(screen.getByText("Japanese")).toBeInTheDocument();

      expect(screen.getByText("Staff 1")).toBeInTheDocument();
      expect(screen.getByText("Director")).toBeInTheDocument();

      expect(screen.getByText("Trailer")).toBeInTheDocument();
      expect(screen.getByText("Recommendations")).toBeInTheDocument();
      expect(
        screen.getByText(
          mockAnimeInfo.recommendations.nodes[0].mediaRecommendation.title
            .romaji
        )
      ).toBeInTheDocument();
    });
  });
});
