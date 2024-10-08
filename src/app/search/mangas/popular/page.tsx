"use client";

import React, { Suspense } from "react";
import Loading from "@/components/Loading/Loading";
import AllTimePopularContent from "@/components/Contents/Mangas/PopularMangasContent";

export default function AllTimePopular() {
  return (
    <Suspense fallback={<Loading />}>
      <AllTimePopularContent />
    </Suspense>
  );
}
