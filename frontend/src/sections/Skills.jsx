import { useState } from "react";
import { useInView } from "./useInView.js";
import { getSkillIcon } from "./skillIcons.js";
import "./Skills.css";

function Logo({ name }) {
  const [broken, setBroken] = useState(false);
  const icon = getSkillIcon(name, !broken);

  if (!icon) {
    // No icon for this skill: show a small letter badge instead.
    return (
      <span className="sk-logo sk-badge" aria-hidden="true">
        {name.trim()[0].toUpperCase()}
      </span>
    );
  }

  if (icon.src) {
    // Your own image file from src/skills/ (falls back to a drawn icon if it won't load)
    return (
      <img
        className="sk-logo sk-img"
        src={icon.src}
        alt=""
        loading="lazy"
        onError={() => setBroken(true)}
      />
    );
  }

  if (icon.line) {
    // Drawn icon: outline style, coloured by the accent.
    return (
      <svg
        className="sk-logo"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "var(--accent, #ff5a1f)" }}
      >
        <path d={icon.path} />
      </svg>
    );
  }

  return (
    <svg className="sk-logo" viewBox="0 0 24 24" aria-hidden="true" style={{ fill: icon.color }}>
      <path d={icon.path} />
    </svg>
  );
}

function Skills({ groups = [], label }) {
  const [active, setActive] = useState(0);
  const [ref, seen] = useInView();
  if (!groups.length) return null;

  const group = groups[Math.min(active, groups.length - 1)];

  return (
    <section className="content-section" id="skills">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{label}</p>
          <h2>Skills</h2>
        </div>
        <p className="section-note">Tools I work with</p>
      </div>

      <div className={`sk${seen ? " is-in" : ""}`} ref={ref}>
        <div className="sk-tabs" role="tablist">
          {groups.map((g, i) => (
            <button
              key={g.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={i === active ? "is-active" : ""}
              onClick={() => setActive(i)}
            >
              {g.name}
            </button>
          ))}
        </div>

        {/* key restarts the stagger animation whenever the tab changes */}
        <ul className="sk-tiles" role="tabpanel" key={group.name}>
          {group.items.map((item, i) => (
            <li key={item} style={{ "--i": i }}>
              <Logo name={item} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;