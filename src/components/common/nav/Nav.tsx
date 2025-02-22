import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegFolderOpen, FaLaptopCode } from "react-icons/fa";
import { RxNotionLogo, RxFigmaLogo } from "react-icons/rx";
import { SiGithub } from "react-icons/si";
import { TbMessageCircleFilled } from "react-icons/tb";
import { FaRegPenToSquare } from "react-icons/fa6";
import Link from "next/link";

const Nav = () => {
  const NavList = [
    {
      link: "/info",
      title: "Profile",
      children: <CgProfile className="w-[25px] h-[25px]" />,
    },
    {
      link: "/portfolio",
      title: "Portfolio",
      children: <FaRegFolderOpen className="w-[25px] h-[25px]" />,
    },
    {
      link: "/notion",
      title: "Log",
      children: <RxNotionLogo className="w-[25px] h-[25px]" />,
    },
    {
      link: "/code",
      title: "Code",
      children: <FaLaptopCode className="w-[25px] h-[25px]" />,
    },
    {
      link: "/figma",
      title: "StoryBoard",
      children: <RxFigmaLogo className="w-[25px] h-[25px]" />,
    },
    {
      link: "/sketch",
      title: "Gallery",
      children: <FaRegPenToSquare className="w-[25px] h-[25px]" />,
    },
    { link: "/", title: "Line", children: "" },
    {
      link: "/github",
      title: "SNS",
      children: <SiGithub className="w-[25px] h-[25px]" />,
    },
    {
      link: "/contact",
      title: "Contact",
      children: <TbMessageCircleFilled className="w-[25px] h-[25px]" />,
    },
  ];

  const bgColors = [
    "bg-yellow-400",
    "bg-blue-500",
    "bg-black",
    "bg-purple-300",
    "bg-pink-500",
    "bg-indigo-300",
    "bg-white",
    "bg-black",
    "bg-green-500",
  ];

  return (
    <ul className="w-[40%] flex justify-between items-center nav mb-[20px]">
      {NavList.map((item, idx) => {
        if (idx === 6)
          return (
            <li
              key={`${item.link}_${item.title}`}
              className="w-[2px] h-[30px] bg-gray-100"
            ></li>
          );
        return (
          <Link
            key={`${item.link}_${item.title}`}
            href={`/open/${item.link}`}
            className={`w-[40px] h-[40px] ${bgColors[idx]} rounded-xl flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-115`}
          >
            {item.children}
          </Link>
        );
      })}
    </ul>
  );
};
export default Nav;
