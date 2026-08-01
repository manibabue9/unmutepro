import type { Metadata } from "next";
import AssessmentClient from "./AssessmentClient";

export const metadata: Metadata = { title: "Free English Level Check", description: "Take Unmute Pro's free 10-minute English level check and get an estimated CEFR level with a personalised learning recommendation." };

export default function AssessmentPage() { return <AssessmentClient />; }

