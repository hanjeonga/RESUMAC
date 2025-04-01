"use client";
import { useState } from "react";
import Link from "next/link";
import { portfolioList } from "../utils/contentsList";
import { IoFolderOutline } from "react-icons/io5";

const LeftSection = () => {
  const [isHovered, setIsHovered] = useState("0");
  return (
    <div className="w-[30%] open-height bg-[#dadada] border-r border-solid px-[20px] py-[30px]">
      <div className="flex flex-col gap-y-[10px]">
        {portfolioList.map((portfolio, idx) => {
          return (
            <Link
              key={`${portfolio.link}_${idx}`}
              href={portfolio.link}
              onMouseEnter={() => setIsHovered(portfolio.title)}
              onMouseLeave={() => setIsHovered(portfolio.title)}
            >
              <div
                className={`flex p-[10px] gap-x-[10px] items-center rounded-lg ${
                  isHovered === portfolio.title ? "bg-[#ccc]" : ""
                }`}
              >
                <IoFolderOutline className="w-[20px] h-auto text-[#476CD5]" />
                <span className="text-black text-[16px]">
                  {portfolio.title}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSection;
