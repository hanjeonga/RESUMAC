"use client";
import { useTranslation } from "react-i18next";
import { highlightWords } from "../utils/sectionContents";

const SectionContent = ({ content }: { content: string }) => {
  const { t } = useTranslation();

  const regex = new RegExp(
    `(${highlightWords.map((w) => t(w.word)).join("|")})`,
    "g"
  );
  const parts = content.split(regex);

  return (
    <div className="w-[600px]">
      <p className="leading-relaxed text-gray-800 text-[16px] text-white font-normal opacity-[0.8]">
        {parts.map((part, index) => {
          const matchedWord = highlightWords.find((w) => t(w.word) === part);
          if (matchedWord) {
            return (
              <span key={index} className={`${matchedWord.className}`}>
                {part}
              </span>
            );
          }
          return part;
        })}
      </p>
    </div>
  );
};

export default SectionContent;
