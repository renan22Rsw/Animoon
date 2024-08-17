import { useQuery } from "@tanstack/react-query";
import { fetchCharactersBirthdays } from "@/api/CharacterMainPage";

const useBirthdayCharacter = () => {
  const {
    data: bithdayCharacter,
    isError: bithdayCharacterIsError,
    isLoading: bithdayCharacterIsLoading,
  } = useQuery({
    queryKey: ["birthdaysCharacter"],
    queryFn: fetchCharactersBirthdays,
  });
  return {
    bithdayCharacter,
    bithdayCharacterIsError,
    bithdayCharacterIsLoading,
  };
};

export default useBirthdayCharacter;
