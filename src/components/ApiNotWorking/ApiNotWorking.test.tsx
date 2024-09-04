import { render, screen } from "@testing-library/react";
import ApiNotWorking from "./ApiNotWorking";

describe("ApiNotWorking component", () => {
  it("should render the image", () => {
    render(<ApiNotWorking />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      expect.stringMatching(/\/_next\/image\?url=%2Fimg.jpg&w=384&q=75/i)
    );
    expect(image).toHaveAttribute("width", "150");
    expect(image).toHaveAttribute("height", "150");
  });

  it("should render the title", () => {
    render(<ApiNotWorking />);
    const title = screen.getByText(
      "Apologies, but it seems the API is currently unavailable. Please try again later."
    );
    expect(title).toBeInTheDocument();
  });

  it("should match a snapshot", () => {
    const { container } = render(<ApiNotWorking />);
    expect(container).toMatchSnapshot();
  });
});
