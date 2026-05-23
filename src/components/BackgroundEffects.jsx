import { motion } from 'framer-motion';

function BackgroundEffects({ theme }) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 -z-10 transition-all duration-700 ${
        theme === 'dark' ? 'bg-mesh-dark' : 'bg-mesh-light'
      }`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-[size:72px_72px] opacity-60 dark:bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)]" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cyan-300/10 to-transparent dark:from-cyan-300/5" />
      <motion.div
        className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent"
        animate={{ x: ['-100%', '100%'], opacity: [0.2, 0.75, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute left-[8%] top-24 h-52 w-52 rounded-full bg-brand-500/14 blur-3xl dark:bg-brand-400/14"
        animate={{ y: [0, 20, -10, 0], x: [0, 12, -8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-[10%] h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-300/10"
        animate={{ y: [0, -16, 12, 0], x: [0, -20, 6, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default BackgroundEffects;
