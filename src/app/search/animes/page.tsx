"use client";

import React, { ReactNode, Suspense } from "react";
import Loading from "@/components/Loading/Loading";
import AnimePageContent from "@/components/Contents/Animes/AnimesContentPage";

export default function AnimePage({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      {children}
      <AnimePageContent />
    </Suspense>
  );
}
