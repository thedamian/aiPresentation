import { useState, useEffect } from "react";
import { slides } from "./data/slides";
import Slide from "./components/Slide";
import "./App.css";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const total = slides.length;
  const slide = slides[current];
  const progress = ((current + 1) / total) * 100;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setCurrent(i => Math.min(i + 1, total - 1));
      if (e.key === "ArrowLeft")  setCurrent(i => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [total]);

  return (
    <div className="app">
      {/* Progress */}
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Header */}
      <header className="header">
        <span className="header-title">AI Readiness for Leaders</span>
        <div className="header-right">
          <span className="timing-badge">{slide.timing}</span>
          <span className="slide-count">{current + 1} / {total}</span>
          <button className="notes-btn" onClick={() => setShowNotes(n => !n)}>
            {showNotes ? "Hide Notes" : "Speaker Notes"}
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="main">
        <Slide slide={slide} key={slide.id} />
      </main>

      {/* Speaker Notes */}
      {showNotes && (
        <div className="notes-panel">
          <span className="notes-label">Speaker Notes</span>
          <p>{slide.speaker}</p>
        </div>
      )}

      {/* Nav */}
      <footer className="footer">
        <button className="nav-btn nav-btn--ghost" onClick={() => setCurrent(i => Math.max(i - 1, 0))} disabled={current === 0}>
          ← Previous
        </button>
        <div className="dots">
          {slides.map((_: any, i: number) => (
            <button key={i} className={`dot ${i === current ? "dot--active" : ""}`} onClick={() => setCurrent(i)} />
          ))}
        </div>
        <button className="nav-btn nav-btn--primary" onClick={() => setCurrent(i => Math.min(i + 1, total - 1))} disabled={current === total - 1}>
          Next →
        </button>
      </footer>
    </div>
  );
}