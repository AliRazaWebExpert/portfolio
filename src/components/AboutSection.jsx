import { motion } from 'framer-motion';
import { HiArrowTrendingUp, HiBolt, HiCheckBadge, HiCpuChip } from 'react-icons/hi2';

function AboutSection({ about }) {
  const profileStats = [
    { value: '6+', label: 'Years building websites' },
    { value: 'Global', label: 'Remote client delivery' },
    { value: 'SEO', label: 'Growth-minded builds' },
  ];
  const signalCards = [
    { label: 'Ecommerce', value: 'Shopify, WooCommerce, product UX', icon: HiBolt },
    { label: 'CMS Delivery', value: 'WordPress, Squarespace, editable pages', icon: HiCpuChip },
    { label: 'Growth Layer', value: 'SEO, analytics, campaigns, conversion paths', icon: HiArrowTrendingUp },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-6 text-white shadow-glow sm:p-8"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <motion.div
          className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,rgba(40,95,255,0.22),transparent_42%)]" />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-cyan-100 sm:tracking-[0.24em]">
              <HiCheckBadge className="h-4 w-4" />
              Professional profile
            </span>
            <span className="max-w-full rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-slate-300 sm:tracking-[0.24em]">
              Remote web developer
            </span>
          </div>

          <h2 className="mt-7 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
            {about.heading}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-slate-300">
            {about.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {profileStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="font-display text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/75 p-6 shadow-glow backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700 dark:text-brand-200">Capability stack</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-slate-950 dark:text-white">Where I create value</h3>
            </div>
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-brand-300/40 bg-brand-500 text-3xl font-bold text-white shadow-lg shadow-brand-500/25">
              {about.initials}
            </div>
          </div>

          <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            {about.strengths.map((strength) => (
              <li key={strength} className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300/50 dark:border-white/10 dark:bg-slate-900/60">
                {strength}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="rounded-[2rem] border border-slate-200/70 bg-white/65 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {about.summary.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 dark:border-white/10 dark:bg-slate-900/60">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{item.label}</p>
                <p className="mt-2 text-base font-semibold text-slate-950 dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="grid gap-4 lg:col-span-2 lg:grid-cols-3"
      >
        {signalCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="group rounded-[2rem] border border-slate-200/70 bg-white/70 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white hover:shadow-glow dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-cyan-200 transition group-hover:bg-brand-500 group-hover:text-white dark:bg-white/10">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-lg font-semibold text-slate-950 dark:text-white">{card.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{card.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default AboutSection;
