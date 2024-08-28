import { render, screen } from "@testing-library/react";
import AnimeRecomendations from "./AnimeRecomendations";
import { mock } from "../mock";

describe("AnimesRecomendations component", () => {
  it("should render AnimesRecomendations correctly", () => {
    render(<AnimeRecomendations {...mock} />);

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/animes/${mock.id}`);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("width", "100");
    expect(image).toHaveAttribute("height", "100");

    const title = screen.getByText("Naruto");
    expect(title).toBeInTheDocument();
  });
});
