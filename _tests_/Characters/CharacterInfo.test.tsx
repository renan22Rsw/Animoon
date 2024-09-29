import { fetchCharactersById } from "@/api/CharacterInfoPage";
import { mockCharacterInfo } from "./mock";
import CharacterInfo from "@/app/characters/[id]/page";
import { render, screen, waitFor } from "@testing-library/react";

jest.mock("../../src/api/CharacterInfoPage", () => ({
  fetchCharactersById: jest.fn(),
}));

describe("Characters Info page", () => {
  beforeEach(() => {
    (fetchCharactersById as jest.Mock).mockResolvedValue([mockCharacterInfo]);
  });

  it("should render Characters Info page datas", async () => {
    render(await CharacterInfo({ params: { id: 17 } }));
    await waitFor(() => {
      const userPreferred = screen.getAllByText(
        mockCharacterInfo.name.userPreferred
      );
      expect(userPreferred[0]).toBeInTheDocument();
      expect(userPreferred[1]).toBeInTheDocument();

      const natives = screen.getAllByText((native) =>
        native.includes(mockCharacterInfo.name.native)
      );
      expect(natives[0]).toBeInTheDocument();
      expect(natives[1]).toBeInTheDocument();

      const alternatives = screen.getAllByText((alternative) =>
        alternative.includes(
          mockCharacterInfo.name.alternative[0] ||
            mockCharacterInfo.name.alternative[1]
        )
      );
      expect(alternatives[0]).toBeInTheDocument();
      expect(alternatives[1]).toBeInTheDocument();

      const images = screen.getAllByRole("img");
      expect(images[0]).toBeInTheDocument();
      expect(images[1]).toBeInTheDocument();

      const ages = screen.getAllByText((age) =>
        age.includes(mockCharacterInfo.age)
      );
      expect(ages[0]).toBeInTheDocument();
      expect(ages[1]).toBeInTheDocument();

      const bloodTypes = screen.getAllByText((blood) =>
        blood.includes(mockCharacterInfo.bloodType)
      );
      expect(bloodTypes[0]).toBeInTheDocument();
      expect(bloodTypes[1]).toBeInTheDocument();

      const genders = screen.getAllByText((gender) =>
        gender.includes(mockCharacterInfo.gender)
      );
      expect(genders[0]).toBeInTheDocument();
      expect(genders[1]).toBeInTheDocument();

      const descriptions = screen.getAllByText(mockCharacterInfo.description);
      expect(descriptions[0]).toBeInTheDocument();
      expect(descriptions[1]).toBeInTheDocument();

      const months = screen.getAllByText((month) =>
        month.includes(mockCharacterInfo.dateOfBirth.day.toString())
      );
      expect(months[0]).toBeInTheDocument();
      expect(months[1]).toBeInTheDocument();
      const days = screen.getAllByText((day) =>
        day.includes(mockCharacterInfo.dateOfBirth.day.toString())
      );
      expect(days[0]).toBeInTheDocument();
      expect(days[1]).toBeInTheDocument();
    });
  });
});
