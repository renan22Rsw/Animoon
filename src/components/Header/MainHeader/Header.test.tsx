import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { mock } from "./mock";

describe("MainHeader component", () => {
  it("should render images", () => {
    render(<Header {...mock} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("width", "130");
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("height", "130");
    expect(image).toHaveAttribute("fetchpriority", "high");
    expect(image).toHaveStyle({
      width: "230px",
      height: "345px",
    });
  });

  it("should render titles", () => {
    render(<Header {...mock} />);
    const title = screen.getAllByText("Naruto");
    expect(title[0]).toBeInTheDocument();
    expect(title[1]).toBeInTheDocument();
  });

  it("should render description", () => {
    render(<Header {...mock} />);
    const description = screen.getByText(mock.description);
    expect(description).toBeInTheDocument();
  });

  it("should render TextArea component", () => {
    render(<Header {...mock} />);
    const textArea = screen.getByTestId("text-area");
    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveTextContent(mock.description);
  });

  it("should match a snapshot", () => {
    const { container } = render(<Header {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
