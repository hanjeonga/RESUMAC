"use client";
import React, { useState } from "react";
import Link from "next/link";
import { portfolioList } from "../utils/contentsList";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

const RightSection = () => {
  const [isHovered, setIsHovered] = useState("0");

  return (
    <div className="w-[70%] open-height px-[20px] py-[30px]">
      {portfolioList.map((portfolio, idx) => {
        return (
          <Link
            key={`${portfolio.link}_${idx}`}
            href={portfolio.link}
            onMouseEnter={() => setIsHovered(portfolio.title)}
            onMouseLeave={() => setIsHovered(portfolio.title)}
          >
            {isHovered === portfolio.title ? (
              <FaFolderOpen className="text-[#5DCAF8]" />
            ) : (
              <FaFolder className="text-[#5DCAF8]" />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default RightSection;
