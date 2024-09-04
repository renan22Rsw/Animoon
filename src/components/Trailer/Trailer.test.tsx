import { render, screen } from "@testing-library/react";
import Trailer from "./Trailer";

const id = "abc";

describe("Trailer component", () => {
  it("should render SubTitles from Trailer", () => {
    render(<Trailer trailerId={id} />);
    expect(screen.getByText("Trailer")).toBeInTheDocument();
  });

  it("should render Iframe", () => {
    render(<Trailer trailerId={id} />);
    expect(screen.getByTestId("iframe")).toBeInTheDocument();
    expect(screen.getByTestId("iframe")).toHaveAttribute(
      "src",
      `https://www.youtube.com/embed/${id}?enablejsapi=1&wmode=opaque&autoplay=0`
    );
  });

  it("should match a snapshot", () => {
    const { container } = render(<Trailer trailerId={id} />);
    expect(container).toMatchSnapshot();
  });
});
