export type Lesson = {
  id: string;
  title: string;
  duration: number;
  summary: string;
  outcomes: string[];
  practice: string;
};

export type Program = {
  id: string;
  title: string;
  audience: string;
  description: string;
  mentor: string;
  level: "Beginner" | "All levels" | "Career ready";
  accent: string;
  lessons: Lesson[];
};

export type Resource = {
  id: string;
  title: string;
  kind: "Guide" | "Worksheet" | "Checklist";
  description: string;
  href: string;
};

export const programs: Program[] = [
  {
    id: "confidence-english",
    title: "Confidence English",
    audience: "Students & early professionals",
    description: "Replace hesitation with clear, natural English through guided real-time conversations.",
    mentor: "Manibabu",
    level: "Beginner",
    accent: "#00D97E",
    lessons: [
      { id: "find-your-voice", title: "Find your confident voice", duration: 12, summary: "Learn a simple reset that helps you start speaking before self-doubt takes over.", outcomes: ["Use the pause–plan–speak method", "Introduce yourself with calm body language", "Recover smoothly after a mistake"], practice: "Record a 45-second introduction. Focus on clarity and calm—not perfect grammar." },
      { id: "everyday-conversations", title: "Start everyday conversations", duration: 16, summary: "Use practical conversation starters for college, work and social situations.", outcomes: ["Open a conversation naturally", "Ask useful follow-up questions", "Keep a two-way conversation moving"], practice: "Start one three-minute conversation today using an open question." },
      { id: "speak-with-clarity", title: "Speak with clarity", duration: 18, summary: "Organise your thoughts into short, confident messages that are easy to follow.", outcomes: ["Structure an answer in three steps", "Remove filler words", "Close with a clear point"], practice: "Explain your current goal using Situation, Action and Next Step." },
    ],
  },
  {
    id: "interview-mastery",
    title: "Interview Mastery",
    audience: "Job seekers & admissions",
    description: "Prepare credible answers, handle admissions and HR interviews, and practise with mentor feedback.",
    mentor: "Corporate mentor team",
    level: "Career ready",
    accent: "#FFB547",
    lessons: [
      { id: "tell-me-about-yourself", title: "Tell me about yourself", duration: 14, summary: "Build a memorable introduction for admissions and job interviews.", outcomes: ["Choose relevant evidence", "Connect experience to your goal", "Deliver a 60-second answer"], practice: "Write and record your 60-second introduction twice." },
      { id: "star-stories", title: "Build strong STAR stories", duration: 20, summary: "Turn projects and experiences into evidence-led interview answers.", outcomes: ["Select high-value examples", "Use STAR without sounding scripted", "Show measurable impact"], practice: "Draft one STAR story about a difficult problem you solved." },
      { id: "mock-interview", title: "Your mock interview plan", duration: 15, summary: "Prepare for a realistic mentor-led mock interview and actionable feedback.", outcomes: ["Create a role-specific question bank", "Practise under time pressure", "Turn feedback into a plan"], practice: "Choose five likely questions and answer each in under two minutes." },
    ],
  },
  {
    id: "workplace-communication",
    title: "Workplace Communication",
    audience: "Working professionals",
    description: "Communicate ideas, updates and feedback with the confidence of an experienced professional.",
    mentor: "Experienced corporate mentors",
    level: "All levels",
    accent: "#6FA8FF",
    lessons: [
      { id: "clear-updates", title: "Give clear work updates", duration: 13, summary: "Share progress, risks and next steps without over-explaining.", outcomes: ["Lead with the headline", "Flag blockers constructively", "Make ownership clear"], practice: "Turn your latest project update into three concise points." },
      { id: "speak-in-meetings", title: "Speak up in meetings", duration: 17, summary: "Enter a conversation, contribute a point and disagree respectfully.", outcomes: ["Join at the right moment", "Frame a clear contribution", "Disagree without creating friction"], practice: "Prepare one question and one point before your next meeting." },
      { id: "present-with-impact", title: "Present with impact", duration: 22, summary: "Build a short presentation that keeps attention and earns action.", outcomes: ["Create a strong opening", "Use a simple narrative", "Finish with a clear ask"], practice: "Deliver a two-minute proposal with one clear call to action." },
    ],
  },
];

export const resources: Resource[] = [
  { id: "interview-questions", title: "25 HR interview questions", kind: "Guide", description: "Prepare confident, authentic answers to the questions recruiters ask most.", href: "/resources/download/top-25-hr-interview-questions" },
  { id: "self-introduction", title: "Self-introduction builder", kind: "Worksheet", description: "A simple framework for admissions, interviews and first meetings.", href: "/resources/download/self-introduction-template" },
  { id: "daily-confidence", title: "7-day speaking challenge", kind: "Checklist", description: "Small daily conversations that turn English practice into a habit.", href: "/resources/download/7-day-english-confidence-challenge" },
];

export const allLessons = programs.flatMap((program) =>
  program.lessons.map((lesson) => ({ ...lesson, programId: program.id, programTitle: program.title }))
);
