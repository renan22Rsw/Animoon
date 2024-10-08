"use client";

import React, { Suspense } from "react";
import Loading from "@/components/Loading/Loading";
import CharactersPageContent from "@/components/Contents/Characters/CharactersPageContent";

export default function CharactersPage() {
  return (
    <Suspense fallback={<Loading />}>
      <CharactersPageContent />
    </Suspense>
  );
}
