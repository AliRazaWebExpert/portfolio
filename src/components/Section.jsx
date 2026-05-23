import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Container from './Container';

function Section({ id, title, children }) {
  const sectionRef = useRef(null);
  const [hasRoomForPerspective, setHasRoomForPerspective] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -6]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [56, 0, -36]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const updatePreference = () => setHasRoomForPerspective(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className="relative scroll-mt-24 py-20 sm:py-24"
      aria-labelledby={`${id}-title`}
      style={{ transformPerspective: 1200 }}
    >
      <Container>
        <motion.div
          style={
            hasRoomForPerspective
              ? { rotateX, y, scale, transformStyle: 'preserve-3d' }
              : { transformStyle: 'preserve-3d' }
          }
        >
          <motion.div
            className="mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
          >
            <span
              id={`${id}-title`}
              className="inline-flex rounded-full border border-slate-300/40 bg-white/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-brand-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-brand-200"
            >
              {title}
            </span>
          </motion.div>
          {children}
        </motion.div>
      </Container>
    </motion.section>
  );
}

export default Section;
