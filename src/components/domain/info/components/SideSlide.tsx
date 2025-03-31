import React from "react";

const SideSlide = ({
  sections,
  activeSection,
  handleScrollTo,
}: {
  activeSection: string;
  sections: {
    id: string;
    title: string;
  }[];
  handleScrollTo: (id: string) => void;
}) => {
  return (
    <nav className="w-[100px] fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
      {sections.map((section) => {
        if (activeSection === section.id)
          return (
            <button
              key={section.id}
              className={`transition-all duration-300 text-white text-left`}
              onClick={() => handleScrollTo(section.id)}
            >
              {section.title}
            </button>
          );
        else
          return (
            <button
              key={section.id}
              className="w-[20px] h-[3px] bg-[#9b9b9b]"
              onClick={() => handleScrollTo(section.id)}
            />
          );
      })}
    </nav>
  );
};

export default SideSlide;
