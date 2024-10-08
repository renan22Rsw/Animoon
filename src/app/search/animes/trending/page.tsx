"use client";

import React, { Suspense } from "react";
import Loading from "@/components/Loading/Loading";
import TrendingAnimeContent from "@/components/Contents/Animes/TrendingAnimesContent";

export default function TrendingAnimes() {
  return (
    <Suspense fallback={<Loading />}>
      <TrendingAnimeContent />
    </Suspense>
  );
}
