import { useState } from "react";

const slides = [
  {
    id: 1,
    type: "title",
    timing: "0–5 min",
    title: "Getting Your Teams AI-Ready",
    subtitle: "A Strategic Framework for Leaders of Non-Technical Organizations",
    speaker: "Opening: Set the tone — this is about competitive advantage, not survival fear."
  },
  {
    id: 2,
    type: "framing",
    timing: "5–10 min",
    title: "Where Most Companies Actually Are",
    heading: "The Pilot Graveyard Problem",
    points: [
      "85% of AI pilots never reach production (Gartner, 2024)",
      "The bottleneck is rarely technology — it's people, process, and culture",
      "Your competitors aren't ahead because of better tools; they're ahead because of better adoption",
      "The question is no longer 'Should we use AI?' — it's 'How fast can we scale what's working?'"
    ],
    speaker: "Acknowledge they've likely started. Validate what's working. Name the real obstacle."
  },
  {
    id: 3,
    type: "framework",
    timing: "10–18 min",
    title: "The 4 Readiness Dimensions",
    heading: "What 'AI-Ready' Actually Means",
    dimensions: [
      { icon: "🧠", label: "Literacy", desc: "Teams understand what AI can and cannot do" },
      { icon: "🔄", label: "Workflow Integration", desc: "AI is embedded in daily processes, not bolted on" },
      { icon: "📊", label: "Data Culture", desc: "Decisions are prompt-driven, output is verified" },
      { icon: "🛡️", label: "Governance", desc: "Clear ownership, guardrails, and escalation paths" }
    ],
    speaker: "This is your core framework. Spend time here. Ask the room which dimension is their weakest."
  },
  {
    id: 4,
    type: "teams",
    timing: "18–25 min",
    title: "AI by Function: Where Non-Tech Teams Win",
    heading: "The highest ROI is often outside engineering",
    functions: [
      { team: "Marketing", use: "Content at scale, personalization, campaign analysis", tool: "ChatGPT, Jasper, Midjourney" },
      { team: "HR / People Ops", use: "Job descriptions, onboarding docs, policy Q&A bots", tool: "Claude, Notion AI, Leena AI" },
      { team: "Finance", use: "Report summarization, variance analysis, forecasting narratives", tool: "Microsoft Copilot, Vena, Planful" },
      { team: "Legal / Compliance", use: "Contract review, policy drafting, risk flagging", tool: "Harvey, CoCounsel, Claude" },
      { team: "Customer Success", use: "Ticket triage, response drafts, sentiment analysis", tool: "Intercom, Zendesk AI, Salesforce Einstein" },
      { team: "Operations", use: "SOP generation, process documentation, vendor comms", tool: "Notion AI, Monday AI, Claude" }
    ],
    speaker: "Go function by function. Ask the room which teams are already using tools and which are resistant."
  },
  {
    id: 5,
    type: "change",
    timing: "25–30 min",
    title: "The Hardest Part: Change Management",
    heading: "Technology is the easy part. People are the variable.",
    points: [
      "Fear vs. Threat: Most resistance is fear of irrelevance, not opposition to tools",
      "Champions > Mandates: Identify 1–2 AI champions per department; they move faster than top-down pushes",
      "Permission to Experiment: Create low-stakes sandboxes — pilot programs with no punishment for failure",
      "Reframe the Role: 'AI doesn't replace your job, it replaces the worst parts of your job'",
      "Measure and Celebrate Early Wins: Even small time savings matter — make them visible"
    ],
    speaker: "This often resonates most with this audience. Connect to their own experience managing change."
  },
  {
    id: 6,
    type: "governance",
    timing: "30–35 min",
    title: "Governance Without Bureaucracy",
    heading: "Move fast and don't break trust",
    pillars: [
      { title: "Data Privacy", body: "What can teams input into external AI tools? Define clear boundaries — especially for customer data, financials, and IP." },
      { title: "Output Verification", body: "AI produces first drafts, not final answers. Build a review culture — AI is the intern, humans are the editor." },
      { title: "Tool Sprawl", body: "Teams will adopt tools independently. Create a short approved list + a process for evaluating new ones quickly." },
      { title: "Accountability", body: "When AI output causes an error, who owns it? Define this before it happens, not after." }
    ],
    speaker: "Frame this as enabling speed, not slowing it down. Governance is what lets you move fast without blowback."
  },
  {
    id: 7,
    type: "maturity",
    timing: "35–40 min",
    title: "The AI Maturity Ladder",
    heading: "Where is your organization right now?",
    levels: [
      { level: "1", label: "Aware", desc: "Leadership understands AI exists and has strategic potential" },
      { level: "2", label: "Experimenting", desc: "Individual contributors using AI tools ad hoc, no coordination" },
      { level: "3", label: "Integrating", desc: "AI embedded in specific workflows with measurable output" },
      { level: "4", label: "Scaling", desc: "Cross-functional AI programs with governance and training" },
      { level: "5", label: "Transforming", desc: "AI is a core business capability, embedded in strategy and culture" }
    ],
    speaker: "Ask the room to honestly assess where they are. Most enterprise companies are between 2 and 3."
  },
  {
    id: 8,
    type: "action",
    timing: "40–43 min",
    title: "Your 90-Day Activation Plan",
    heading: "From insight to momentum",
    phases: [
      { phase: "Days 1–30", color: "#6366f1", items: ["Audit current AI tool usage across departments", "Identify 2–3 AI champions per function", "Define data privacy guardrails"] },
      { phase: "Days 31–60", color: "#8b5cf6", items: ["Launch one structured pilot per function", "Establish a lightweight AI review process", "Create a shared prompt library"] },
      { phase: "Days 61–90", color: "#a855f7", items: ["Measure and report time/cost savings", "Expand successful pilots", "Build internal AI literacy curriculum"] }
    ],
    speaker: "Make this actionable. Encourage them to pick ONE thing from each phase before they leave the room."
  },
  {
    id: 9,
    type: "closing",
    timing: "43–45 min",
    title: "The Real Competitive Moat",
    quote: "The companies that win won't be the ones with the best AI. They'll be the ones whose people know how to use it.",
    callToAction: "Start with your people. Build the culture. The tools will follow.",
    speaker: "End with energy. Leave them inspired, not overwhelmed. Open for Q&A."
  }
];

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const total = slides.length;
  const slide = slides[current];

  const next = () => setCurrent(i => Math.min(i + 1, total - 1));
  const prev = () => setCurrent(i => Math.max(i - 1, 0));

  const handleKey = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  const progress = ((current + 1) / total) * 100;

  return (
    <div
      className="min-h-screen bg-gray-950 text-white flex flex-col"
      tabIndex={0}
      onKeyDown={handleKey}
      style={{ outline: "none", fontFamily: "'Inter', sans-serif" }}
    >
      {/* Progress bar */}
      <div className="h-1 bg-gray-800">
        <div
          className="h-full bg-indigo-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <div className="text-sm text-gray-400 font-medium tracking-wider uppercase">AI Readiness for Leaders</div>
        <div className="flex items-center gap-4">
          <span className="text-xs bg-indigo-900 text-indigo-300 px-3 py-1 rounded-full">{slide.timing}</span>
          <span className="text-sm text-gray-500">{current + 1} / {total}</span>
          <button
            onClick={() => setShowNotes(n => !n)}
            className="text-xs px-3 py-1 rounded border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition"
          >
            {showNotes ? "Hide Notes" : "Speaker Notes"}
          </button>
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center px-12 py-8">
        <div className="w-full max-w-5xl">
          {slide.type === "title" && (
            <div className="text-center space-y-6">
              <div className="inline-block text-xs tracking-widest uppercase text-indigo-400 bg-indigo-950 px-4 py-2 rounded-full mb-4">Executive Presentation</div>
              <h1 className="text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{slide.title}</h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">{slide.subtitle}</p>
              <div className="mt-8 inline-block text-sm text-indigo-300 border border-indigo-800 px-6 py-2 rounded-full">{slide.meta}</div>
            </div>
          )}

          {slide.type === "framing" && (
            <div className="space-y-8">
              <div>
                <p className="text-indigo-400 text-sm uppercase tracking-widest mb-2">{slide.title}</p>
                <h2 className="text-4xl font-bold">{slide.heading}</h2>
              </div>
              <div className="space-y-4">
                {slide.points.map((p, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-900 rounded-xl p-5 border border-gray-800">
                    <div className="w-8 h-8 rounded-full bg-indigo-900 text-indigo-300 flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
                    <p className="text-gray-200 text-lg leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.type === "framework" && (
            <div className="space-y-8">
              <div>
                <p className="text-indigo-400 text-sm uppercase tracking-widest mb-2">{slide.title}</p>
                <h2 className="text-4xl font-bold">{slide.heading}</h2>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {slide.dimensions.map((d, i) => (
                  <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-3 hover:border-indigo-700 transition">
                    <div className="text-4xl">{d.icon}</div>
                    <h3 className="text-xl font-bold text-white">{d.label}</h3>
                    <p className="text-gray-400 leading-relaxed">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.type === "teams" && (
            <div className="space-y-6">
              <div>
                <p className="text-indigo-400 text-sm uppercase tracking-widest mb-2">{slide.title}</p>
                <h2 className="text-3xl font-bold">{slide.heading}</h2>
              </div>
              <div className="overflow-hidden rounded-xl border border-gray-800">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-gray-400 uppercase text-xs tracking-wider">
                      <th className="text-left px-5 py-3">Team</th>
                      <th className="text-left px-5 py-3">High-Impact Use Cases</th>
                      <th className="text-left px-5 py-3">Tools</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slide.functions.map((f, i) => (
                      <tr key={i} className={`border-t border-gray-800 ${i % 2 === 0 ? "bg-gray-950" : "bg-gray-900"}`}>
                        <td className="px-5 py-4 font-semibold text-indigo-300">{f.team}</td>
                        <td className="px-5 py-4 text-gray-300">{f.use}</td>
                        <td className="px-5 py-4 text-gray-500 text-xs">{f.tool}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {slide.type === "change" && (
            <div className="space-y-8">
              <div>
                <p className="text-indigo-400 text-sm uppercase tracking-widest mb-2">{slide.title}</p>
                <h2 className="text-4xl font-bold">{slide.heading}</h2>
              </div>
              <div className="space-y-4">
                {slide.points.map((p, i) => {
                  const [bold, rest] = p.split(": ");
                  return (
                    <div key={i} className="flex gap-4 items-start bg-gray-900 rounded-xl p-5 border border-gray-800">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                      <p className="text-gray-200 text-lg"><span className="font-bold text-white">{bold}:</span> {rest}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {slide.type === "governance" && (
            <div className="space-y-8">
              <div>
                <p className="text-indigo-400 text-sm uppercase tracking-widest mb-2">{slide.title}</p>
                <h2 className="text-4xl font-bold">{slide.heading}</h2>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {slide.pillars.map((p, i) => (
                  <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-3 hover:border-indigo-700 transition">
                    <h3 className="text-lg font-bold text-indigo-300">{p.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.type === "maturity" && (
            <div className="space-y-8">
              <div>
                <p className="text-indigo-400 text-sm uppercase tracking-widest mb-2">{slide.title}</p>
                <h2 className="text-4xl font-bold">{slide.heading}</h2>
              </div>
              <div className="space-y-3">
                {slide.levels.map((l, i) => (
                  <div key={i} className="flex items-center gap-5 bg-gray-900 rounded-xl p-4 border border-gray-800">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                      style={{ background: `hsl(${240 + i * 15}, 70%, ${30 + i * 5}%)`, color: "white" }}>
                      {l.level}
                    </div>
                    <div>
                      <span className="font-bold text-white">{l.label} — </span>
                      <span className="text-gray-400">{l.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.type === "action" && (
            <div className="space-y-8">
              <div>
                <p className="text-indigo-400 text-sm uppercase tracking-widest mb-2">{slide.title}</p>
                <h2 className="text-4xl font-bold">{slide.heading}</h2>
              </div>
              <div className="grid grid-cols-3 gap-5">
                {slide.phases.map((p, i) => (
                  <div key={i} className="bg-gray-900 rounded-2xl p-6 border border-gray-800 space-y-4">
                    <div className="text-sm font-bold px-3 py-1 rounded-full inline-block" style={{ background: p.color + "22", color: p.color }}>
                      {p.phase}
                    </div>
                    <ul className="space-y-3">
                      {p.items.map((item, j) => (
                        <li key={j} className="flex gap-3 text-sm text-gray-300">
                          <span style={{ color: p.color }} className="mt-1 flex-shrink-0">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.type === "closing" && (
            <div className="text-center space-y-10">
              <p className="text-indigo-400 text-sm uppercase tracking-widest">{slide.title}</p>
              <blockquote className="text-4xl font-bold leading-tight max-w-3xl mx-auto text-white">
                "{slide.quote}"
              </blockquote>
              <div className="h-px w-24 bg-indigo-500 mx-auto" />
              <p className="text-xl text-gray-400">{slide.callToAction}</p>
              <div className="inline-block bg-indigo-600 hover:bg-indigo-500 transition px-8 py-3 rounded-full text-white font-semibold cursor-pointer">
                Open for Q&A
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Speaker Notes */}
      {showNotes && (
        <div className="bg-yellow-950 border-t border-yellow-800 px-8 py-4">
          <p className="text-xs uppercase tracking-wider text-yellow-500 mb-1 font-bold">Speaker Notes</p>
          <p className="text-yellow-200 text-sm">{slide.speaker}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center px-8 py-5 border-t border-gray-800">
        <button
          onClick={prev}
          disabled={current === 0}
          className="px-6 py-2 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          ← Previous
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition ${i === current ? "bg-indigo-500 w-6" : "bg-gray-700 hover:bg-gray-500"}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          disabled={current === total - 1}
          className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          Next →
        </button>
      </div>
    </div>
  );
}