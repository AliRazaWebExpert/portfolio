import { motion } from 'framer-motion';
import Container from './Container';

function HeroSection({ hero, socials }) {
  const handleScroll = (href) => {
    const targetId = href.replace('#', '');
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative scroll-mt-24 pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <span className="inline-flex max-w-full rounded-full border border-brand-300/40 bg-brand-400/10 px-4 py-1.5 text-center text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-brand-700 dark:text-brand-200 sm:tracking-[0.28em]">
              Open to new opportunities
            </span>
            <h1 className="mt-6 break-words font-display text-4xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-7xl">
              {hero.name}
              <span className="mt-2 block bg-gradient-to-r from-brand-700 via-slate-900 to-cyan-600 bg-clip-text text-transparent dark:from-brand-200 dark:via-white dark:to-cyan-200">
                {hero.title}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300 sm:text-xl">{hero.tagline}</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">{hero.description}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              {hero.ctas.map((cta) => (
                <button
                  key={cta.label}
                  type="button"
                  onClick={() => handleScroll(cta.href)}
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${
                    cta.variant === 'primary'
                      ? 'bg-brand-500 text-white shadow-glow hover:bg-brand-400'
                      : 'border border-slate-300 bg-white/70 text-slate-900 hover:border-brand-300/40 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10'
                  }`}
                >
                  {cta.label}
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-300/40 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-500/20 via-transparent to-cyan-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/65 p-4 shadow-glow backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-6">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="mt-6 space-y-4 rounded-3xl border border-slate-200/70 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-900/70 sm:p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Current focus</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
                    {hero.focus}
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {hero.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                      <p className="text-2xl font-bold text-slate-950 dark:text-white">{stat.value}</p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-brand-300/20 bg-brand-400/10 p-4 text-sm text-slate-700 dark:text-slate-200">
                  {hero.availability}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
