import { render, screen } from "@testing-library/react";
import Description from "./Description";

describe("Description component", () => {
  it("should render the description", () => {
    const descriptionText: string = "anime or manga description";

    render(<Description description={descriptionText} />);
    expect(screen.getByText(descriptionText)).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
  });
});
