import Sidebar from "@/components/sidebar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "DSAForge | Tutorial",
  description: "Master DSA with expert tutorials, interview prep, and key questions for coding success.",
};

export default function TutorialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="mt-28 px-5" suppressHydrationWarning>
      <Sidebar />
      {children}
    </section>
  );
}
