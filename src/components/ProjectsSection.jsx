import { motion } from 'framer-motion';
import { HiArrowTopRightOnSquare, HiCodeBracket } from 'react-icons/hi2';

function ProjectsSection({ projects }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/65 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-br from-slate-950 via-brand-900 to-cyan-700 p-3 dark:border-white/10 sm:p-5">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18),transparent_28%,rgba(255,255,255,0.12)_58%,transparent)] opacity-70" />
            <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] border border-white/20 bg-slate-950 shadow-2xl shadow-slate-950/30">
              <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-white/10 px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <span className="ml-2 h-3 flex-1 rounded-full bg-white/15" />
              </div>

              <div className="h-[calc(100%-2.25rem)] overflow-hidden bg-slate-100 dark:bg-slate-900">
                <div className="min-h-[190%] p-3 transition-transform duration-[4500ms] ease-linear group-hover:-translate-y-[47%] sm:p-4">
                  <div className={`rounded-2xl bg-gradient-to-br ${project.previewGradient} p-4 text-white sm:p-5`}>
                    <p className="text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-white/70 sm:tracking-[0.24em]">{project.category}</p>
                    <h4 className="mt-3 break-words font-display text-xl font-semibold leading-tight sm:text-2xl">{project.previewTitle}</h4>
                    <div className="mt-5 grid grid-cols-3 gap-1.5 sm:gap-2">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="rounded-xl bg-white/15 p-2 backdrop-blur sm:p-3">
                          <p className="text-base font-bold sm:text-lg">{metric.value}</p>
                          <p className="mt-1 text-[0.65rem] uppercase tracking-wide text-white/70">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3">
                    {project.previewBlocks.map((block) => (
                      <div key={block.title} className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-slate-950 sm:p-4">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                          <p className="font-semibold leading-5 text-slate-900 dark:text-white">{block.title}</p>
                          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">
                            {block.status}
                          </span>
                        </div>
                        <div className="mt-4 space-y-2">
                          {block.rows.map((row) => (
                            <span key={row} className="block h-2 rounded-full bg-slate-200 dark:bg-white/10" style={{ width: row }} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-300/50 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                >
                  <HiCodeBracket className="h-4 w-4" />
                  Code
                </a>
              ) : null}
              {project.demo ? (
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-400"
                >
                  <HiArrowTopRightOnSquare className="h-4 w-4" />
                  {project.ctaLabel || 'Live Demo'}
                </a>
              ) : null}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default ProjectsSection;
