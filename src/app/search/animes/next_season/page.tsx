"use client";

import React, { Suspense } from "react";
import Loading from "@/components/Loading/Loading";
import NextSeasonAnimesContent from "@/components/Contents/Animes/NextSeasonsContent";

export default function NextSeasonAnimes() {
  return (
    <Suspense fallback={<Loading />}>
      <NextSeasonAnimesContent />
    </Suspense>
  );
}
