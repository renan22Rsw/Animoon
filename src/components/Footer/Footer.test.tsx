import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("should render Footer", () => {
    render(<Footer />);
    expect(screen.getByText("AniMoon")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();

    const links = screen.getAllByRole("link");
    expect(links[0]).toBeInTheDocument();
    expect(links[1]).toBeInTheDocument();
    expect(links[2]).toBeInTheDocument();
    expect(links[3]).toBeInTheDocument();

    expect(links[0]).toHaveAttribute(
      "href",
      "https://www.instagram.com/renan_rsw/"
    );

    expect(links[1]).toHaveAttribute("href", "https://github.com/renan22Rsw");

    expect(links[2]).toHaveAttribute(
      "href",
      "https://www.facebook.com/Renan12rsw"
    );

    expect(links[3]).toHaveAttribute(
      "href",
      "https://discord.com/channels/1292964547895885896/1292964547895885899"
    );
  });

  it("should match a snapshoot", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
