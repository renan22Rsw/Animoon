"use client";

import React, { Suspense } from "react";
import Loading from "@/components/Loading/Loading";
import AnimePageContent from "@/components/Contents/Animes/AnimesContentPage";
import { useSearchParams } from "next/navigation";

export default function AnimePage() {
  const search = useSearchParams();

  return (
    <Suspense fallback={<Loading />}>
      <AnimePageContent />
    </Suspense>
  );
}
