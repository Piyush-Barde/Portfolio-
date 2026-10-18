import { useInView } from "./useInView.js";
import { resolveImage } from "../images.js";
import "./Achievements.css";

function Card({ item }) {
  const [ref, seen] = useInView();
  const image = resolveImage(item.image);

  return (
    <article className={`ac-card${seen ? " is-in" : ""}`} ref={ref}>
      {image && <img src={image} alt={item.title} loading="lazy" />}
      <div className="ac-text">
        {item.badge && <span className="ac-badge">{item.badge}</span>}
        <h3>{item.title}</h3>
        {item.text && <p className="muted">{item.text}</p>}
        {item.link && (
          <a href={item.link} target="_blank" rel="noreferrer">
            View ↗
          </a>
        )}
      </div>
    </article>
  );
}

function Achievements({ items = [], label }) {
  if (!items.length) return null;

  return (
    <section className="content-section" id="achievements">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{label}</p>
          <h2>Achievements</h2>
        </div>
        <p className="section-note">Recognition along the way</p>
      </div>

      <div className="ac-grid">
        {items.map((item) => (
          <Card item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
}

export default Achievements;