"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { portfolioList } from "../utils/contentsList";
import Text from "@/components/atoms/text/Text";

const RightSection = () => {
  const [isHovered, setIsHovered] = useState("0");
  const router = useRouter();

  return (
    <div className="w-full h-full bg-white px-[20px] py-[30px] grid grid-cols-7 grid-flow-row auto-rows-min gap-y-10 overflow-auto">
      {portfolioList
        .filter((link) => link.link !== "/portfolio")
        .map((portfolio, idx) => {
          return (
            <div
              key={`${portfolio.link}_${idx}`}
              onMouseEnter={() => setIsHovered(portfolio.title)}
              onMouseLeave={() => setIsHovered("0")}
              onClick={() => router.push(`/open/portfolio/${portfolio.link}`)}
              className="cursor-pointer"
            >
              <div className="flex flex-col items-center gap-y-[10px]">
                <div
                  className={
                    isHovered === portfolio.title
                      ? "folder-open"
                      : "folder-close"
                  }
                />
                <Text value={portfolio.title} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RightSection;
