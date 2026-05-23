import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackgroundEffects from './components/BackgroundEffects';
import LoadingScreen from './components/LoadingScreen';
import Section from './components/Section';
import { portfolio } from './data/portfolio';
import useActiveSection from './hooks/useActiveSection';
import useTheme from './hooks/useTheme';

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  const sections = useMemo(
    () => [
      {
        id: 'about',
        title: 'About',
        content: <AboutSection about={portfolio.about} />,
      },
      {
        id: 'skills',
        title: 'Skills',
        content: <SkillsSection skillGroups={portfolio.skillGroups} />,
      },
      {
        id: 'projects',
        title: 'Projects',
        content: <ProjectsSection projects={portfolio.projects} />,
      },
      {
        id: 'experience',
        title: 'Experience',
        content: <ExperienceSection experiences={portfolio.experience} />,
      },
      {
        id: 'contact',
        title: 'Contact',
        content: <ContactSection contact={portfolio.contact} socials={portfolio.socials} />,
      },
    ],
    [],
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <BackgroundEffects theme={theme} />
      <AnimatePresence>{isLoading ? <LoadingScreen key="loader" /> : null}</AnimatePresence>

      <Navbar
        navItems={portfolio.navigation}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <HeroSection hero={portfolio.hero} socials={portfolio.socials} />

        {sections.map((section) => (
          <Section key={section.id} id={section.id} title={section.title}>
            {section.content}
          </Section>
        ))}
      </main>

      <Footer footer={portfolio.footer} navItems={portfolio.navigation} socials={portfolio.socials} />
      <ScrollToTop />
    </div>
  );
}

export default App;
