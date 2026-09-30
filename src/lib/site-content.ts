export const PERSON = {
  name: "Manish Kumar Singh",
  role: "AI Generalist & AI Response Evaluator",
  location: "Bengaluru, India",
  tagline: "AI Evaluation • Research • Language • Technology",
};

import resume from "@/assets/manish-kumar-singh-resume.pdf";

export const LINKS = {
  email: "mailto:singhmanish.core@gmail.com",
  emailLabel: "singhmanish.core@gmail.com",
  linkedin: "https://www.linkedin.com/in/manish-singh-bb2450285/",
  github: "https://github.com/singhManish-Core",
  engineeringPortfolio: "https://manish-personalportfolio.netlify.app/",
  resume: resume,
};

export const TRUST_METRICS = [
  { value: "2+ Years", label: "Software Engineering" },
  { value: "English + Hindi", label: "Bilingual Evaluation" },
  { value: "7+ Dimensions", label: "Structured Evaluation" },
  { value: "Research Driven", label: "Evidence-Based Analysis" },
];

export const EVALUATION_DIMENSIONS = [
  { title: "Accuracy", question: "Is the information factually correct?" },
  { title: "Reasoning", question: "Does the conclusion logically follow?" },
  { title: "Relevance", question: "Does the response answer the actual question?" },
  { title: "Instruction Following", question: "Did the model follow the requested constraints?" },
  { title: "Clarity", question: "Can the response be understood easily?" },
  { title: "Usefulness", question: "Would the response actually help the user?" },
];

export const FRAMEWORK_FLOW = [
  "Understand",
  "Verify",
  "Compare",
  "Identify",
  "Score",
  "Explain",
  "Improve",
];

export const FRAMEWORK_STEPS = [
  {
    n: "01",
    title: "Understand the task",
    body: "Read the prompt as the user meant it, including implicit constraints, tone and format requirements.",
  },
  {
    n: "02",
    title: "Identify evaluation criteria",
    body: "Decide which dimensions actually matter for this task before looking at any response.",
  },
  {
    n: "03",
    title: "Examine the response",
    body: "Break the output into individual claims, steps and instructions rather than judging it as one block.",
  },
  {
    n: "04",
    title: "Verify factual claims",
    body: "Check verifiable statements against reliable sources instead of accepting confident phrasing.",
  },
  {
    n: "05",
    title: "Compare alternatives",
    body: "Hold candidate responses against the same rubric so the comparison stays consistent.",
  },
  {
    n: "06",
    title: "Classify errors",
    body: "Name the failure mode — hallucination, instruction failure, contradiction, missing context.",
  },
  {
    n: "07",
    title: "Score against rubric",
    body: "Assign dimension-level scores with a stated reason for each, not a single overall impression.",
  },
  {
    n: "08",
    title: "Explain the judgment",
    body: "Write a rationale another evaluator could follow and reasonably arrive at the same conclusion.",
  },
  {
    n: "09",
    title: "Improve the response",
    body: "Rewrite the weaker output to show what a correct, complete and compliant answer looks like.",
  },
];

export type Study = {
  slug: string;
  n: string;
  title: string;
  kind: string;
  description: string;
  tags: string[];
  focus: string[];
  method: string[];
  outcome: string;
};

