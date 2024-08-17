export interface Staffs {
  id: number;
  name: {
    full: string;
    native: string;
  };
  age: string;
  gender: string;

  dateOfBirth: {
    month: number;
    day: number;
  };
  description: string;
  bloodType: string;
  yearsActive: number[];
  homeTown: string;

  image: {
    large: string;
  };
}
