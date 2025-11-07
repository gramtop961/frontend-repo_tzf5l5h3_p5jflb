import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28 bg-gradient-to-b from-white to-emerald-50/40 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start"
        >
          <div className="md:col-span-2">
            <div className="h-56 w-56 md:h-64 md:w-64 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-xl shadow-emerald-500/30" />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">About Dimas</h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
              I’m a designer, creator, and full‑stack developer known for innovative storytelling. My work sits at the intersection of narrative and interaction—crafting interfaces that feel alive and purposeful.
            </p>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Over the years, I’ve partnered with startups and brands to build experiences that convert and delight. I specialize in design systems, motion, and performant web apps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Brand Systems','Product Design','Creative Dev','React / Next.js','FastAPI','Motion'].map((chip) => (
                <span key={chip} className="inline-flex items-center rounded-full bg-white dark:bg-neutral-900 border border-emerald-200/60 px-3 py-1 text-xs font-medium text-emerald-700">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
