"use client";
import { motion } from "framer-motion";
import SideSlide from "./SideSlide";
import useContentsScroll from "../hooks/useContentsScroll";

const sections = [
  {
    id: "section1",
    title: "Introduction",
    content:
      "Welcome to the Introduction section. Here we provide an overview of the page.",
  },
  {
    id: "section2",
    title: "Features",
    content: "Here are some of the amazing features of our product.",
  },
  {
    id: "section3",
    title: "Technologies",
    content:
      "We use modern technologies like React, Next.js, and TailwindCSS to build this page.",
  },
  {
    id: "section4",
    title: "Contact",
    content: "Feel free to contact us through the information provided below.",
  },
];

const InfoContents = () => {
  const { sectionRefs, activeSection, handleScrollTo } = useContentsScroll(
    sections.map((section) => section.id)
  );

  return (
    <div className="relative w-screen flex mt-[40px]">
      <div className="contour-line" />
      <div className="flex-1 overflow-y-auto snap-y snap-mandatory">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            id={section.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }} // Correct way of handling callback ref
            className="flex flex-col items-center text-3xl font-bold snap-start p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl mb-4">{section.title}</h2>
            <div className="h-full flex gap-x-[10px]">
              <div className="w-[3px] h-full bg-white" />
              <span className="block text-[15px] flex-grow">
                {section.content}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <SideSlide
        sections={sections}
        activeSection={activeSection}
        handleScrollTo={handleScrollTo}
      />
    </div>
  );
};

export default InfoContents;