export const STUDIES: Study[] = [
  {
    slug: "llm-response-quality-benchmark",
    n: "01",
    title: "LLM Response Quality Benchmark",
    kind: "Independent Evaluation Study",
    description:
      "Compared AI-generated responses across accuracy, relevance, completeness, reasoning and instruction following using a structured evaluation rubric.",
    tags: ["LLM Evaluation", "Ranking", "Reasoning"],
    focus: ["Response ranking", "Rubric scoring", "Preference rationale"],
    method: [
      "Wrote a fixed rubric with dimension definitions and a 1–5 scale before evaluating anything.",
      "Collected paired responses to the same prompt set covering explanation, summarisation and constrained-format tasks.",
      "Scored each response dimension by dimension, recording the observable evidence behind every score.",
      "Selected a preferred response per pair and wrote a short rationale naming the deciding dimension.",
    ],
    outcome:
      "Preference decisions were most often driven by instruction following and completeness rather than surface fluency.",
  },
  {
    slug: "factuality-hallucination-audit",
    n: "02",
    title: "AI Factuality & Hallucination Audit",
    kind: "Portfolio Research",
    description:
      "Research-based evaluation of AI-generated claims across technology, sports, Indian culture and general knowledge.",
    tags: ["Research", "Fact Checking", "Hallucination"],
    focus: ["Claim extraction", "Source verification", "Confidence vs. correctness"],
    method: [
      "Split each response into individually checkable claims.",
      "Verified each claim against primary or well-established secondary sources.",
      "Labelled claims as supported, unsupported, partially correct or fabricated.",
      "Noted where confident phrasing was paired with unverifiable content.",
    ],
    outcome:
      "Fabricated detail clustered around specific numbers, dates and named entities, where phrasing stayed equally confident.",
  },
  {
    slug: "english-hindi-language-evaluation",
    n: "03",
    title: "English–Hindi AI Language Evaluation",
    kind: "Independent Evaluation Study",
    description:
      "Evaluated bilingual AI responses for meaning preservation, grammatical correctness, naturalness, tone and cultural context.",
    tags: ["Hindi", "English", "Localization"],
    focus: ["Meaning preservation", "Naturalness", "Cultural appropriateness"],
    method: [
      "Compared source and target text sentence by sentence for meaning loss or addition.",
      "Rated grammar and naturalness separately, since a grammatical sentence can still read as machine-translated.",
      "Checked register and politeness level against what a native speaker would expect in context.",
      "Flagged literal translations of idioms and culturally specific references.",
    ],
    outcome:
      "Most quality loss came from naturalness and register rather than outright grammatical error.",
  },
  {
    slug: "technical-response-evaluation",
    n: "04",
    title: "AI Technical Response Evaluation",
    kind: "Portfolio Research",
    description:
      "Evaluated AI-generated technical explanations and solutions across React, JavaScript, SQL and .NET for correctness, completeness and practical applicability.",
    tags: ["Technical QA", "Software", "Code Evaluation"],
    focus: ["Correctness", "Edge cases", "Practical applicability"],
    method: [
      "Reasoned through each proposed solution against the stated requirements and likely edge cases.",
      "Checked whether APIs, syntax and patterns referenced actually exist and behave as described.",
      "Assessed whether the explanation would let a working developer apply the answer without rework.",
      "Rewrote weak answers with the missing constraint, caveat or correction made explicit.",
    ],
    outcome:
      "Technically plausible answers frequently omitted error handling and the constraint that made the question non-trivial.",
  },
];

export type CriterionScore = { criterion: string; a: number; b: number };

export const COMPARISON = {
  prompt:
    "In two short paragraphs, explain to a junior developer why a React useEffect with an empty dependency array can still run twice, and say what they should do about it.",
  responseA: {
    label: "Response A",
    text: `An effect with an empty dependency array runs twice because React re-renders the component whenever state changes, so the effect is re-triggered on the second render. This is a known bug in React 18 and it was fixed in later patch releases, so upgrading React usually resolves it.

If you can't upgrade, the standard fix is to remove StrictMode from your project permanently, or to add a global flag so the effect body only ever runs once in the application.`,
  },
  responseB: {
    label: "Response B",
    text: `In development, React's StrictMode intentionally mounts a component, unmounts it, and mounts it again. An effect with an empty dependency array therefore runs, cleans up, and runs a second time. This is deliberate: it surfaces effects that are not safe to run more than once. In production builds the double invocation does not happen.

The fix is not to disable StrictMode but to make the effect idempotent — return a cleanup function that cancels the subscription, timer or in-flight request the effect started. If a request must not be duplicated, abort it in cleanup with an AbortController rather than guarding with a module-level flag.`,
  },
  scores: [
    { criterion: "Accuracy", a: 1, b: 5 },
    { criterion: "Reasoning", a: 2, b: 5 },
    { criterion: "Relevance", a: 3, b: 5 },
    { criterion: "Completeness", a: 2, b: 5 },
    { criterion: "Instruction Following", a: 3, b: 5 },
    { criterion: "Clarity", a: 4, b: 5 },
  ] as CriterionScore[],
  preferred: "B" as const,
  rationale:
    "Response A states a wrong cause (re-render on state change), invents a fix that does not exist (a patch release), and recommends removing StrictMode — a change that hides the problem instead of addressing it. Response B identifies the real mechanism, distinguishes development from production behaviour, and gives an actionable remedy that keeps the safety check in place. Both are clear and both respect the two-paragraph constraint, so the decision rests on accuracy and reasoning.",
};

