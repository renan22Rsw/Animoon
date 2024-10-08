"use client";
import React, { Suspense } from "react";
import Loading from "@/components/Loading/Loading";
import MangaPageContent from "@/components/Contents/Mangas/MangasContentPage";

export default function MangaPage() {
  return (
    <Suspense fallback={<Loading />}>
      <MangaPageContent />
    </Suspense>
  );
}
