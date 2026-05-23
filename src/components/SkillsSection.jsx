import { motion } from 'framer-motion';

function SkillsSection({ skillGroups }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {skillGroups.map((group, groupIndex) => (
        <motion.article
          key={group.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: groupIndex * 0.08 }}
          className="rounded-[2rem] border border-slate-200/70 bg-white/65 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="mb-6">
            <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">{group.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{group.description}</p>
          </div>

          <div className="space-y-5">
            {group.skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <div className="flex min-w-0 flex-1 items-center gap-3 text-slate-800 dark:text-slate-200 max-[380px]:grid max-[380px]:grid-cols-[2.5rem_1fr]">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/80 text-brand-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-brand-200">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 break-words font-medium leading-5">{skill.name}</span>
                    </div>
                    <span className="shrink-0 text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
                  </div>
                  <div
                    className="h-2 rounded-full bg-slate-200 dark:bg-white/10"
                    role="progressbar"
                    aria-label={`${skill.name} proficiency`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={skill.level}
                  >
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-brand-400 to-cyan-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.75, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default SkillsSection;
