export const slides = [
  {
    id: 1, type: "title", timing: "0–5 min",
    title: "Getting Your Teams AI-Ready",
    subtitle: "A Strategic Framework for Leaders of Non-Technical Organizations",
    meta: "45-Minute Executive Session",
    speaker: "Set the tone — this is about competitive advantage, not survival fear. Welcome them, acknowledge the room's experience, and frame this as a peer conversation."
  },
  {
    id: 2, type: "framing", timing: "5–10 min",
    title: "The Pilot Graveyard Problem",
    heading: "Where Most Companies Actually Are",
    points: [
      { bold: "85% of AI pilots never reach production", rest: "The bottleneck is rarely the technology." },
      { bold: "Your competitors aren't ahead because of better tools", rest: "They're ahead because of faster, deeper adoption." },
      { bold: "The gap is people, process, and culture", rest: "Not compute, not budget, not access." },
      { bold: "The question has changed", rest: "It's no longer 'Should we use AI?' — it's 'How fast can we scale what's working?'" }
    ],
    speaker: "Acknowledge they've likely started pilots. Validate what's working. Name the real obstacle without being condescending."
  },
  {
    id: 3, type: "framework", timing: "10–18 min",
    title: "What 'AI-Ready' Actually Means",
    heading: "The 4 Readiness Dimensions",
    dimensions: [
      { icon: "🧠", label: "Literacy", desc: "Teams understand what AI can and cannot do — and use that judgment daily." },
      { icon: "🔄", label: "Workflow Integration", desc: "AI is embedded in how work gets done, not treated as a separate tool." },
      { icon: "📊", label: "Data Culture", desc: "Outputs are verified, decisions are prompt-informed, and feedback loops exist." },
      { icon: "🛡️", label: "Governance", desc: "Clear ownership, guardrails, approved tools, and escalation paths are defined." }
    ],
    speaker: "This is your core framework. Spend real time here. Ask the room to silently identify their weakest dimension before you move on."
  },
  {
    id: 4, type: "teams", timing: "18–25 min",
    title: "AI by Function",
    heading: "The Highest ROI is Often Outside Engineering",
    functions: [
      { team: "Marketing", use: "Content at scale, personalization, A/B copy, campaign analysis", tool: "ChatGPT, Jasper, Midjourney" },
      { team: "HR / People Ops", use: "Job descriptions, onboarding docs, policy Q&A bots, culture surveys", tool: "Claude, Notion AI, Leena AI" },
      { team: "Finance", use: "Report summarization, variance narratives, forecasting commentary", tool: "Copilot, Vena, Planful" },
      { team: "Legal / Compliance", use: "Contract review, policy drafting, risk flagging", tool: "Harvey, CoCounsel, Claude" },
      { team: "Customer Success", use: "Ticket triage, response drafts, churn prediction, sentiment", tool: "Intercom AI, Zendesk, Salesforce Einstein" },
      { team: "Operations", use: "SOP generation, process docs, vendor communications", tool: "Notion AI, Monday AI, Claude" }
    ],
    speaker: "Go function by function. Ask which teams in the room are already using tools — and which are the most resistant. Let the room talk."
  },
  {
    id: 5, type: "change", timing: "25–30 min",
    title: "The Hardest Part",
    heading: "Technology is Easy. People are the Variable.",
    points: [
      { bold: "Fear vs. Threat", rest: "Most resistance is fear of irrelevance, not opposition to tools. Address the emotion before the logic." },
      { bold: "Champions Beat Mandates", rest: "Identify 1–2 AI champions per department. Peer credibility moves faster than top-down pressure." },
      { bold: "Permission to Experiment", rest: "Create low-stakes sandboxes — pilots with no punishment for failure build the culture you need." },
      { bold: "Reframe the Role", rest: "'AI doesn't replace your job. It replaces the worst parts of your job.'" },
      { bold: "Celebrate Visible Wins", rest: "Even 30 minutes saved per day is $15K/year per employee. Make the math visible." }
    ],
    speaker: "This slide often resonates most with this audience. Connect it to their own experience managing previous technology transitions — ERP, cloud, mobile."
  },
  {
    id: 6, type: "governance", timing: "30–35 min",
    title: "Governance Without Bureaucracy",
    heading: "Move Fast and Don't Break Trust",
    pillars: [
      { title: "Data Privacy", icon: "🔒", body: "Define what teams can and cannot input into external AI tools. Customer data, financials, and IP need explicit boundaries." },
      { title: "Output Verification", icon: "✅", body: "AI produces first drafts, not final answers. Build a review culture. AI is the intern — humans are the editor." },
      { title: "Tool Sprawl", icon: "🗂️", body: "Teams will adopt tools independently. Maintain a short approved list and a fast process for evaluating new ones." },
      { title: "Accountability", icon: "⚖️", body: "When AI output causes an error, who owns it? Define this before it happens — not after the first incident." }
    ],
    speaker: "Frame governance as the thing that allows speed, not the thing that slows it down. Without guardrails, one bad incident can halt your entire program."
  },
  {
    id: 7, type: "maturity", timing: "35–40 min",
    title: "The AI Maturity Ladder",
    heading: "Honest Self-Assessment",
    levels: [
      { level: "1", label: "Aware", desc: "Leadership understands AI's potential. No structured programs exist yet.", color: "#4b5563" },
      { level: "2", label: "Experimenting", desc: "Individual contributors using AI ad hoc. No coordination, no measurement.", color: "#6366f1" },
      { level: "3", label: "Integrating", desc: "AI embedded in specific workflows. Early measurement. Governance forming.", color: "#8b5cf6" },
      { level: "4", label: "Scaling", desc: "Cross-functional programs. Training, governance, and ROI tracking in place.", color: "#a855f7" },
      { level: "5", label: "Transforming", desc: "AI is a core business capability embedded in strategy, culture, and hiring.", color: "#d946ef" }
    ],
    speaker: "Ask the room to honestly assess where they are — show of hands or a quick poll if you have the tech. Most enterprise companies are between Level 2 and 3."
  },
  {
    id: 8, type: "action", timing: "40–43 min",
    title: "Your 90-Day Activation Plan",
    heading: "From Insight to Momentum",
    phases: [
      { phase: "Days 1–30", label: "Foundation", color: "#6366f1", items: ["Audit current AI tool usage across departments", "Identify 2–3 AI champions per function", "Define data privacy guardrails and approved tool list"] },
      { phase: "Days 31–60", label: "Pilots", color: "#8b5cf6", items: ["Launch one structured pilot per function", "Establish a lightweight AI output review process", "Create a shared prompt library across teams"] },
      { phase: "Days 61–90", label: "Scale", color: "#a855f7", items: ["Measure and communicate time/cost savings", "Expand successful pilots organization-wide", "Build internal AI literacy curriculum and training"] }
    ],
    speaker: "Make this tactical. Ask them to commit to ONE action from each phase before they leave the room today. Write it down."
  },
  {
    id: 9, type: "closing", timing: "43–45 min",
    title: "The Real Competitive Moat",
    quote: "The companies that win won't be the ones with the best AI. They'll be the ones whose people know how to use it.",
    callToAction: "Start with your people. Build the culture. The tools will follow.",
    speaker: "End with energy. Leave them inspired, not overwhelmed. Pause after the quote. Let it breathe. Then open for Q&A."
  }
];