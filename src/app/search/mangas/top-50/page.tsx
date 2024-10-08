"use client";
import React, { Suspense } from "react";
import Loading from "@/components/Loading/Loading";
import Top50AnimesContent from "@/components/Contents/Animes/Top50Content";

export default function Top50Mangas() {
  return (
    <Suspense fallback={<Loading />}>
      <Top50AnimesContent />
    </Suspense>
  );
}
