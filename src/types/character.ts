export interface Characters {
  id: number;
  name: {
    userPreferred: string;
    native: string;
    alternative: string[];
  };
  age: string;
  gender: string;

  dateOfBirth: {
    month: number;
    day: number;
  };
  description: string;
  bloodType: string;

  image: {
    large: string;
  };
}
