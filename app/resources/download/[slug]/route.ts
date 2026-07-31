import { NextRequest, NextResponse } from "next/server";

type Resource = { title: string; subtitle: string; sections: { heading: string; lines: string[] }[] };

const resources: Record<string, Resource> = {
  "7-day-confidence-challenge": {
    title: "7-Day Confidence Challenge",
    subtitle: "One practical speaking activity every day",
    sections: [
      { heading: "Day 1 - Introduce Yourself", lines: ["Speak for 60 seconds about your name, background, work or studies.", "Record your voice and listen once without judging yourself."] },
      { heading: "Day 2 - Describe Your Day", lines: ["Explain your morning, afternoon and evening using complete sentences."] },
      { heading: "Day 3 - Share an Opinion", lines: ["Choose a simple topic and explain what you think and why."] },
      { heading: "Day 4 - Ask Better Questions", lines: ["Practise five useful questions for work, college or daily life."] },
      { heading: "Day 5 - Tell a Short Story", lines: ["Describe a memorable event using beginning, middle and ending."] },
      { heading: "Day 6 - Interview Practice", lines: ["Answer: Tell me about yourself and Why should we hire you?"] },
      { heading: "Day 7 - Confidence Review", lines: ["Record a two-minute talk and compare it with Day 1.", "Write three improvements and one next goal."] },
    ],
  },
  "50-daily-use-sentences": {
    title: "50 Daily-Use English Sentences",
    subtitle: "Useful sentences for home, work and everyday conversations",
    sections: [
      { heading: "Starting Conversations", lines: ["How are you doing today?", "Could you please help me?", "What do you think about this?", "Let me explain it clearly.", "Can we discuss this for a minute?"] },
      { heading: "Workplace English", lines: ["I will complete it by today.", "Could you please confirm the deadline?", "Let us schedule a quick meeting.", "I need a little more information.", "Thank you for your feedback."] },
      { heading: "Clarifying", lines: ["Could you repeat that, please?", "Do you mean this option?", "Let me make sure I understood.", "Could you give me an example?", "I will check and get back to you."] },
      { heading: "Confidence Phrases", lines: ["I can explain my idea.", "I am improving every day.", "It is okay to make mistakes.", "I will speak slowly and clearly.", "I am ready to try again."] },
      { heading: "Practice", lines: Array.from({ length: 30 }, (_, i) => `${i + 21}. Write and practise one useful sentence of your own.`) },
    ],
  },
  "self-introduction-guide": {
    title: "Confident Self-Introduction Guide",
    subtitle: "A simple structure for interviews and professional meetings",
    sections: [
      { heading: "Use Present - Past - Future", lines: ["Present: Who you are now.", "Past: Relevant experience, education or achievements.", "Future: What opportunity you are looking for."] },
      { heading: "Sample Structure", lines: ["My name is...", "I currently work/study as...", "I have experience in...", "My strengths include...", "I am now looking for..."] },
      { heading: "Avoid", lines: ["Long family details", "Reading your resume word for word", "Speaking too fast", "Memorising every sentence", "Using unrelated information"] },
      { heading: "Practice Checklist", lines: ["Keep it between 60 and 90 seconds.", "Use simple professional language.", "Record yourself three times.", "Improve clarity, not accent.", "Finish with confidence."] },
    ],
  },
  "25-hr-interview-questions": {
    title: "25 HR Interview Questions Workbook",
    subtitle: "Prepare clear and confident answers",
    sections: [
      { heading: "Questions 1-10", lines: ["1. Tell me about yourself.", "2. Why do you want this role?", "3. What are your strengths?", "4. What is one weakness you are improving?", "5. Why should we hire you?", "6. Why are you leaving your current job?", "7. What motivates you?", "8. Describe a challenge you handled.", "9. How do you manage pressure?", "10. Where do you see yourself in five years?"] },
      { heading: "Questions 11-20", lines: ["11. Tell me about a conflict at work.", "12. Describe your leadership style.", "13. How do you prioritize tasks?", "14. What achievement are you proud of?", "15. How do you receive feedback?", "16. What do you know about our company?", "17. What salary are you expecting?", "18. Are you willing to relocate?", "19. How do you work in a team?", "20. Describe a mistake and what you learned."] },
      { heading: "Questions 21-25", lines: ["21. What does success mean to you?", "22. How do you learn new skills?", "23. What would your manager say about you?", "24. When can you join?", "25. Do you have any questions for us?"] },
      { heading: "Answer Method", lines: ["Use Situation - Action - Result for experience questions.", "Keep answers relevant and specific.", "Add one example wherever possible.", "Practise aloud, not only in writing."] },
    ],
  },
  "vocabulary-builder-tracker": {
    title: "Vocabulary Builder and Tracker",
    subtitle: "Learn useful words through context and repetition",
    sections: [
      { heading: "How to Learn a Word", lines: ["Write the word.", "Write a simple meaning.", "Create one sentence.", "Say it aloud three times.", "Use it in a real conversation."] },
      { heading: "Starter Words", lines: ["confident - feeling sure of yourself", "clarify - make something easier to understand", "contribute - give or add something useful", "reliable - able to be trusted", "adapt - change successfully for a new situation", "initiative - acting without waiting to be told", "collaborate - work together", "priority - something more important than other tasks", "improve - make something better", "opportunity - a useful chance"] },
      { heading: "Weekly Tracker", lines: Array.from({ length: 20 }, (_, i) => `${i + 1}. Word: __________ Meaning: __________ Sentence: ______________________________`) },
    ],
  },
};

