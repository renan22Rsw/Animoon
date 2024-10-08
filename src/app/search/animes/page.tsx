"use client";

import React, { Suspense } from "react";
import Loading from "@/components/Loading/Loading";
import AnimePageContent from "@/components/Contents/Animes/AnimesContentPage";

export default function AnimePage() {
  return (
    <Suspense fallback={<Loading />}>
      <AnimePageContent />
    </Suspense>
  );
}
