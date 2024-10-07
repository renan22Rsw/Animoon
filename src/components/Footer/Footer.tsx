import Image from "next/image";
import React from "react";
import Icon from "../../../public/images/icon.png";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

const icons = [
  {
    id: 1,
    icon: (
      <Link href={"https://www.instagram.com/renan_rsw/"} target="_blank">
        <FaInstagram size={"25px"} />
      </Link>
    ),
  },

  {
    id: 2,
    icon: (
      <Link href={"https://github.com/renan22Rsw"} target="_blank">
        <FaGithub size={"25px"} />
      </Link>
    ),
  },

  {
    id: 3,
    icon: (
      <Link href={"https://www.facebook.com/Renan12rsw"} target="_blank">
        <FaFacebook size={"25px"} />
      </Link>
    ),
  },

  {
    id: 4,
    icon: (
      <Link
        href={
          "https://discord.com/channels/1292964547895885896/1292964547895885899"
        }
        target="_blank"
      >
        <FaGithub size={"25px"} />
      </Link>
    ),
  },
];

const Footer = () => {
  return (
    <div className="bg-[#161616] py-6 px-4  w-full">
      <div className="flex justify-center lg:justify-start lg:mx-4">
        <Image
          src={Icon}
          alt="AniMonn-icon"
          width={30}
          height={30}
          className="mr-1"
        />
        <h4 className="text-white font-bold lg:text-lg">AniMoon</h4>
      </div>
      <div className="flex justify-center lg:justify-start mx-4 my-2 text-[#D1D1D1]">
        {icons.map((icon) => (
          <div key={icon.id} className="lg:hover:text-yellow-500 px-4 lg:px-2">
            {icon.icon}
          </div>
        ))}
      </div>
      <div className="text-center lg:text-end">
        <p className="text-white italic font-light">© 2024 Animmon</p>
      </div>
    </div>
  );
};

export default Footer;
