import { gql } from "@apollo/client";

export const FETCH_STAFF_BY_ID = gql`
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
`;
