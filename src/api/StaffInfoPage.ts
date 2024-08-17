import { client } from "@/app/ApoloClient";
import { Staffs } from "@/types/staff";
import { gql } from "@apollo/client";

interface StaffsData {
  Page: {
    staff: Staffs[];
  };
}

export const fetchStaffsById = async (id: number): Promise<Staffs[]> => {
  const { data } = await client.query<StaffsData>({
    query: gql`
      query ($id: Int!) {
        Page {
          staff(id: $id) {
            id
            name {
              full
              native
            }

            dateOfBirth {
              month
              day
            }
            age
            gender
            bloodType
            description
            yearsActive
            homeTown

            image {
              large
            }
          }
        }
      }
    `,
    variables: { id },
  });
  return data.Page.staff;
};
