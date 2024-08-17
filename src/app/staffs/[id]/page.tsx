import { fetchStaffsById } from "@/api/StaffInfoPage";
import CharacterHeader from "@/components/Header/CharacterHeader";
import { Staffs } from "@/types/staff";
import React from "react";

const StaffInfo = async ({ params }: ParamId) => {
  const data: Staffs[] = await fetchStaffsById(params.id);
  const staffs = data.map((staff) => ({
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
  }));

  const staff = staffs[0];

  return (
    <>
      <CharacterHeader
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
    </>
  );
};

export default StaffInfo;
