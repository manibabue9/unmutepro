import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "Top 25 HR Interview Questions with Simple Answers",
  description: "Prepare for common HR interview questions with simple answer frameworks, practical examples and confidence tips from Unmute Pro.",
  alternates: { canonical: "/blog/top-25-hr-interview-questions" },
};

export default function Page() {
  return <BlogArticle
    title="Top 25 HR Interview Questions with Simple Answers"
    description="Use these practical answer frameworks to prepare for common HR questions without memorising unnatural scripts."
    category="Interview Preparation"
    published="August 1, 2026"
    readingTime="10 min read"
    takeaway="A strong interview answer is clear, relevant and supported by a simple example. Prepare the structure, but speak naturally."
    sections={[
      { heading: "How to use this guide", paragraphs: ["Do not memorise every word. Understand the purpose of each question, prepare two or three key points and practise speaking them aloud.", "Keep most answers between 45 and 90 seconds unless the interviewer asks for more detail."] },
      { heading: "Questions 1–5: Your introduction", numbered: ["Tell me about yourself — Present your experience, strongest skills and current career goal.", "Walk me through your resume — Explain your career journey in chronological order and connect each move logically.", "Why are you looking for a change? — Focus on growth, responsibility and learning rather than complaints.", "Why do you want to join our company? — Mention the role, company strengths and how your experience can contribute.", "What do you know about us? — Refer to the company's work, customers, values or recent initiatives."] },
      { heading: "Questions 6–10: Strengths and development", numbered: ["What are your strengths? — Choose two strengths relevant to the role and give evidence.", "What is your weakness? — Share a genuine but manageable area and explain how you are improving it.", "What motivates you? — Connect motivation to meaningful work, learning, customers or team results.", "How do you handle pressure? — Explain how you prioritise, communicate and stay organised.", "How do you receive feedback? — Show openness, reflection and action."] },
      { heading: "Questions 11–15: Behaviour and teamwork", numbered: ["Describe a difficult situation you handled.", "Tell me about a conflict with a colleague.", "Give an example of a mistake and what you learned.", "How do you work in a team?", "Describe a time you took initiative."], paragraphs: ["For these questions, use a simple Situation–Action–Result structure. Explain the context briefly, focus on what you did and finish with the outcome or learning."] },
      { heading: "Questions 16–20: Performance and career", numbered: ["What is your biggest achievement?", "Where do you see yourself in five years?", "Why should we hire you?", "How do you prioritise multiple tasks?", "What are your salary expectations?"] },
      { heading: "Questions 21–25: Closing questions", numbered: ["Are you willing to relocate or travel?", "What is your notice period?", "Do you have any employment gaps?", "Why did you leave your previous role?", "Do you have any questions for us?"] },
      { heading: "A simple answer formula", bullets: ["Start with a direct answer", "Add one relevant example", "Explain the result or learning", "Connect it back to the role"] },
      { heading: "Final interview confidence tips", bullets: ["Practise aloud, not only in your mind", "Keep answers structured and concise", "Pause before difficult questions", "Maintain natural eye contact", "Prepare two thoughtful questions for the interviewer"] }
    ]}
  />;
}
