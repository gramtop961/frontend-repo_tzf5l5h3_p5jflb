import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Narrative Commerce',
    tag: 'Story-led eCommerce',
    desc: 'A cinematic shopping flow that reveals product stories as you scroll.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Neon Folio',
    tag: 'Portfolio Engine',
    desc: 'A modular, CMS-free portfolio tuned for performance and motion.',
    color: 'from-green-600 to-emerald-500',
  },
  {
    title: 'Playground Labs',
    tag: 'Experimental UI',
    desc: 'A collection of delightful interactions exploring physics & depth.',
    color: 'from-teal-500 to-green-500',
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-24 sm:py-28 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Selected Work</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">A few projects that blend thoughtful design, modern engineering, and a little bit of wonder.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-lg border border-emerald-200 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50">Start a project</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 dark:border-white/10 bg-gradient-to-br shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="relative p-6">
                <span className="inline-flex mb-3 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs font-medium">{p.tag}</span>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.desc}</p>
                <div className="mt-6 inline-flex items-center text-emerald-700 font-medium">
                  View case study →
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
