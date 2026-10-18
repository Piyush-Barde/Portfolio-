import { useInView } from "./useInView.js";
import "./Experience.css";

function Entry({ item }) {
  const [ref, seen] = useInView();

  return (
    <li className={`exp-item${seen ? " is-in" : ""}`} ref={ref}>
      <span className={`exp-dot${item.current ? " is-current" : ""}`} aria-hidden="true" />

      <article className="exp-card">
        <div className="exp-top">
          <div>
            <h3>{item.role}</h3>
            <p className="exp-company">{item.company}</p>
          </div>
          <p className="exp-dates">
            {item.dates}
            {item.current && <span className="exp-now">Now</span>}
          </p>
        </div>

        {item.tags?.length > 0 && (
          <ul className="exp-tags" aria-label="Technologies">
            {item.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}

        {item.bullets?.length > 0 && (
          <ul className="exp-bullets">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}

        {item.impact && (
          <div className="exp-impact">
            <p className="exp-impact-label">Key impact</p>
            <p>{item.impact}</p>
          </div>
        )}
      </article>
    </li>
  );
}

function Experience({ items = [], label }) {
  const [ref, seen] = useInView();
  if (!items.length) return null;

  return (
    <section className="content-section" id="experience">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{label}</p>
          <h2>Experience</h2>
        </div>
        <p className="section-note">What I’ve worked on</p>
      </div>

      <ol className={`exp-list${seen ? " is-in" : ""}`} ref={ref}>
        {items.map((item) => (
          <Entry item={item} key={item.role + item.company + item.dates} />
        ))}
      </ol>
    </section>
  );
}

export default Experience;