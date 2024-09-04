import { render, screen } from "@testing-library/react";
import TopColumnsMangas from "./TopColumnsMangas";
import { mock } from "./mock";

describe("MangasTopColumns", () => {
  it("should render MangaTopColumns images", () => {
    render(<TopColumnsMangas {...mock} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("width", "35");
    expect(image).toHaveAttribute("height", "35");
  });

  it("should render MangaTopColumns links", () => {
    render(<TopColumnsMangas {...mock} />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/mangas/${mock.id}`);
  });

  it("should render MangaTopColumns infos", () => {
    render(<TopColumnsMangas {...mock} />);
    expect(screen.getByText(mock.title)).toBeInTheDocument();
    expect(screen.getByText(mock.rank + "°")).toBeInTheDocument();
    expect(screen.getByText(mock.source)).toBeInTheDocument();
    expect(screen.getByText(mock.meanScore + "%")).toBeInTheDocument();
    expect(screen.getByText(mock.favorites)).toBeInTheDocument();
    expect(screen.getByText(mock.type)).toBeInTheDocument();
    expect(screen.getByText(mock.status)).toBeInTheDocument();
  });

  it("should match a snapshot", () => {
    const { container } = render(<TopColumnsMangas {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
