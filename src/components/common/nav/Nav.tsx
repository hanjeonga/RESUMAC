import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaLaptopCode, FaLinkedin } from "react-icons/fa";
import { RxNotionLogo, RxFigmaLogo } from "react-icons/rx";
import { TbMessageCircleFilled } from "react-icons/tb";
import { FaRegPenToSquare, FaRegFolderClosed } from "react-icons/fa6";
import Link from "next/link";

const Nav = () => {
  const NavList = [
    {
      link: "/info",
      title: "Profile",
      children: <CgProfile className="w-[25px] h-[25px] text-white" />,
    },
    {
      link: "/portfolio",
      title: "Portfolio",
      children: <FaRegFolderClosed className="w-[25px] h-[25px] text-white" />,
    },
    {
      link: "/notion",
      title: "Log",
      children: <RxNotionLogo className="w-[25px] h-[25px] text-white" />,
    },
    {
      link: "/code",
      title: "Code",
      children: <FaLaptopCode className="w-[25px] h-[25px] text-white" />,
    },
    {
      link: "/figma",
      title: "StoryBoard",
      children: <RxFigmaLogo className="w-[25px] h-[25px] text-white" />,
    },
    {
      link: "/sketch",
      title: "Gallery",
      children: <FaRegPenToSquare className="w-[25px] h-[25px] text-white" />,
    },
    { link: "/", title: "Line", children: "" },
    {
      link: "/linkedin",
      title: "SNS",
      children: <FaLinkedin className="w-[25px] h-[25px] text-white" />,
    },
    {
      link: "/contact",
      title: "Contact",
      children: (
        <TbMessageCircleFilled className="w-[25px] h-[25px] text-white" />
      ),
    },
  ];

  const bgColors = [
    "bg-yellow-400",
    "bg-blue-400",
    "bg-black",
    "bg-purple-300",
    "bg-pink-500",
    "bg-indigo-300",
    "bg-white",
    "bg-blue-500",
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
