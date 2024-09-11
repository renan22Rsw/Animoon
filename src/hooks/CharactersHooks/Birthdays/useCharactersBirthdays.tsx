import { useQuery } from "@tanstack/react-query";
import { fetchCharactersBirthdays } from "@/api/CharacterMainPage";

const useCharactersBirthdays = () => {
  const {
    data: characterBirthday,
    isError: characterBirthdayIsError,
    isLoading: characterBirthdayIsLoading,
  } = useQuery({
    queryKey: ["birthdaysCharacter"],
    queryFn: fetchCharactersBirthdays,
  });
  return {
    characterBirthday,
    characterBirthdayIsError,
    characterBirthdayIsLoading,
  };
};

export default useCharactersBirthdays;
