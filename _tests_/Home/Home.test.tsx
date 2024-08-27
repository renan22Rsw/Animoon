import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("should render home page correctly", () => {
    render(<Home />);
    const mainTitle = screen.getByText(/Welcome to Ani/i);
    expect(mainTitle).toBeDefined();
    expect(screen.getByText(/moon/i)).toBeDefined();
    expect(screen.getByText(/here you can find/i)).toBeDefined();
  });
});
