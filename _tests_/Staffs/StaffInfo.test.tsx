import { fetchStaffsById } from "@/api/StaffInfoPage";
import { describe } from "node:test";
import { mockStaffInfo } from "./mock";
import StaffInfo from "@/app/staffs/[id]/page";
import { render, screen, waitFor } from "@testing-library/react";

jest.mock("../../src/api/StaffInfoPage", () => ({
  fetchStaffsById: jest.fn(),
}));

describe("Staff Info page", () => {
  beforeEach(() => {
    (fetchStaffsById as jest.Mock).mockResolvedValue([mockStaffInfo]);
  });

  it("should render Staff Info page datas", async () => {
    render(await StaffInfo({ params: { id: 96879 } }));

    await waitFor(() => {
      const userPreferred = screen.getAllByText(mockStaffInfo.name.full);
      expect(userPreferred[0]).toBeInTheDocument();
      expect(userPreferred[1]).toBeInTheDocument();

      const natives = screen.getAllByText((native) =>
        native.includes(mockStaffInfo.name.native)
      );
      expect(natives[0]).toBeInTheDocument();
      expect(natives[1]).toBeInTheDocument();

      const images = screen.getAllByRole("img");
      expect(images[0]).toBeInTheDocument();
      expect(images[1]).toBeInTheDocument();

      const ages = screen.getAllByText((age) =>
        age.includes(mockStaffInfo.age.toString())
      );
      expect(ages[0]).toBeInTheDocument();
      expect(ages[1]).toBeInTheDocument();

      const bloodTypes = screen.getAllByText((blood) =>
        blood.includes(mockStaffInfo.bloodType)
      );
      expect(bloodTypes[0]).toBeInTheDocument();
      expect(bloodTypes[1]).toBeInTheDocument();

      const hometown = screen.getAllByText((home) =>
        home.includes(mockStaffInfo.homeTown)
      );
      expect(hometown[0]).toBeInTheDocument();
      expect(hometown[1]).toBeInTheDocument();

      const genders = screen.getAllByText((gender) =>
        gender.includes(mockStaffInfo.gender)
      );
      expect(genders[0]).toBeInTheDocument();
      expect(genders[1]).toBeInTheDocument();

      const descriptions = screen.getAllByText(mockStaffInfo.description);
      expect(descriptions[0]).toBeInTheDocument();
      expect(descriptions[1]).toBeInTheDocument();

      const months = screen.getAllByText((month) =>
        month.includes(mockStaffInfo.dateOfBirth.day.toString())
      );
      expect(months[0]).toBeInTheDocument();
      expect(months[1]).toBeInTheDocument();
      const days = screen.getAllByText((day) =>
        day.includes(mockStaffInfo.dateOfBirth.day.toLocaleString())
      );
      expect(days[0]).toBeInTheDocument();
      expect(days[1]).toBeInTheDocument();
    });
  });
});
