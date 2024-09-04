import { render, screen } from "@testing-library/react";
import AnimeRecomendations from "./AnimeRecomendations";
import { mock } from "../mock";

describe("AnimesRecomendations component", () => {
  it("should render AnimesRecomendations links", () => {
    render(<AnimeRecomendations {...mock} />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/animes/${mock.id}`);
  });

  it("should render AnimesRecomendations images", () => {
    render(<AnimeRecomendations {...mock} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("width", "100");
    expect(image).toHaveAttribute("height", "100");
  });

  it("should render AnimesRecomendations titles", () => {
    render(<AnimeRecomendations {...mock} />);
    const title = screen.getByText("Naruto");
    expect(title).toBeInTheDocument();
  });
});
