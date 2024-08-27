import * as React from "react";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Link from "next/link";

const actions = [
  {
    icon: (
      <Link href={"/"}>
        <HomeIcon />
      </Link>
    ),
    name: "Home",
  },

  {
    icon: (
      <Link href={`/search/animes`}>
        {" "}
        <SearchIcon />
      </Link>
    ),
    name: "Search",
  },

  {
    icon: (
      <Link href={`/search/mangas`}>
        {" "}
        <MenuBookIcon />
      </Link>
    ),
    name: "Mangas",
  },
  {
    icon: (
      <Link href={"/search/characters"}>
        {" "}
        <PersonIcon />,
      </Link>
    ),
    name: "Characters",
  },
];

export default function MoblieNav(props: any) {
  return (
    <div {...props}>
      <SpeedDial
        className="lg:hidden md:p-10"
        ariaLabel="SpeedDial openIcon example"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          "& .MuiFab-primary": {
            backgroundColor: "#161616",
            "&:hover": {
              backgroundColor: "#161616",
            },
          },
        }}
        icon={
          <SpeedDialIcon openIcon={<CloseOutlinedIcon />} icon={<MenuIcon />} />
        }
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
