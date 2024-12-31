"use client";

import { features } from "@/lib/types";
import * as motion from "motion/react-client";
import { useRef } from "react";

export default function Features() {
  const featuresRef = useRef<HTMLDivElement>(null);
  return (
    <section className="my-10 px-4">
      <h1 className="text-center text-3xl font-medium mb-8">What you get?</h1>

      <div ref={featuresRef} className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          features.map(feature => (
            <motion.div
              key={feature.id}
              className="flex flex-col items-center p-3 md:p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
              initial={{ y: (feature.id % 2 === 0) ? 100 : -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: .5 }}
              viewport={{ once: true }}
            >
              <feature.icon className="w-16 h-16 text-violet-600 dark:text-violet-400" />
              <h2 className="mt-4 text-xl font-semibold text-center">{feature.title}</h2>
              <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                {feature.desc}
              </p>
            </motion.div>
          ))
        }
      </div>
    </section>
  );
}

