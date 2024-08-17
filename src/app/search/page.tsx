"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Search = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/search/animes");
  }, [router]);
};

export default Search;
