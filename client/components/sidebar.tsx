"use client";

import { useState } from "react";
import { tutorialSidebarDS, tutorialSidebarA } from "@/lib/types";
import { Minus, MoveRight, PanelRightClose, PanelRightOpen } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
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
          className="text-xl p-2 rounded"
          onClick={toggleSidebar}
        >
          {isOpen ? <PanelRightOpen size={24} /> : <PanelRightClose size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed top-20 left-2 z-10 w-[95%] md:w-1/3 lg:w-1/4 xl:w-1/5 h-[77%] p-4 border rounded-lg shadow-md overflow-auto bg-white dark:bg-[#030712] ${isOpen ? "block" : "hidden"} md:block`}>
        <h1 className="text-xl font-bold mb-4 text-center underline underline-offset-4">Contents</h1>

        <div>
          <h2 className="text-lg font-semibold mb-2">Data Structure</h2>
          <ul className="space-y-2 dark:text-gray-300">
            {tutorialSidebarDS.map(topic => (
              <li key={topic.id} className="mb-2">
                <Link href={`tutorial/${topic.slug}`} className="flex gap-2 items-center hover:underline">
                  <MoveRight size={12} />
                  {topic.heading}
                </Link>
                {topic.subtopics && topic.subtopics.length > 0 && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {topic.subtopics.map(subtopic => (
                      <li key={subtopic.id}>
                        <Link
                          href={`tutorial/${topic.slug}/${subtopic.slug}`}
                          className="flex gap-2 items-center hover:underline text-sm"
                        >
                          <Minus size={12} />
                          {subtopic.heading}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7">
          <h2 className="text-lg font-semibold mb-2">Algorithms</h2>
          <ul className="space-y-2 dark:text-gray-300">
            {tutorialSidebarA.map(topic => (
              <li key={topic.id} className="mb-2">
                <Link href={`tutorial/${topic.slug}`} className="flex gap-2 items-center hover:underline">
                  <MoveRight size={12} />
                  {topic.heading}
                </Link>
                {topic.subtopics && topic.subtopics.length > 0 && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {topic.subtopics.map(subtopic => (
                      <li key={subtopic.id}>
                        <Link
                          href={`tutorial/${topic.slug}/${subtopic.slug}`}
                          className="flex gap-2 items-center hover:underline text-sm"
                        >
                          <Minus size={12} />
                          {subtopic.heading}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

