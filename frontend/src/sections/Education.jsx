import { useInView } from "./useInView.js";
import "./Education.css";

// Main card: used for your degree. Coursework is the focus.
function Degree({ item }) {
  const [ref, seen] = useInView();

  return (
    <article className={`edu-card${seen ? " is-in" : ""}`} ref={ref}>
      <div className="edu-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 9 12 4 2 9l10 5 10-5Z" />
          <path d="M6 11.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5" />
          <path d="M22 9v6" />
        </svg>
      </div>

      <div className="edu-main">
        <div className="edu-top">
          <div>
            <h3>{item.school}</h3>
            {item.place && <p className="edu-place">{item.place}</p>}
          </div>
          <div className="edu-side">
            {item.dates && <p className="edu-dates">{item.dates}</p>}
            {item.grade && <span className="edu-grade">{item.grade}</span>}
          </div>
        </div>

        {item.degree && <p className="edu-degree">{item.degree}</p>}

        {item.courses?.length > 0 && (
          <div className="edu-work">
            <p className="edu-work-label">Key coursework</p>
            <ul className="edu-courses">
              {item.courses.map((course, i) => (
                <li key={course} style={{ "--i": i }}>
                  {course}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}

// Small card: one slim row per school entry.
function Schooling({ items }) {
  const [ref, seen] = useInView();

  return (
    <article className={`edu-card edu-school${seen ? " is-in" : ""}`} ref={ref}>
      <p className="edu-work-label">Schooling</p>
      <ul>
        {items.map((item) => (
          <li key={item.school + item.dates}>
            <div>
              <p className="edu-school-name">{item.school}</p>
              <p className="edu-place">
                {[item.degree, item.place].filter(Boolean).join(" · ")}
              </p>
            </div>
            <p className="edu-dates">
              {item.dates}
              {item.grade && <span className="edu-grade">{item.grade}</span>}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Education({ items = [], label }) {
  if (!items.length) return null;

  const degrees = items.filter((item) => !item.compact);
  const schools = items.filter((item) => item.compact);

  return (
    <section className="content-section" id="education">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{label}</p>
          <h2>Education</h2>
        </div>
        <p className="section-note">What I’ve been learning</p>
      </div>

      <div className="edu-list">
        {degrees.map((item) => (
          <Degree item={item} key={item.school + item.dates} />
        ))}
        {schools.length > 0 && <Schooling items={schools} />}
      </div>
    </section>
  );
}

export default Education;