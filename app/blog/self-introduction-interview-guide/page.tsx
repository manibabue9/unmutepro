import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "How to Introduce Yourself Confidently in an Interview",
  description: "Learn a simple self-introduction structure for interviews with examples, common mistakes and practical speaking tips.",
  alternates: { canonical: "/blog/self-introduction-interview-guide" },
};

export default function Page() {
  return <BlogArticle
    title="How to Introduce Yourself Confidently in an Interview"
    description="A strong self-introduction creates the first impression. Learn a clear structure that sounds professional, natural and relevant to the role."
    category="Interview Preparation"
    published="August 1, 2026"
    readingTime="8 min read"
    takeaway="Your introduction should be a short professional story: who you are, what you have done, what you do well and why this opportunity fits your next step."
    sections={[
      { heading: "Why this answer matters", paragraphs: ["Tell me about yourself is often the first important interview question. A clear answer helps the interviewer understand your background and gives you confidence for the rest of the conversation.", "The best answer is not your complete life story. It is a focused introduction connected to the job." ] },
      { heading: "Use the Present–Past–Future structure", numbered: ["Present: State your current role, education or professional identity.", "Past: Summarise relevant experience, responsibilities and achievements.", "Future: Explain what you are looking for and why this role interests you."] },
      { heading: "Example for a fresher", paragraphs: ["Good morning, and thank you for the opportunity. My name is Rahul. I recently completed my degree in commerce, where I developed a strong interest in finance and data analysis. During my academic projects, I worked with Excel and presented findings to my team. I am a quick learner, organised and comfortable working with others. I am now looking for an entry-level opportunity where I can apply my skills, learn from experienced professionals and contribute to the team."] },
      { heading: "Example for an experienced professional", paragraphs: ["Thank you for the opportunity. I am a financial-services professional with eight years of experience in reporting, analysis and stakeholder communication. In my current role, I manage monthly reporting, review data quality and support process improvements across teams. One of my strengths is translating complex information into clear business updates. I am now looking for a role with broader responsibility where I can contribute my analytical experience and continue developing as a team leader."] },
      { heading: "What to include", bullets: ["Current role or qualification", "Relevant years of experience", "Two or three job-related strengths", "One meaningful achievement or responsibility", "A clear reason for your next career move"] },
      { heading: "What to avoid", bullets: ["Starting with unnecessary family details", "Repeating every line of your resume", "Speaking for more than two minutes", "Using memorised language that sounds unnatural", "Mentioning weaknesses or negative experiences too early"] },
      { heading: "How to practise", numbered: ["Write a 60–90 second version.", "Underline the most important keywords instead of memorising every sentence.", "Record yourself and remove repeated words.", "Practise with different opening questions.", "Ask someone to give feedback on clarity and relevance."] },
      { heading: "Delivery tips", bullets: ["Begin with a calm smile", "Speak slightly slower than normal", "Use short pauses between sections", "Maintain natural eye contact", "Finish confidently instead of fading out"] },
      { heading: "Final thought", paragraphs: ["Your introduction does not need sophisticated vocabulary. It needs structure, relevance and confident delivery. Practise until the key points feel natural, then adapt them to each opportunity."] }
    ]}
  />;
}
