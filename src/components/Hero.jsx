import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-neutral-950 dark:via-neutral-950/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center mb-4 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm">
            Designer • Creator • Full‑Stack Developer
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            Dimas Marimo
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
            I craft immersive, story‑driven digital experiences that blend design, code, and playful interaction. Let’s build something memorable.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="inline-flex items-center rounded-lg bg-emerald-600 px-5 py-3 text-white font-medium shadow-lg shadow-emerald-500/30 hover:bg-emerald-500 transition">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-emerald-200 bg-white px-5 py-3 text-emerald-700 hover:bg-emerald-50 font-medium">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
