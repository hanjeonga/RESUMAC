"use client";

import React from "react";
import Link from "next/link";
import { IoLogoApple } from "react-icons/io5";
import TimeSincePageLoad from "./TimeSincePageLoad";
import { setTime } from "@/util/calcTime";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";

const Header = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ko" ? "en" : "ko";
    i18n.changeLanguage(newLang).catch(console.error);
  };

  const leftList = [
    { link: "/", title: "Home", icon: <IoLogoApple className="text-white" /> },
    { link: "/", title: "Search", icon: "Finder" },
    { link: "/", title: "Profile", icon: "Profile" },
    { link: "https://github.com/hanjeonga", title: "Git", icon: "Github" },
    { link: "/", title: "Contact", icon: "Contact" },
  ];

  const RightList = [
    {
      link: "",
      title: "Lang",
      icon: (
        <MdLanguage className="lang-icon text-xs font-bold cursor-pointer" />
      ),
    },
    { link: "/", title: "Time", icon: setTime() },
    { link: "/", title: "Since", icon: <TimeSincePageLoad /> },
    { link: "/", title: "Login", icon: "LogIn" },
  ];

  return (
    <div className="w-full h-[20px] bg-[#C0C3E6] flex justify-between items-center px-3">
      <div className="w-[200px]">
        <ul className="h-full flex justify-between items-center">
          {leftList.map((item) => (
            <Link
              key={`${item.link}_${item.title}`}
              href={item.link}
              className={
                item.title === "Search"
                  ? "text-xs text-white cursor-pointer"
                  : "text-xs text-white font-bold cursor-pointer"
              }
            >
              {item.icon}
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-[260px]">
        <ul className="h-full flex justify-between items-center">
          {RightList.map((item) =>
            item.title === "Lang" ? (
              <button
                key={`${item.link}_${item.title}`}
                className="cursor-pointer"
                onClick={toggleLanguage}
              >
                {item.icon}
              </button>
            ) : (
              <Link
                key={`${item.link}_${item.title}`}
                href={item.link}
                className="text-xs font-bold cursor-pointer"
              >
                {item.icon}
              </Link>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
