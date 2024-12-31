"use client";

import { useState } from "react";
import { tutorialSidebarDS, tutorialSidebarA } from "@/lib/types";
import { Minus, MoveRight, PanelRightClose, X } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Open button, only visible on phone view when the sidebar is closed */}
      {!isOpen && (
        <div className="fixed top-20 left-2 z-10 md:hidden">
          <button
            type="button"
            className="text-xl bg-gray-200 dark:bg-gray-900 p-2 rounded"
            onClick={toggleSidebar}
          >
            <PanelRightClose />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <aside className={`fixed top-24 left-2 z-10 w-[95%] md:w-1/3 lg:w-1/4 xl:w-1/5 h-[80%] p-4 border rounded-lg shadow-md overflow-auto bg-white dark:bg-[#030712] ${isOpen ? "block" : "hidden"} md:block`}>
        <h1 className="text-xl font-bold mb-4 text-center underline underline-offset-4">Contents</h1>

        {/* Close button, only visible on phone view */}
        <div className="absolute top-4 right-4 block md:hidden">
          <button
            type="button"
            className="text-xl hover:bg-gray-200 hover:dark:bg-gray-800 p-1 rounded-full"
            onClick={toggleSidebar}
          >
            <X className="font-bold" />
          </button>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Data Structure</h2>
          <ul className="space-y-2 dark:text-gray-300">
            {tutorialSidebarDS.map(topic => (
              <li key={topic.id} className="mb-2">
                <Link href={`${topic.slug}`} className="flex gap-2 items-center hover:underline">
                  <MoveRight size={12} />
                  {topic.heading}
                </Link>
                {topic.subtopics && topic.subtopics.length > 0 && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {topic.subtopics.map(subtopic => (
                      <li key={subtopic.id}>
                        <Link
                          href={`${topic.slug}/${subtopic.slug}`}
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
                <Link href={`${topic.slug}`} className="flex gap-2 items-center hover:underline">
                  <MoveRight size={12} />
                  {topic.heading}
                </Link>
                {topic.subtopics && topic.subtopics.length > 0 && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {topic.subtopics.map(subtopic => (
                      <li key={subtopic.id}>
                        <Link
                          href={`${topic.slug}/${subtopic.slug}`}
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

