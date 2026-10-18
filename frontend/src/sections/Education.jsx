import { useInView } from "./useInView.js";
import "./Education.css";

function Entry({ item }) {
  const [ref, seen] = useInView();

  return (
    <article className={`edu-card${seen ? " is-in" : ""}`} ref={ref}>
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
        <ul className="edu-courses" aria-label="Key courses">
          {item.courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

function Education({ items = [], label }) {
  if (!items.length) return null;

  return (
    <section className="content-section" id="education">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{label}</p>
          <h2>Education</h2>
        </div>
        <p className="section-note">Where I’m learning</p>
      </div>

      <div className="edu-list">
        {items.map((item) => (
          <Entry item={item} key={item.school + item.dates} />
        ))}
      </div>
    </section>
  );
}

export default Education;