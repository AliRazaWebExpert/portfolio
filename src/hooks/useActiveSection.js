import { useEffect, useState } from 'react';

function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const headerOffset = 140;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + headerOffset;
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) {
        return;
      }

      let nextActiveSection = sectionIds[0];

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          nextActiveSection = section.id;
        }
      });

      setActiveSection(nextActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}

export default useActiveSection;
