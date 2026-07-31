import type { Metadata } from "next";
import LearnerApp from "@/components/learner/LearnerApp";

export const metadata: Metadata = {
  title: "Learner App",
  description: "Build speaking confidence with practical Unmute Pro programs, resources and progress tracking.",
  robots: { index: false, follow: false },
};

export default function AppPage() { return <LearnerApp />; }
