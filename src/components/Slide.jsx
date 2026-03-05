import "./Slide.css";

export default function Slide({ slide }) {
  const s = slide;

  if (s.type === "title") return (
    <div className="slide slide--title">
      <h1 className="title-h1">{s.title}</h1>
      <p className="title-sub">{s.subtitle}</p>
      <div className="title-divider" />
    </div>
  );

  if (s.type === "framing") return (
    <div className="slide slide--content">
      <div className="slide-label">{s.title}</div>
      <h2 className="slide-heading">{s.heading}</h2>
      <div className="points-list">
        {s.points.map((p, i) => (
          <div key={i} className="point-card">
            <div className="point-num">{i + 1}</div>
            <p><strong>{p.bold}</strong> — {p.rest}</p>
          </div>
        ))}
      </div>
    </div>
  );

  if (s.type === "framework") return (
    <div className="slide slide--content">
      <div className="slide-label">{s.title}</div>
      <h2 className="slide-heading">{s.heading}</h2>
      <div className="grid-2">
        {s.dimensions.map((d, i) => (
          <div key={i} className="dim-card">
            <div className="dim-icon">{d.icon}</div>
            <h3>{d.label}</h3>
            <p>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  if (s.type === "teams") return (
    <div className="slide slide--content">
      <div className="slide-label">{s.title}</div>
      <h2 className="slide-heading">{s.heading}</h2>
      <div className="table-wrap">
        <table className="func-table">
          <thead>
            <tr><th>Team</th><th>High-Impact Use Cases</th><th>Tools</th></tr>
          </thead>
          <tbody>
            {s.functions.map((f, i) => (
              <tr key={i}>
                <td className="team-name">{f.team}</td>
                <td>{f.use}</td>
                <td className="team-tools">{f.tool}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  if (s.type === "change") return (
    <div className="slide slide--content">
      <div className="slide-label">{s.title}</div>
      <h2 className="slide-heading">{s.heading}</h2>
      <div className="points-list">
        {s.points.map((p, i) => (
          <div key={i} className="point-card">
            <div className="point-dot" />
            <p><strong>{p.bold}</strong> — {p.rest}</p>
          </div>
        ))}
      </div>
    </div>
  );

  if (s.type === "governance") return (
    <div className="slide slide--content">
      <div className="slide-label">{s.title}</div>
      <h2 className="slide-heading">{s.heading}</h2>
      <div className="grid-2">
        {s.pillars.map((p, i) => (
          <div key={i} className="dim-card">
            <div className="dim-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );

  if (s.type === "maturity") return (
    <div className="slide slide--content">
      <div className="slide-label">{s.title}</div>
      <h2 className="slide-heading">{s.heading}</h2>
      <div className="maturity-list">
        {s.levels.map((l, i) => (
          <div key={i} className="maturity-row">
            <div className="maturity-num" style={{ background: l.color }}>{l.level}</div>
            <div>
              <span className="maturity-label">{l.label}</span>
              <span className="maturity-desc"> — {l.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (s.type === "action") return (
    <div className="slide slide--content">
      <div className="slide-label">{s.title}</div>
      <h2 className="slide-heading">{s.heading}</h2>
      <div className="phases-grid">
        {s.phases.map((p, i) => (
          <div key={i} className="phase-card">
            <div className="phase-tag" style={{ color: p.color, borderColor: p.color + "44", background: p.color + "11" }}>
              {p.phase} · {p.label}
            </div>
            <ul>
              {p.items.map((item, j) => (
                <li key={j} style={{ "--accent": p.color }}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  if (s.type === "aboutme") return (
    <div className="slide slide--aboutme">
      <div className="aboutme-card">
        <div className="aboutme-image-wrap">
          <img className="aboutme-image" src={s.image} alt={s.title} />
        </div>
        <div className="aboutme-info">
          <div className="slide-label">{s.label || "About Me"}</div>
          <h2 className="aboutme-name">{s.title}</h2>
          <div className="aboutme-divider" />
          <p className="aboutme-desc">{s.description}</p>
        </div>
      </div>
    </div>
  );

  if (s.type === "saying") return (
    <div className="slide slide--closing">
      <div className="slide-label">{s.title}</div>
      <blockquote className="closing-quote">{s.quote}</blockquote>
      <div className="closing-divider" />
      <blockquote className="closing-quote">{s.callToAction}</blockquote>

    </div>
  );

  if (s.type === "closing") return (
    <div className="slide slide--closing">
      <div className="slide-label">{s.title}</div>
      <blockquote className="closing-quote">"{s.quote}"</blockquote>
      <div className="closing-divider" />
      <p className="closing-cta">{s.callToAction}</p>
      <div className="closing-badge">Open for Q&A</div>
      <p>Slides. Dev AI Bootcamp .com</p>
    </div>
  );

  return null;
}