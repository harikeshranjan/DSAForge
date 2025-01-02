"use client";

import { topics } from "@/lib/dsa-topics-list";
import * as motion from "motion/react-client";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 25
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    }
  })
}

export default function HashTags() {
  return (
    <section className="w-full flex flex-wrap gap-4 justify-center items-center">
      {topics.map((topic, index) => (
        <motion.div
          key={topic.id}
          className={`py-1 px-3 border text-sm rounded-full cursor-pointer transition-all ${topic.color}`}
          variants={fadeInAnimationVariants}
          initial='initial'
          animate='animate'
          viewport={{ once: true }}
          custom={index}
        >
          <span className="mr-2">#</span>
          {topic.topic}
        </motion.div>
      ))}
    </section>
  );
}

[
  'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30', 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-900/30', 'text-violet-600 bg-violet-50 dark:text-violet-400 dark:bg-violet-900/30', 'text-teal-600 bg-teal-50 dark:text-teal-400 dark:bg-teal-900/30', 'text-pink-600 bg-pink-50 dark:text-pink-400 dark:bg-pink-900/30', 'text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-900/30', 'text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-900/30', 'text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-900/30', 'text-cyan-600 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-900/30', 'text-sky-600 bg-sky-50 dark:text-sky-400 dark:bg-sky-900/30', 'text-lime-600 bg-lime-50 dark:text-lime-400 dark:bg-lime-900/30', 'text-fuchsia-600 bg-fuchsia-50 dark:text-fuchsia-400 dark:bg-fuchsia-900/30', 'text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/30', 'text-slate-600 bg-slate-50 dark:text-slate-400 dark:bg-slate-900/30', 'text-rose-600 bg-rose-50 dark:text-rose-400 dark:bg-rose-900/30', 'text-blue-500 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30', 'text-emerald-500 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-900/30', 'text-violet-500 bg-violet-50 dark:text-violet-300 dark:bg-violet-900/30', 'text-teal-500 bg-teal-50 dark:text-teal-300 dark:bg-teal-900/30', 'text-pink-500 bg-pink-50 dark:text-pink-300 dark:bg-pink-900/30', 'text-indigo-500 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-900/30', 'text-amber-500 bg-amber-50 dark:text-amber-300 dark:bg-amber-900/30', 'text-purple-500 bg-purple-50 dark:text-purple-300 dark:bg-purple-900/30', 'text-cyan-500 bg-cyan-50 dark:text-cyan-300 dark:bg-cyan-900/30', 'text-sky-500 bg-sky-50 dark:text-sky-300 dark:bg-sky-900/30', 'text-lime-500 bg-lime-50 dark:text-lime-300 dark:bg-lime-900/30', 'text-fuchsia-500 bg-fuchsia-50 dark:text-fuchsia-300 dark:bg-fuchsia-900/30', 'text-orange-500 bg-orange-50 dark:text-orange-300 dark:bg-orange-900/30', 'text-slate-500 bg-slate-50 dark:text-slate-300 dark:bg-slate-900/30', 'text-rose-500 bg-rose-50 dark:text-rose-300 dark:bg-rose-900/30'
];
