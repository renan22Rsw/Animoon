import { render, screen } from "@testing-library/react";
import MangaRecomendations from "./MangaRecomendations";
import { mock } from "../mock";

describe("MangasRecomendations component", () => {
  it("should render MangasRecomendations links", () => {
    render(<MangaRecomendations {...mock} />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/mangas/${mock.id}`);
  });

  it("should render MangasRecomendations images", () => {
    render(<MangaRecomendations {...mock} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("width", "150");
    expect(image).toHaveAttribute("height", "150");
  });

  it("should render MangasRecomendations titles", () => {
    render(<MangaRecomendations {...mock} />);
    const title = screen.getByText("Naruto");
    expect(title).toBeInTheDocument();
  });
});
