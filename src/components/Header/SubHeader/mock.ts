interface mockTypes {
  name: string;
  nativeName: string;
  alternativeName?: string[];
  age: string;
  image: string;
  gender: string;
  month: number;
  day: number;
  bloodType: string;
  hometown: string;
  yearsActive?: number[];
  description: string;
}

export const mock: mockTypes = {
  name: "Naruto",
  nativeName: "Naruto Uzumaki",
  alternativeName: ["Nine-Tails Jinchuuriki", " Number One Unpredictable"],
  age: "17",
  image: "http://example.com/image.jpg",
  gender: "Male",
  month: 10,
  day: 10,
  bloodType: "B",
  hometown: "Saitama Prefecture, Japan",
  yearsActive: [1996],
  description: "Born in Konohagakure, a ninja village hidden in the leaves",
};
