"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const SectionSlide = ({
  sections,
  activeSection,
  handleScrollTo,
}: {
  activeSection: string;
  sections: { id: string; title: string }[];
  handleScrollTo: (id: string) => void;
}) => {
  const { t } = useTranslation();
  return (
    <nav className="w-[100px] fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
      {sections.map((section) => (
        <button
          key={section.id}
          className={`transition-all duration-300 ${
            activeSection === section.id
              ? "text-white text-left font-bold underline"
              : "w-[20px] h-[3px] bg-[#9b9b9b]"
          }`}
          onClick={() => handleScrollTo(section.id)}
        >
          {activeSection === section.id ? t(section.title) : ""}
        </button>
      ))}
    </nav>
  );
};

export default SectionSlide;
