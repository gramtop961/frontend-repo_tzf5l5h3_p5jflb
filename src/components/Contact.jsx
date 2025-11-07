import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks — your message has been sent!');
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-neutral-200/60 dark:border-white/10 bg-gradient-to-br from-emerald-50 to-white dark:from-neutral-900 dark:to-neutral-900 p-6 sm:p-8"
        >
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Let’s build your story</h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Tell me about your project and I’ll get back within 24 hours.</p>

          <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required className="w-full rounded-lg border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950 px-4 py-3 text-sm" placeholder="Your name" />
              <input required type="email" className="w-full rounded-lg border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950 px-4 py-3 text-sm" placeholder="Email address" />
            </div>
            <input className="w-full rounded-lg border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950 px-4 py-3 text-sm" placeholder="Company (optional)" />
            <textarea required rows={5} className="w-full rounded-lg border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950 px-4 py-3 text-sm" placeholder="Project details" />
            <div className="flex items-center justify-between gap-4">
              <button type="submit" className="inline-flex items-center rounded-lg bg-emerald-600 px-5 py-3 text-white font-medium shadow-lg shadow-emerald-500/30 hover:bg-emerald-500 transition">Send message</button>
              {status && <span className="text-sm text-emerald-700">{status}</span>}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
