import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiBars3, HiMiniMoon, HiMiniSun, HiXMark } from 'react-icons/hi2';
import Container from './Container';

function Navbar({ navItems, activeSection, theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <Container
          className={`rounded-2xl border transition-all duration-300 ${
            isScrolled
              ? 'border-slate-200/70 bg-white/70 shadow-glow backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75'
              : 'border-transparent bg-transparent'
          }`}
        >
          <div className="flex h-16 items-center justify-between">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100"
              aria-label="Scroll to top"
            >
              AR<span className="text-brand-500 dark:text-brand-300">.</span>
            </button>

            <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'bg-slate-900 text-white dark:bg-white/10'
                        : 'text-slate-600 hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onToggleTheme}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-900 transition hover:border-brand-300/50 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <HiMiniSun className="h-5 w-5" /> : <HiMiniMoon className="h-5 w-5" />}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-900 transition hover:border-brand-300/50 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10 md:hidden"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </Container>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
              className="md:hidden"
            >
              <Container className="mt-3 rounded-2xl border border-slate-200/80 bg-white/85 p-4 shadow-glow backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90">
                <nav className="flex flex-col gap-2" aria-label="Mobile">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                        activeSection === item.id
                          ? 'bg-slate-900 text-white dark:bg-white/10'
                          : 'text-slate-600 hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </Container>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <div className="h-20" aria-hidden="true" />
    </>
  );
}

export default Navbar;
