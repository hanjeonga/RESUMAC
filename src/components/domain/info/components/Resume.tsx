"use client";
import React from "react";
import { motion } from "framer-motion";
import useContentsScroll from "../hooks/useContentsScroll";
import { sectionContents } from "../utils/sectionContents";
import SectionSlide from "./SectionSlide";
import SectionContent from "./SectionContent";
import TechStack from "./TechStack ";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();
  const { sectionRefs, activeSection, handleScrollTo } = useContentsScroll(
    sectionContents.map((section) => section.id)
  );

  return (
    <div className="relative w-screen flex mt-[40px]">
      <div className="contour-line" />
      <div className="flex-1 overflow-y-auto snap-y snap-mandatory">
        {sectionContents.map((section, index) => (
          <motion.div
            key={section.id}
            id={section.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="flex flex-col items-center text-3xl font-bold snap-start p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl mb-4">{t(section.title)}</h2>
            {section.id === "section8" ? (
              <TechStack />
            ) : (
              <div className="h-full flex gap-x-[10px]">
                <div className="w-[3px] h-full bg-white" />
                <SectionContent content={t(section.content)} />
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <SectionSlide
        sections={sectionContents}
        activeSection={activeSection}
        handleScrollTo={handleScrollTo}
      />
    </div>
  );
};

export default Resume;
