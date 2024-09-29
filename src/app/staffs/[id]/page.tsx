import { fetchStaffsById } from "@/api/StaffInfoPage";
import SubHeader from "@/components/Header/SubHeader/SubPageHeader";
import { Staffs } from "@/types/staff";
import React from "react";

const StaffInfo = async ({ params }: ParamId) => {
  const { id } = params;
  const data: Staffs[] = await fetchStaffsById(id);
  const staffs = Array.isArray(data)
    ? data.map((staff) => ({
        name: staff.name.full,
        nativeName: staff.name.native,
        age: staff.age,
        image: staff.image.large,
        gender: staff.gender,
        month: staff.dateOfBirth.month,
        day: staff.dateOfBirth.day,
        bloodType: staff.bloodType,
        homeTown: staff.homeTown,
        yearActive: staff.yearsActive,
        description: staff.description,
      }))
    : [];

  const staff = staffs[0] || [];

  return (
    <SubHeader
      name={staff.name}
      nativeName={staff.nativeName}
      age={staff.age}
      image={staff.image}
      gender={staff.gender}
      month={staff.month}
      day={staff.day}
      bloodType={staff.bloodType}
      hometown={staff.homeTown}
      yearsActive={staff.yearActive}
      description={staff.description?.replace(/<[^>]+>|[_!~*]/g, "")}
    />
  );
};

export default StaffInfo;
