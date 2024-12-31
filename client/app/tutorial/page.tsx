"use client";

import { MoveRight } from "lucide-react";
import Link from "next/link";
import * as motion from 'motion/react-client'

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    }
  })
}

export default function Tutorial() {
  const dataStructures = [
    {
      name: "Array",
      description: "A collection of elements identified by index or key.",
      link: "/tutorial/array",
    },
    {
      name: "Linked List",
      description: "A linear collection of elements, where each element points to the next.",
      link: "/tutorial/linked-list",
    },
    {
      name: "Stack",
      description: "A collection of elements with Last In First Out (LIFO) access.",
      link: "/tutorial/stack",
    },
    {
      name: "Queue",
      description: "A collection of elements with First In First Out (FIFO) access.",
      link: "/tutorial/queue",
    },
    {
      name: "Tree",
      description: "A hierarchical structure of nodes, with a root node and subtrees.",
      link: "/tutorial/tree",
    },
    {
      name: "Graph",
      description: "A collection of nodes connected by edges, used to represent relationships.",
      link: "/tutorial/graph",
    },
  ];

  return (
    <section className="md:ml-[20rem] w-full max-w-[65rem] mx-auto px-3 mb-10">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to the DSA Tutorial</h1>

      <p className="text-lg mb-8">
        Welcome to our comprehensive tutorial on Data Structures and Algorithms (DSA). This website is designed to help you master the fundamental concepts of DSA, which are crucial for coding interviews, competitive programming, and your overall understanding of computer science. Our tutorial is divided into two main sections:
        <br /><br />
        <strong>Data Structures:</strong> Learn about various data structures such as arrays, linked lists, stacks, queues, trees, graphs, and more. Understand their implementations, advantages, and use cases.
        <br /><br />
        <strong>Algorithms:</strong> Dive into the world of algorithms, covering sorting, searching, dynamic programming, greedy algorithms, and many other essential techniques. Learn how to approach problem-solving with these algorithms effectively.
      </p>

      {/* Important Data Structures Container */}
      <div className="py-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">Easy but important Data Structures</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataStructures.map((ds, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-900 py-3.5 px-5 rounded shadow hover:shadow-lg hover:scale-105 transition-all duration-75 cursor-pointer group"
              initial='initial'
              animate='animate'
              viewport={{ once: true }}
              custom={index}
              variants={fadeInAnimationVariant}
            >
              <div className="flex gap-3">
                <Link href={ds.link}><h3 className="text-lg font-bold mb-2">{ds.name}</h3></Link>
                <MoveRight className="group-hover:translate-x-1 transition-all duration-150" />
              </div>
              <p className="text-sm mb-4 text-gray-800 dark:text-gray-300">{ds.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tips Container */}
      <div className="bg-gray-100 dark:bg-gray-900 py-5 px-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Tips to Learn and Master DSA</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Start with the basics: Make sure you have a solid understanding of fundamental concepts before moving on to more advanced topics.</li>
          <li>Practice regularly: Consistent practice is key to mastering DSA. Solve problems daily to reinforce your understanding.</li>
          <li>Understand the why: Don’t just memorize algorithms and data structures. Understand why they work and how to apply them in different scenarios.</li>
          <li>Use visual aids: Utilize diagrams and visualization tools to grasp complex concepts better.</li>
          <li>Learn from multiple sources: Don’t rely on a single tutorial or book. Explore different resources to get diverse perspectives.</li>
          <li>Join a community: Participate in coding communities and forums to ask questions, share knowledge, and learn from others.</li>
          <li>Work on projects: Apply your DSA knowledge to real-world projects to see how these concepts are used in practice.</li>
          <li>Review and revise: Regularly review what you’ve learned and revise challenging topics to ensure long-term retention.</li>
        </ul>
      </div>
    </section>
  );
}

