import InterviewPanel from "@/components/interview-panel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSAForge | Interview Questions",
  description: "Master DSA with expert tutorials, interview prep, and key questions for coding success.",
};

export default function InterviewQuestionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="mt-28 px-5" suppressHydrationWarning>
      <InterviewPanel />
      {children}
    </section>
  );
}