export type Failure = {
  id: string;
  name: string;
  summary: string;
  prompt: string;
  response: string;
  failureType: string;
  why: string;
  severity: "Low" | "Moderate" | "High" | "Critical";
  improved: string;
};

export const FAILURES: Failure[] = [
  {
    id: "hallucination",
    name: "Hallucination",
    summary: "Invented facts, sources, functions or figures presented as real.",
    prompt: "Which paper first introduced the transformer architecture, and who published it?",
    response:
      "The transformer architecture was introduced in the 2016 paper \"Deep Sequential Attention Networks\" by researchers at Stanford University.",
    failureType: "Fabricated source and attribution",
    why: "The title, year and institution are all invented. The response reads authoritatively, so a reader without domain knowledge has no signal that any of it is fabricated.",
    severity: "Critical",
    improved:
      "The transformer architecture was introduced in \"Attention Is All You Need\" (Vaswani et al., 2017), published by researchers at Google Brain and Google Research.",
  },
  {
    id: "false-confidence",
    name: "False Confidence",
    summary: "Uncertain or unknowable content delivered without hedging.",
    prompt: "How many people attended the 2011 Cricket World Cup final at Wankhede Stadium?",
    response: "Exactly 42,371 people attended the match.",
    failureType: "Unwarranted precision",
    why: "A specific figure is given with no source and to a precision the model cannot justify. Stated capacity and attendance figures differ, and the response gives no room for that.",
    severity: "High",
    improved:
      "Wankhede Stadium's capacity at the time was roughly 33,000, so attendance was in that range. I'd check a contemporaneous match report for the official figure rather than quote an exact number.",
  },
  {
    id: "instruction-failure",
    name: "Instruction Failure",
    summary: "Explicit constraints on length, format or scope are ignored.",
    prompt: "Summarise this policy in exactly three bullet points, no more than 15 words each.",
    response:
      "Here's a summary of the policy: The document sets out a broad framework covering eligibility, the application process, required documentation, review timelines, appeals, and several exceptions that apply to specific categories of applicant...",
    failureType: "Format and length constraint ignored",
    why: "The requested structure was three short bullets. The output is a single long paragraph, so it fails the task regardless of whether the content is accurate.",
    severity: "High",
    improved:
      "• Eligibility covers applicants meeting residency and income thresholds.\n• Applications require identity proof and are reviewed within 30 days.\n• Rejected applicants may appeal once within 14 days.",
  },
  {
    id: "logical-contradiction",
    name: "Logical Contradiction",
    summary: "The response asserts two things that cannot both be true.",
    prompt: "Is it safe to mutate React state directly?",
    response:
      "You should never mutate state directly because React relies on reference changes to detect updates. For small objects, directly mutating state is fine and avoids an extra render.",
    failureType: "Self-contradiction within one answer",
    why: "The second sentence negates the first. A reader is left without a usable rule, and the incorrect half is the more convenient one to follow.",
    severity: "High",
    improved:
      "Don't mutate state directly — React compares references to decide whether to re-render, so an in-place change can be missed. Create a new object or array, for example setItems(prev => [...prev, next]).",
  },
  {
    id: "missing-context",
    name: "Missing Context",
    summary: "A correct-sounding answer that omits the condition it depends on.",
    prompt: "Should I use an index on this column to speed up my query?",
    response: "Yes, adding an index will make the query faster.",
    failureType: "Omitted preconditions and trade-offs",
    why: "Whether an index helps depends on selectivity, query shape and write volume. The answer omits the cost to inserts and updates, so it can lead to a worse system overall.",
    severity: "Moderate",
    improved:
      "It depends on selectivity and workload. An index helps when the column filters out most rows and the table is read-heavy; on a write-heavy table it adds cost to every insert and update. Check the query plan before and after.",
  },
  {
    id: "overgeneralization",
    name: "Overgeneralization",
    summary: "A narrow truth stated as a universal rule.",
    prompt: "Is NoSQL faster than SQL?",
    response: "Yes, NoSQL databases are always faster than relational databases.",
    failureType: "Unqualified universal claim",
    why: "Performance depends on access pattern, data model and consistency requirements. Stating it as a universal rule leads to architecture decisions made on a false premise.",
    severity: "Moderate",
    improved:
      "Neither is universally faster. Document stores can be quicker for single-key lookups of denormalised data; relational databases usually win on joins, aggregations and transactional consistency. The access pattern decides it.",
  },
  {
    id: "poor-translation",
    name: "Poor Translation",
    summary: "Literal rendering that loses meaning, tone or cultural fit.",
    prompt: "Translate into natural Hindi: \"Please let me know if you have any questions.\"",
    response: "कृपया मुझे बताएं यदि आपके पास कोई प्रश्न हैं।",
    failureType: "Literal word order, unnatural register",
    why: "The clause order follows English rather than Hindi, so it reads as translated text. The sentence is grammatical but a native speaker would not phrase it this way.",
    severity: "Moderate",
    improved: "अगर आपका कोई सवाल हो तो मुझे ज़रूर बताइएगा।",
  },
  {
    id: "technical-misconception",
    name: "Technical Misconception",
    summary: "A plausible explanation built on an incorrect mental model.",
    prompt: "Why does my async function return a Promise instead of the value?",
    response:
      "Because you forgot to mark the function as synchronous. Remove the async keyword and it will return the value directly.",
    failureType: "Incorrect causal model",
    why: "Removing async breaks any await inside the function. The advice addresses the symptom with a change that introduces a new error.",
    severity: "High",
    improved:
      "An async function always returns a Promise — that's by definition. To get the value, await the call inside another async function, or handle it with .then(). Keep the async keyword.",
  },
  {
    id: "outdated-information",
    name: "Outdated Information",
    summary: "Guidance that was correct once but no longer reflects current practice.",
    prompt: "What's the recommended way to fetch data on mount in React?",
    response: "Use componentWillMount in a class component so the data is ready before the first render.",
    failureType: "Deprecated API recommended",
    why: "componentWillMount is deprecated and would not have fetched data before first render in any case. The answer sends the reader toward a pattern the ecosystem has moved away from.",
    severity: "Moderate",
    improved:
      "Use a data-fetching library such as TanStack Query, or a route loader if your framework has one. In plain React, fetch inside useEffect with cleanup to cancel in-flight requests.",
  },
  {
    id: "irrelevant-response",
    name: "Irrelevant Response",
    summary: "A fluent answer to a question that was not asked.",
    prompt: "My SQL query returns duplicate rows after adding a join. Why?",
    response:
      "SQL is a declarative language used for managing relational data. It supports SELECT, INSERT, UPDATE and DELETE operations, and is supported by most database systems.",
    failureType: "Topic drift",
    why: "The response is accurate in isolation and entirely unhelpful. The user's actual problem — join cardinality — is never addressed.",
    severity: "High",
    improved:
      "A join produces one row per matching pair. If the joined table has several rows per key, each left-hand row is duplicated. Check the join key's cardinality, and use a filter, an aggregate or DISTINCT once you know which is correct.",
  },
];

