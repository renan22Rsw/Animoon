import { render, screen } from "@testing-library/react";
import MangaRecomendations from "./MangaRecomendations";
import { mock } from "../mock";

describe("MangasRecomendations component", () => {
  it("should render MangasRecomendations correctly", () => {
    render(<MangaRecomendations {...mock} />);

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/mangas/${mock.id}`);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("width", "150");
    expect(image).toHaveAttribute("height", "150");

    const title = screen.getByText("Naruto");
    expect(title).toBeInTheDocument();
  });
});
