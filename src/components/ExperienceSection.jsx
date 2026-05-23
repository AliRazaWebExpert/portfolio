import { motion } from 'framer-motion';

function ExperienceSection({ experiences }) {
  return (
    <div className="relative ml-4 border-l border-slate-200 pl-8 dark:border-white/10 sm:ml-6 sm:pl-10">
      {experiences.map((item, index) => (
        <motion.article
          key={`${item.role}-${item.company}`}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="relative mb-10 last:mb-0"
        >
          <span className="absolute -left-[2.7rem] top-3 h-4 w-4 rounded-full border-4 border-slate-50 bg-brand-400 shadow-[0_0_0_6px_rgba(15,23,42,0.05)] dark:border-slate-950 dark:shadow-[0_0_0_6px_rgba(255,255,255,0.05)] sm:-left-[3.2rem]" />
          <div className="rounded-[2rem] border border-slate-200/70 bg-white/65 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-brand-700 dark:text-brand-200">{item.company}</p>
              </div>
              <span className="inline-flex rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-sm text-slate-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300">
                {item.period}
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.summary}</p>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-slate-900/50">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default ExperienceSection;
