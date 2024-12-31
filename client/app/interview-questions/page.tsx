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

export default function InterviewQuestions() {
  const interviewQuestions = [
    {
      name: "Array",
      description: "Common interview questions related to arrays.",
      link: "/interview-questions/array",
    },
    {
      name: "Linked List",
      description: "Frequently asked questions about linked lists.",
      link: "/interview-questions/linked-list",
    },
    {
      name: "Stack",
      description: "Interview questions on stack operations and applications.",
      link: "/interview-questions/stack",
    },
    {
      name: "Queue",
      description: "Important questions on queue and its variations.",
      link: "/interview-questions/queue",
    },
    {
      name: "Tree",
      description: "Questions covering various tree data structures.",
      link: "/interview-questions/tree",
    },
    {
      name: "Graph",
      description: "Graph-related interview questions and problem-solving.",
      link: "/interview-questions/graph",
    },
  ];

  return (
    <section className="md:ml-[20rem] w-full max-w-[65rem] mx-auto px-3 mb-10">
      <h1 className="text-3xl font-bold text-center mb-8">Interview Questions</h1>

      <p className="text-lg mb-8">
        Preparing for coding interviews can be daunting, but practicing with common interview questions can help you gain confidence and improve your problem-solving skills. Here, we've compiled a list of essential interview questions for various data structures to aid your preparation.
      </p>

      {/* Important Interview Questions Container */}
      <div className="py-4  mb-8">
        <h2 className="text-xl font-semibold mb-4">Important Interview Questions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {interviewQuestions.map((iq, index) => (
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
                <Link href={iq.link}><h3 className="text-lg font-bold mb-2">{iq.name}</h3></Link>
                <MoveRight className="group-hover:translate-x-1 transition-all duration-150" />
              </div>
              <p className="text-sm mb-4 text-gray-500 dark:text-gray-300">{iq.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tips Container */}
      <div className="bg-gray-100 dark:bg-gray-900 py-5 px-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Tips for Interview Preparation</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Understand the problem: Make sure you fully understand the problem statement before attempting to solve it.</li>
          <li>Think out loud: During interviews, explain your thought process and reasoning as you work through problems.</li>
          <li>Practice coding by hand: This can help you improve your coding skills and simulate the interview environment.</li>
          <li>Learn multiple solutions: Understand different ways to solve a problem and be prepared to discuss their trade-offs.</li>
          <li>Optimize your solutions: Always think about ways to improve your solution's time and space complexity.</li>
          <li>Review data structures and algorithms: Make sure you have a solid grasp of the fundamentals.</li>
          <li>Mock interviews: Practice with friends or use online platforms to simulate real interview scenarios.</li>
          <li>Stay calm: Interviews can be stressful, but staying calm and focused can help you perform better.</li>
        </ul>
      </div>
    </section>
  );
}

