"use client";

import React, { Suspense } from "react";
import Loading from "@/components/Loading/Loading";
import CharactersPage from "@/components/Contents/Characters/CharactersPageContent";

export default function CharactersPageContent() {
  return (
    <Suspense fallback={<Loading />}>
      <CharactersPage />
    </Suspense>
  );
}
