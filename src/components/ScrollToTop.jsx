import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi2';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.22 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 text-slate-900 shadow-glow backdrop-blur-xl transition hover:border-brand-300/50 dark:border-white/10 dark:bg-slate-950/80 dark:text-white"
          aria-label="Scroll to top"
        >
          <HiArrowUp className="h-5 w-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

export default ScrollToTop;