export const LANGUAGE_DIMENSIONS = {
  english: [
    "Reading comprehension",
    "Grammar and mechanics",
    "Writing and editing",
    "Register and tone",
    "Clarity and concision",
    "Content quality",
  ],
  hindi: [
    "Meaning preservation",
    "Grammatical correctness",
    "Naturalness to a native speaker",
    "Tone and politeness level",
    "Cultural context",
    "Narration and pronunciation awareness",
  ],
};

export const RESEARCH_FLOW = [
  "Question",
  "Search",
  "Source Selection",
  "Cross-Check",
  "Evidence",
  "Evaluation",
];

export const TECH_STACK = [
  "React",
  "JavaScript",
  "TypeScript",
  "C#",
  ".NET",
  "SQL",
  "REST APIs",
  "Web Applications",
];

export const DOMAINS = [
  { name: "Technology", note: "Software, web platforms, developer tooling" },
  { name: "Sports", note: "Cricket and other formats, history, statistics and match context" },
  { name: "Indian Culture", note: "Regional context, customs, everyday references" },
  { name: "Literature", note: "Close reading, interpretation, narrative structure" },
  { name: "Philosophy", note: "Argument structure, premises, logical validity" },
  { name: "Everyday Knowledge", note: "Practical, general-audience information" },
];

