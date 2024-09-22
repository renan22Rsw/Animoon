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
    <div className=" py-2 px-1 ">
      <Link href={`/${url}/${id}`}>
        <Image
          className=" rounded-md cursor-pointer h-[190px] lg:hover:scale-110  lg:duration-700 lg:ease-in-out lg:h-[265px]"
          src={images}
          width={300}
          height={300}
          quality={100}
          priority={true}
          alt="card-picture"
          style={{ width: "165px", objectFit: "cover" }}
        />
      </Link>

      <h2 className="py-4  text-xs md:text-sm   font-bold">
        {title.length > 35 ? title.substring(0, 35) + "..." : title}
      </h2>
    </div>
  );
};

export default MainCard;
