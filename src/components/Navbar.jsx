import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 dark:bg-neutral-900/60 border-b border-white/20 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 shadow-lg shadow-green-500/30" />
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-white">Dimas <span className="text-emerald-600">Marimo</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-700 hover:text-emerald-600 dark:text-neutral-200 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="hidden md:flex items-center gap-3">
              <a href="mailto:hello@dimas.design" aria-label="Email" className="p-2 rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-600">
                <Mail size={18} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-600">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-600">
                <Linkedin size={18} />
              </a>
            </div>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-emerald-50 dark:text-neutral-200 dark:hover:bg-emerald-900/20"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/20 dark:border-white/10 py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-neutral-700 hover:text-emerald-600 dark:text-neutral-200"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a href="mailto:hello@dimas.design" aria-label="Email" className="p-2 rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-600">
                  <Mail size={18} />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-600">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-600">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