export const EXPERIENCE = {
  role: "Software Engineer",
  company: "LTM",
  location: "Bengaluru, India",
  period: "Dec 2024 – Present",
  bullets: [
    "Develop and maintain enterprise web application features using React, TypeScript and JavaScript on the front end and .NET with ASP.NET Core APIs and SQL on the back end.",
    "Analyse requirements and clarify ambiguity with stakeholders before implementation, translating business rules into defined, testable behaviour.",
    "Investigate application behaviour and reproduce defects systematically, isolating root cause rather than treating the reported symptom.",
    "Identify inconsistencies and edge cases in specifications and existing behaviour, and raise them before they reach production.",
    "Deliver quality-focused work with attention to correctness, edge-case handling and maintainability.",
    "Communicate technical findings and trade-offs in writing to both technical and non-technical colleagues.",
    "Compare alternative implementation approaches and document the reasoning behind the chosen solution.",
    "Collaborate within an Agile team across planning, review and iterative delivery.",
  ],
};

export const SKILL_GROUPS = [
  {
    title: "AI Evaluation",
    items: [
      "AI Response Evaluation",
      "LLM Output Evaluation",
      "Response Ranking",
      "Preference Ranking",
      "Prompt Evaluation",
      "Instruction Following",
      "Factuality Assessment",
      "Relevance Assessment",
      "Response Quality Evaluation",
      "Rubric-Based Evaluation",
      "Response Rewriting",
      "Error Identification",
      "Reasoning Evaluation",
      "Hallucination Detection",
      "Content Quality Assessment",
    ],
  },
  {
    title: "Research",
    items: [
      "Online Research",
      "Fact Verification",
      "Evidence-Based Analysis",
      "Comparative Analysis",
      "Critical Thinking",
      "Logical Reasoning",
      "Information Quality Assessment",
      "Search Relevance",
    ],
  },
  {
    title: "Language",
    items: [
      "English",
      "Hindi",
      "Reading Comprehension",
      "Writing",
      "Editing",
      "Grammar",
      "Naturalness",
      "Translation Quality",
      "Cultural Context",
      "Narration / Pronunciation Awareness",
    ],
  },
  {
    title: "Technical",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "C#",
      ".NET",
      "ASP.NET Core",
      "SQL",
      "REST APIs",
      "Web Applications",
      "Git / GitHub",
    ],
  },
];
