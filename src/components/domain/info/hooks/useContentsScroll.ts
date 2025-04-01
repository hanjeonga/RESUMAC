import { useEffect, useRef, useState } from "react";

const useContentsScroll = (sections: string[]) => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>(
    Array(sections.length).fill(null)
  );
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { threshold: [0.3, 0.6, 0.9] }
    );

    const currentRefs = sectionRefs.current.slice();
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [sections]);

  const handleScrollTo = (id: string) => {
    const section = sectionRefs.current.find((ref) => ref?.id === id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return { sectionRefs, activeSection, handleScrollTo };
};

export default useContentsScroll;
