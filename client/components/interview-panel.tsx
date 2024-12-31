"use client";

import { useState } from "react";
import { PanelRightClose, PanelRightOpen } from "lucide-react";
import Link from "next/link";
import { interviewQuestionsSidebar } from "@/lib/types";

export default function InterviewPanel() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle button, visible on phone view */}
      <div className="fixed top-3.5 left-2 z-[999] md:hidden">
        <button
          type="button"
          className="text-xl p-2 rounded focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          onClick={toggleSidebar}
        >
          {isOpen ? <PanelRightOpen size={24} /> : <PanelRightClose size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed top-20 left-2 z-10 w-[95%] md:w-1/3 lg:w-1/4 xl:w-1/5 h-[77%] p-4 border rounded-lg shadow-md overflow-auto bg-white dark:bg-[#030712] transition-all duration-300 ${isOpen ? "block" : "hidden"} md:block`}>
        <h1 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200 underline underline-offset-4">
          Contents
        </h1>

        <ul>
          {interviewQuestionsSidebar.map(topic => (
            <li key={topic.id}>
              <Link href={`interview-questions/${topic.slug}`} className="flex py-2 px-3 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
                <span>{topic.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

