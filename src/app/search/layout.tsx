"use client";

import InputSearch from "@/components/InputSearch/InputSearch";
import ReactQueryProvider from "../ReactQueryProvider";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const shouldNotRenderInputSearch = pathName.length;

  return (
    <div className="text-[#D1D1D1] bg-[#101010] max-w-[1400px] font-overpass mx-auto">
      <div className=" px-20 h-[100px] justify-center flex items-center">
        {shouldNotRenderInputSearch > 18 ? "" : <InputSearch />}
      </div>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </div>
  );
}
