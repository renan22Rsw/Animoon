import { render, screen } from "@testing-library/react";
import TopColumns from "./TopColumns";
import { mock } from "./mock";

describe("AnimeTopColumns", () => {
  it("should render AnimeTopColumns images", () => {
    render(<TopColumns {...mock} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("width", "35");
    expect(image).toHaveAttribute("height", "35");
  });

  it("should render AnimeTopColumns links", () => {
    render(<TopColumns {...mock} />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/animes/${mock.id}`);
  });

  it("should render AnimeTopColumns infos", () => {
    render(<TopColumns {...mock} />);
    expect(screen.getByText(mock.title)).toBeInTheDocument();
    expect(screen.getByText(mock.rank + "°")).toBeInTheDocument();
    expect(screen.getByText(mock.favorites)).toBeInTheDocument();
    expect(screen.getByText(mock.type)).toBeInTheDocument();
    expect(screen.getByText(mock.episodes + " ep")).toBeInTheDocument();
    expect(screen.getByText(mock.status)).toBeInTheDocument();
    expect(screen.getByText(mock.season + ` ${mock.year}`)).toBeInTheDocument();
    expect(screen.getByText(mock.format)).toBeInTheDocument();
  });

  it("should match a snapshot", () => {
    const { container } = render(<TopColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
