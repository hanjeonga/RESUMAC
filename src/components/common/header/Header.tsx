import React from "react";
import Link from "next/link";
import { MdLanguage } from "react-icons/md";
import { IoLogoApple } from "react-icons/io5";
import TimeSincePageLoad from "./TimeSincePageLoad";
import { setTime } from "@/util/calcTime";

const Header = () => {
  const leftList = [
    { link: "/", title: "Home", icon: <IoLogoApple /> },
    { link: "/", title: "Search", icon: "Finder" },
    { link: "/", title: "Profile", icon: "Profile" },
    { link: "https://github.com/hanjeonga", title: "Git", icon: "Github" },
    { link: "/", title: "Contact", icon: "Contact" },
  ];

  const RightList = [
    { link: "/", title: "Lang", icon: <MdLanguage /> },
    { link: "/", title: "Time", icon: setTime() },
    { link: "/", title: "Since", icon: <TimeSincePageLoad /> },
    { link: "/", title: "Login", icon: "LogIn" },
  ];

  return (
    <div className="w-full h-[20px] bg-[#C0C3E6] flex justify-between items-center pl-[10px] pr-[10px]">
      <div className="w-[200px]">
        <ul className="h-full flex justify-between items-center">
          {leftList.map((item) => (
            <Link
              key={`${item.link}_${item.title}`}
              href={item.link}
              className={
                item.title === "Search"
                  ? "text-xs cursor-pointer"
                  : "text-xs font-bold cursor-pointer"
              }
            >
              {item.icon}
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-[260px]">
        <ul className="h-full flex justify-between items-center">
          {RightList.map((item) => (
            <Link
              key={`${item.link}_${item.title}`}
              href={item.link}
              className="text-xs font-bold cursor-pointer"
            >
              {item.icon}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
