"use client";
import React, { Suspense } from "react";
import Loading from "@/components/Loading/Loading";
import TrendingMangasContent from "@/components/Contents/Mangas/TrendingMangasContent";

export default function TrendingMangas() {
  return (
    <Suspense fallback={<Loading />}>
      <TrendingMangasContent />
    </Suspense>
  );
}
