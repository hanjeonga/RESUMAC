import { useEffect, useRef, useState } from "react";

const useContentsScroll = (sections: string[]) => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // 특정 섹션으로 스크롤 이동
  const handleScrollTo = (id: string) => {
    const section = sectionRefs.current.find((ref) => ref?.id === id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return { sectionRefs, activeSection, handleScrollTo };
};

export default useContentsScroll;
