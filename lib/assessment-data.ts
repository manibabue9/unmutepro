export type AssessmentQuestion = { id: string; prompt: string; options: string[]; answer: number };

export const assessmentQuestions: AssessmentQuestion[] = [
  { id: "q1", prompt: "I ___ a student.", options: ["am", "is", "are", "be"], answer: 0 },
  { id: "q2", prompt: "She ___ coffee every morning.", options: ["drink", "drinks", "drinking", "drank"], answer: 1 },
  { id: "q3", prompt: "Choose the opposite of â€˜difficultâ€™.", options: ["heavy", "easy", "slow", "strong"], answer: 1 },
  { id: "q4", prompt: "We ___ to the market yesterday.", options: ["go", "gone", "went", "going"], answer: 2 },
  { id: "q5", prompt: "There aren't ___ chairs in this room.", options: ["some", "much", "any", "a"], answer: 2 },
  { id: "q6", prompt: "Which sentence is correct?", options: ["He can to swim.", "He cans swim.", "He can swim.", "He can swimming."], answer: 2 },
  { id: "q7", prompt: "I've lived here ___ 2020.", options: ["for", "since", "from", "during"], answer: 1 },
  { id: "q8", prompt: "If it rains, we ___ at home.", options: ["stay", "stayed", "will stay", "would stay"], answer: 2 },
  { id: "q9", prompt: "Ravi missed the bus, so he was late. Why was Ravi late?", options: ["He woke early.", "He missed the bus.", "The office closed.", "He took a taxi."], answer: 1 },
  { id: "q10", prompt: "Could you tell me where the station ___?", options: ["is", "was it", "it is", "does"], answer: 0 },
  { id: "q11", prompt: "The meeting ___ by the manager tomorrow.", options: ["leads", "will lead", "will be led", "is leading"], answer: 2 },
  { id: "q12", prompt: "I'd rather ___ at home tonight.", options: ["staying", "to stay", "stay", "stayed"], answer: 2 },
  { id: "q13", prompt: "Despite ___ tired, she finished the presentation.", options: ["be", "being", "was", "to be"], answer: 1 },
  { id: "q14", prompt: "Choose the closest meaning of â€˜reliableâ€™.", options: ["dependable", "expensive", "creative", "uncertain"], answer: 0 },
  { id: "q15", prompt: "By the time I arrived, the interview ___ .", options: ["starts", "has started", "had started", "was start"], answer: 2 },
  { id: "q16", prompt: "If I ___ more time, I would learn another language.", options: ["have", "had", "will have", "would have"], answer: 1 },
  { id: "q17", prompt: "The proposal was rejected because it was not financially ___.", options: ["visible", "viable", "variable", "vitality"], answer: 1 },
  { id: "q18", prompt: "Hardly ___ the speech when the microphone stopped working.", options: ["she began", "had she begun", "she had begun", "did she began"], answer: 1 },
  { id: "q19", prompt: "Which is most appropriate in a formal email?", options: ["Send me the details now.", "Kindly send the details at your earliest convenience.", "Hey, give me details.", "I want details."], answer: 1 },
  { id: "q20", prompt: "â€˜The results were inconclusiveâ€™ means the results ___ .", options: ["proved the idea", "were completely wrong", "did not provide a clear answer", "arrived late"], answer: 2 },
];

export function getAssessmentResult(score: number) {
  if (score <= 4) return { level: "Pre-A1", program: "Confidence English Foundation", message: "Start with essential words, everyday sentences and guided speaking practice." };
  if (score <= 8) return { level: "A1", program: "Confidence English Foundation", message: "Build a stronger base and speak simple English without fear." };
  if (score <= 12) return { level: "A2", program: "Everyday Conversation Practice", message: "Turn your foundation into confident, natural everyday conversations." };
  if (score <= 16) return { level: "B1", program: "Workplace Communication", message: "Improve clarity, fluency and confidence in professional situations." };
  return { level: "B2+", program: "Interview & Presentation Mastery", message: "Polish advanced communication for interviews, presentations and leadership." };
}

