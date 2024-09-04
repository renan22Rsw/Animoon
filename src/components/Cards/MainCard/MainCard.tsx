import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface MainCardProps {
  title: string;
  images: string;
  id: number;
}

const MainCard = ({ title, images, id }: MainCardProps) => {
  const params = usePathname();
  const urlName: string[] = params?.split("/") || [];
  const url = urlName[2] || "default section";

  return (
    <div className=" py-2 px-1 lg:mx-4">
      <Link href={`/${url}/${id}`}>
        <Image
          className=" rounded-md cursor-pointer lg:hover:scale-110 h-[190px] lg:duration-700 lg:ease-in-out md:h-[265px]"
          src={images}
          width={200}
          height={0}
          priority={true}
          alt="card-picture"
        />
      </Link>

      <h2 className="py-4  text-xs md:text-sm  font-bold">
        {title.length > 35 ? title.substring(0, 35) + "..." : title}
      </h2>
    </div>
  );
};

export default MainCard;
