import { FileSpreadsheet, Home, Pencil, SquarePen } from "lucide-react";
import { desc } from "motion/react-client";

export const header = [
  {
    id: "aae0b858-1b0b-4d5c-b984-30bbbd9139f8",
    title: "Home",
    path: "/",
    slug: "home",
    icon: Home
  },
  {
    id: "c36e8ce3-0f14-4868-b2e1-4f87980e5085",
    title: "Tutorial",
    path: "/tutorial",
    slug: "tutorial",
    icon: Pencil
  },
  {
    id: "dc3f88a5-10b3-43ae-a466-de995f66904a",
    title: "Interview Questions",
    path: "/interview-questions",
    slug: "interview-questions",
    icon: FileSpreadsheet
  },
  {
    id: "9381431c-b257-4a98-a526-12feb2493ca8",
    title: "Practice Questions",
    path: "/practice-questions",
    slug: "practice-questions",
    icon: SquarePen
  }
] as const;

export const features = [
  {
    id: 1,
    title: "Tutorial",
    desc: "Dive deep into DSA with comprehensive tutorials tailored for every level of learner.",
    icon: Pencil,
  },
  {
    id: 2,
    title: "Interview Questions",
    desc: "Prepare for your next coding interview with real-world problem sets and solutions.",
    icon: FileSpreadsheet,
  },
  {
    id: 3,
    title: "Practice Questions",
    desc: "Sharpen your skills with a variety of practice questions across different topics.",
    icon: SquarePen,
  }
] as const;
