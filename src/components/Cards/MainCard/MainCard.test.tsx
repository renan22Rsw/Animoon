import { render, screen } from "@testing-library/react";
import MainCard from "./MainCard";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("MainCard component", () => {
  it("should render animes route", () => {
    (usePathname as jest.Mock).mockReturnValue(`/some-path/animes`);
    render(
      <MainCard
        id={1}
        title="Naruto"
        images="https://example.com/anime-image.jpg"
      />
    );

    const titleElement = screen.getByText("Naruto");
    expect(titleElement).toBeInTheDocument();

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/animes/1");

    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src");
    expect(imgElement).toHaveAttribute("width", "300");
    expect(imgElement).toHaveAttribute("height", "300");
  });

  it("should render mangas route", () => {
    (usePathname as jest.Mock).mockReturnValue(`/some-path/mangas`);
    render(
      <MainCard
        id={1}
        title="Naruto"
        images="https://example.com/manga-image.jpg"
      />
    );

    const titleElement = screen.getByText("Naruto");
    expect(titleElement).toBeInTheDocument();

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/mangas/1");

    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src");
    expect(imgElement).toHaveAttribute("width", "300");
    expect(imgElement).toHaveAttribute("height", "300");
  });

  it("should render characters route", () => {
    (usePathname as jest.Mock).mockReturnValue(`/some-path/characters`);
    render(
      <MainCard
        id={1}
        title="Naruto"
        images="https://example.com/characters-image.jpg"
      />
    );
    const titleElement = screen.getByText("Naruto");
    expect(titleElement).toBeInTheDocument();

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/characters/1");

    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src");
    expect(imgElement).toHaveAttribute("width", "300");
    expect(imgElement).toHaveAttribute("height", "300");
  });

  it("should match a snapshot", () => {
    const { container } = render(
      <MainCard id={1} title="Naruto" images="https://example.com/image.jpg" />
    );
    expect(container).toMatchSnapshot();
  });
});
