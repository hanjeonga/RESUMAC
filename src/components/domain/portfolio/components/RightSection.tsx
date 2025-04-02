"use client";
import React, { useState } from "react";
import Link from "next/link";
import { portfolioList } from "../utils/contentsList";
import Text from "@/components/atoms/text/Text";

const RightSection = () => {
  const [isHovered, setIsHovered] = useState("0");

  return (
    <div className="w-[70%] open-height bg-white px-[20px] py-[30px] grid grid-cols-7  grid-flow-row auto-rows-min gap-y-10 overflow-auto">
      {portfolioList.map((portfolio, idx) => {
        return (
          <Link
            key={`${portfolio.link}_${idx}`}
            href={portfolio.link}
            onMouseEnter={() => setIsHovered(portfolio.title)}
            onMouseLeave={() => setIsHovered(portfolio.title)}
          >
            <div className="flex flex-col items-center gap-y-[10px]">
              <div
                className={
                  isHovered === portfolio.title ? "folder-open" : "folder-close"
                }
              />
              <Text value={portfolio.title} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RightSection;
