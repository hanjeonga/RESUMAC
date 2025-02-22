"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const urlMap = {
  info: "Profile",
  portfolio: "Portfolio",
  notion: "Notion",
  code: "CodeSample",
  figma: "Figma",
  sketch: "Experiments",
  linkedin: "LinkedIn",
  contact: "Contact With JA",
};

const getPageTitleFromCurrentUrl = (currentUrl: string): string => {
  const matchedKey = Object.keys(urlMap).find((key) =>
    currentUrl.includes(key)
  );
  return matchedKey
    ? urlMap[matchedKey as keyof typeof urlMap]
    : "Unknown Page";
};

const OpenHeader = () => {
  const [pageTitle, setPageTitle] = useState<string>("");

  useEffect(() => {
    const currentUrl = window.location.href;
    setPageTitle(getPageTitleFromCurrentUrl(currentUrl));
  }, []);

  const buttonList = [
    { id: "red", link: "/", bg: "open-red" },
    { id: "yellow", link: "/", bg: "open-yellow" },
    { id: "green", link: "/", bg: "open-green" },
  ];

  return (
    <div className="w-full h-[16px] bg-[#dadada] flex justify-between items-center pl-[10px] pr-[10px]">
      <div className="flex gap-[5px]">
        {buttonList.map((item) => (
          <Link
            key={`${item.id}_button`}
            href={item.link}
            className={item.bg}
          ></Link>
        ))}
      </div>
      <div className="text-black text-xs font-bold">{pageTitle}</div>
    </div>
  );
};

export default OpenHeader;
