"use client";
import { useState } from "react";
import Link from "next/link";
import { portfolioList } from "../utils/contentsList";
import { FaFolder } from "react-icons/fa";
import Text from "@/components/atoms/text/Text";
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
                <FaFolder className="w-[20px] h-auto text-[#5DCAF8]" />
                <Text value={portfolio.title} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSection;
