import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SearchContent = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/search/animes");
  }, [router]);
  return null;
};

export default SearchContent;
