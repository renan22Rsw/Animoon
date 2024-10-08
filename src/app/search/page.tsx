import React, { Suspense } from "react";
import Loading from "@/components/Loading/Loading";
import SearchContent from "@/components/Contents/Search/SearchContent";

export default function Search() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchContent />
    </Suspense>
  );
}
