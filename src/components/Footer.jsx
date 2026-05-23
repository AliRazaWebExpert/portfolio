import Container from './Container';

function Footer({ footer, navItems, socials }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="border-t border-slate-200/70 py-8 dark:border-white/10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400">{footer.text}</p>

        <div className="flex flex-wrap gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="text-sm text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white/70 text-slate-600 transition hover:border-brand-300/50 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
                aria-label={social.label}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
