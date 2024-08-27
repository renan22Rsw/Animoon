import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("should render home titles", () => {
    render(<Home />);
    const mainTitle = screen.getByText(/Welcome to Ani/i);
    expect(mainTitle).toBeInTheDocument();
    expect(screen.getByText(/moon/i)).toBeInTheDocument();
    expect(screen.getByText(/here you can find/i)).toBeInTheDocument();
  });

  it("should render without crashing", () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });
});
