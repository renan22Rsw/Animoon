import { render, screen } from "@testing-library/react";
import CardCharacters from "./CardCharacters";
import { mock } from "./mock";

describe("CardCharacters component", () => {
  it("should render CardCharacters Images", () => {
    render(<CardCharacters {...mock} />);

    const characterImage = screen.getByAltText("Card-image-character");
    expect(characterImage).toBeInTheDocument();
    expect(characterImage).toHaveAttribute("width", "60");
    expect(characterImage).toHaveAttribute("height", "60");
    expect(characterImage).toHaveAttribute("fetchpriority", "high");

    const voiceImage = screen.getByAltText("Card-image-voices");
    expect(voiceImage).toBeInTheDocument();
    expect(voiceImage).toHaveAttribute("width", "60");
    expect(voiceImage).toHaveAttribute("height", "60");
    expect(voiceImage).toHaveAttribute("fetchpriority", "high");
  });

  it("should render CardCharacters Links", () => {
    render(<CardCharacters {...mock} />);

    const characterLink = screen.getByTestId("character-link");
    expect(characterLink).toBeInTheDocument();
    expect(characterLink).toHaveAttribute("href", `/characters/${mock.id}`);

    const voiceLink = screen.getByTestId("voice-link");
    expect(voiceLink).toBeInTheDocument();
    expect(voiceLink).toHaveAttribute("href", `/staffs/${mock.id}`);
  });

  it("should render titles of CardCharacters", () => {
    render(<CardCharacters {...mock} />);

    expect(screen.getByText(mock.name)).toBeInTheDocument();
    expect(screen.getByText(mock.role)).toBeInTheDocument();
    expect(screen.getByText(mock.voices[0].name)).toBeInTheDocument();
    expect(screen.getByText(mock.voices[0].language)).toBeInTheDocument();
  });

  it("should match a snapshot", () => {
    const { container } = render(<CardCharacters {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
