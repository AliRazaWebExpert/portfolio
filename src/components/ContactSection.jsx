import { motion } from 'framer-motion';
import { HiPaperAirplane } from 'react-icons/hi2';

const formEndpoint = ['https://api', 'web3forms', 'com/submit'].join('.');

function ContactSection({ contact }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-950 p-6 text-white shadow-glow dark:border-white/10 sm:p-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_90%_10%,rgba(40,95,255,0.35),transparent_30%)]" />
        <div className="relative">
          <p className="text-sm font-semibold uppercase leading-6 tracking-[0.16em] text-cyan-200 sm:tracking-[0.28em]">Available for selected builds</p>
          <h2 className="mt-5 break-words font-display text-3xl font-semibold leading-tight sm:text-5xl">
            {contact.heading}
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300">{contact.description}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {contact.highlights.map((highlight) => (
              <div key={highlight.value} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="font-display text-2xl font-semibold">{highlight.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-300">{highlight.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-7 text-slate-300">{contact.closing}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="rounded-[2rem] border border-slate-200/70 bg-white/75 p-5 shadow-glow backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-7"
      >
        <form action={formEndpoint} method="POST" className="grid gap-4">
          <input type="hidden" name="access_key" value={contact.web3FormsAccessKey} />
          <input type="hidden" name="subject" value={contact.formSubject} />
          <input type="hidden" name="from_name" value={contact.formName} />

          <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Name
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              required
              autoComplete="name"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-400/15 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Email
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              required
              autoComplete="email"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-400/15 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Project type
            <select
              name="project_type"
              required
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-400/15 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
            >
              <option value="">Select one</option>
              <option>Shopify</option>
              <option>WordPress</option>
              <option>Squarespace</option>
              <option>Landing Page</option>
              <option>Business Website</option>
              <option>Hard/Custom Coded Website</option>
              <option>Maintenance or fixes</option>
              <option>SEO/Analytics</option>
            </select>
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Timeline
            <input
              type="text"
              name="timeline"
              placeholder="3-4 Weeks"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-400/15 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Budget
            <input
              type="text"
              name="budget"
              placeholder="£"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-400/15 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Message
            <textarea
              name="message"
              placeholder="A little brief about the project"
              required
              rows="5"
              className="resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-400/15 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
            />
          </label>

          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-400"
          >
            <HiPaperAirplane className="h-5 w-5" />
            Get A Quote
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default ContactSection;
