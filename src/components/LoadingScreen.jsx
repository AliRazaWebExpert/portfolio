import { motion } from 'framer-motion';

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-50 dark:bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
      aria-hidden="true"
    >
      <div className="text-center">
        <motion.div
          className="mx-auto h-16 w-16 rounded-3xl border border-brand-300/40 bg-brand-500/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
        />
        <p className="mt-5 font-display text-lg font-semibold tracking-wide text-slate-950 dark:text-white">Loading portfolio</p>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
