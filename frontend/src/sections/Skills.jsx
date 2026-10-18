import { useState } from "react";
import { useInView } from "./useInView.js";
import "./Skills.css";

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
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;