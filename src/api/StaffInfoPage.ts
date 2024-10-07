import { client } from "@/app/ApoloClient";
import { FETCH_STAFF_BY_ID } from "@/queries/Staffs/StaffInfoPage";
import { StaffsInfos } from "@/types/staff";

interface StaffsData {
  Page: {
    staff: StaffsInfos[];
  };
}

export const fetchStaffsById = async (id: number): Promise<StaffsInfos[]> => {
  const { data } = await client.query<StaffsData>({
    query: FETCH_STAFF_BY_ID,

    variables: { id },
  });
  return data.Page.staff;
};
