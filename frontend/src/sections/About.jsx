import { useInView } from "./useInView.js";
import "./About.css";

function About({ about, label }) {
  const [ref, seen] = useInView();

  return (
    <section className="content-section" id="about">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{label}</p>
          <h2>About me</h2>
        </div>
        <p className="section-note">{about.note}</p>
      </div>

      <div className="about-grid">
        <p>{about.text}</p>

        {about.focus?.length > 0 && (
          <div className={`about-focus${seen ? " is-in" : ""}`} ref={ref}>
            <h3>What I’m focused on</h3>
            <ul>
              {about.focus.map((item, i) => (
                <li key={item} style={{ "--i": i }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;