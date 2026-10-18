import { useInView } from "./useInView.js";
import { resolveImage } from "../images.js";
import "./Projects.css";

function Diagram({ diagram }) {
  return (
    <div className="pj-diagram" aria-hidden="true">
      <p className="pj-diagram-label">{diagram.label}</p>
      <ol>
        {diagram.steps.map((step, i) => (
          <li key={step} style={{ "--i": i }}>
            {step}
          </li>
        ))}
      </ol>
      {diagram.footer && <p className="pj-diagram-footer">{diagram.footer}</p>}
    </div>
  );
}

function Story({ project, index }) {
  const [ref, seen] = useInView();
  const image = resolveImage(project.image);
  const flip = index % 2 === 1;

  return (
    <article className={`pj-story${flip ? " is-flipped" : ""}${seen ? " is-in" : ""}`} ref={ref}>
      <div className="pj-visual">
        {image ? (
          <img src={image} alt={`${project.title} preview`} loading="lazy" />
        ) : project.diagram ? (
          <Diagram diagram={project.diagram} />
        ) : null}
      </div>

      <div className="pj-body">
        <p className="eyebrow">
          {project.type}
          {project.status && <span className="pj-status">{project.status}</span>}
        </p>
        <h3>{project.title}</h3>
        <p className="muted">{project.summary}</p>

        {project.results?.length > 0 && (
          <ul className="pj-results">
            {project.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        )}

        {project.tags?.length > 0 && (
          <ul className="pj-tags" aria-label="Technologies">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}

        {project.meta && <p className="pj-meta">{project.meta}</p>}

        {(project.code || project.demo) && (
          <div className="pj-links">
            {project.code && (
              <a href={project.code} target="_blank" rel="noreferrer">
                Code ↗
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live demo ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function Projects({ projects = [], more = [], label }) {
  if (!projects.length && !more.length) return null;

  return (
    <section className="content-section" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{label}</p>
          <h2>Projects</h2>
        </div>
        <p className="section-note">Some things I’ve made</p>
      </div>

      <div className="pj-list">
        {projects.map((project, i) => (
          <Story project={project} index={i} key={project.title} />
        ))}
      </div>

      {more.length > 0 && (
        <div className="pj-more">
          <h3>More projects</h3>
          <ul>
            {more.map((item) => (
              <li key={item.title}>
                <div>
                  <p className="pj-more-title">{item.title}</p>
                  <p className="muted">{item.summary}</p>
                </div>
                <p className="pj-more-tech">{item.tech}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" aria-label={`${item.title} (opens in a new tab)`}>
                    ↗
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Projects;