function escapePdf(text: string) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrap(text: string, max = 78) {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    if ((line + " " + word).trim().length > max) { lines.push(line); line = word; }
    else line = (line + " " + word).trim();
  }
  if (line) lines.push(line);
  return lines;
}

function makePdf(resource: Resource) {
  const pageLines: string[][] = [[]];
  const push = (line = "") => {
    if (pageLines.at(-1)!.length >= 42) pageLines.push([]);
    pageLines.at(-1)!.push(line);
  };
  push("UNMUTE PRO"); push(resource.title); push(resource.subtitle); push("");
  for (const section of resource.sections) {
    push(section.heading);
    for (const item of section.lines) for (const line of wrap(item)) push(line);
    push("");
  }
  push("www.unmutepro.com | +91 93922 09162 | unmuteproofficial@gmail.com");

  const objects: string[] = [];
  const fontId = 3;
  const pagesId = 2;
  const pageIds: number[] = [];
  const contentIds: number[] = [];
  pageLines.forEach(() => { pageIds.push(objects.length + 4); contentIds.push(objects.length + 5); objects.push("", ""); });
  objects.unshift("<< /Type /Catalog /Pages 2 0 R >>", "", "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");

  pageLines.forEach((lines, index) => {
    const pageId = pageIds[index];
    const contentId = contentIds[index];
    let y = 790;
    const commands = ["BT", "/F1 12 Tf"];
    lines.forEach((line, i) => {
      const isLogo = i === 0;
      const isTitle = i === 1;
      const isHeading = resource.sections.some(s => s.heading === line);
      commands.push(`${isLogo ? "/F1 22 Tf" : isTitle ? "/F1 18 Tf" : isHeading ? "/F1 14 Tf" : "/F1 10 Tf"}`);
      commands.push(`1 0 0 1 55 ${y} Tm (${escapePdf(line)}) Tj`);
      y -= isLogo ? 32 : isTitle ? 28 : isHeading ? 22 : 16;
    });
    commands.push("ET");
    const stream = commands.join("\n");
    objects[pageId - 1] = `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ${fontId} 0 R >> >> /Contents ${contentId} 0 R >>`;
    objects[contentId - 1] = `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`;
  });
  objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map(id => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((obj, i) => { offsets.push(Buffer.byteLength(pdf)); pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`; });
  const xref = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach(offset => { pdf += `${String(offset).padStart(10, "0")} 00000 n \n`; });
  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return Buffer.from(pdf);
}

export async function GET(_request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = resources[slug];
  if (!resource) return NextResponse.json({ error: "Resource not found" }, { status: 404 });
  return new NextResponse(makePdf(resource), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="unmute-pro-${slug}.pdf"`,
      "Cache-Control": "public, max-age=86400",
    },
  });
}
