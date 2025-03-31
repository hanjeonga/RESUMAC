"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

const PortfolioPage = () => {
  const [isHovered, setIsHovered] = useState("0");
  const portfolioList = [
    {
      link: "/info",
      title: "1",
    },
    {
      link: "/info",
      title: "2",
    },
    {
      link: "/info",
      title: "3",
    },
    {
      link: "/info",
      title: "4",
    },
    {
      link: "/info",
      title: "5",
    },
    {
      link: "/info",
      title: "6",
    },
    {
      link: "/info",
      title: "7",
    },
    {
      link: "/info",
      title: "8",
    },
    {
      link: "/info",
      title: "9",
    },
    {
      link: "/info",
      title: "10",
    },
  ];

  return (
    <div className="w-full">
      {portfolioList.map((portfolio, idx) => {
        return (
          <Link
            key={`${portfolio.link}_${idx}`}
            href={portfolio.link}
            onMouseEnter={() => setIsHovered(portfolio.title)}
            onMouseLeave={() => setIsHovered(portfolio.title)}
          >
            {isHovered === portfolio.title ? <FaFolderOpen /> : <FaFolder />}
          </Link>
        );
      })}
    </div>
  );
};

export default PortfolioPage;
