import { useEffect, useRef } from "react";
import ProjectVisual from "./ProjectVisual.jsx";
import { projectSlug } from "./route.js";
import "./CaseStudy.css";

const filled = (list) => Array.isArray(list) && list.length > 0;

const closeTo = (project) => {
  window.location.hash = project ? `#project-${projectSlug(project)}` : "#projects";
};

/* The pop-up frame: dimmed + blurred page behind, Esc / outside click / buttons close it. */
function Popup({ project, children }) {
  const ref = useRef(null);
  const close = () => closeTo(project);

  useEffect(() => {
    const dialog = ref.current;
    if (dialog && !dialog.open) dialog.showModal();
    if (dialog) dialog.querySelector(".cs-close")?.focus({ preventScroll: true });
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = before;
      if (dialog && dialog.open) dialog.close();
    };
  }, []);

  return (
    <dialog
      ref={ref}
      className="cs-dialog"
      aria-labelledby="case-title"
      onCancel={(e) => {
        e.preventDefault();
        close();
      }}
      onClick={(e) => {
        if (e.target === ref.current) close();
      }}
    >
      <div className="cs-panel">
        <div className="cs-bar">
          <span className="cs-bar-label">Case study</span>
          <button type="button" className="cs-close" onClick={close} aria-label="Close case study">
            <span aria-hidden="true">✕</span> Close
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
}

function CaseStudy({ project }) {
  if (!project || !project.caseStudy) {
    return (
      <Popup project={null}>
        <article className="cs">
          <h1 id="case-title" tabIndex={-1}>
            Project not found
          </h1>
          <p className="muted">That case study doesn't exist (any more).</p>
        </article>
      </Popup>
    );
  }

  const study = project.caseStudy;
  const mine = study.contribution?.mine;
  const team = study.contribution?.team;
  const tools = filled(study.tools) ? study.tools : project.tags;

  const blocks = [
    {
      id: "overview",
      title: "Project overview",
      show: Boolean(study.overview),
      body: (
        <>
          <p>{study.overview}</p>
          {study.audience && (
            <p className="cs-aside">
              <strong>Who it's for:</strong> {study.audience}
            </p>
          )}
        </>
      ),
    },
    {
      id: "problem",
      title: "Problem",
      show: Boolean(study.problem),
      body: <p>{study.problem}</p>,
    },
    {
      id: "contribution",
      title: "My contribution",
      show: filled(mine) || filled(team),
      body: (
        <>
          {study.contribution?.role && (
            <p className="cs-aside">
              <strong>My role:</strong> {study.contribution.role}
            </p>
          )}
          <div className={`cs-split${filled(mine) && filled(team) ? " is-two" : ""}`}>
            {filled(mine) && (
              <div className="cs-card cs-mine">
                <h3>What I built and decided</h3>
                <ul>
                  {mine.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {filled(team) && (
              <div className="cs-card">
                <h3>Team contribution</h3>
                <ul>
                  {team.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      ),
    },
    {
      id: "solution",
      title: "Solution",
      show: Boolean(study.solution?.text) || filled(study.solution?.features),
      body: (
        <>
          {study.solution?.text && <p>{study.solution.text}</p>}
          {filled(study.solution?.features) && (
            <ul className="cs-features">
              {study.solution.features.map((feature) => (
                <li key={feature.title} className="cs-card">
                  <h3>{feature.title}</h3>
                  {feature.text && <p>{feature.text}</p>}
                </li>
              ))}
            </ul>
          )}
        </>
      ),
    },
    {
      id: "decisions",
      title: "Challenges and decisions",
      show: filled(study.decisions),
      body: (
        <ol className="cs-decisions">
          {study.decisions?.map((item) => (
            <li key={item.title} className="cs-card">
              <h3>{item.title}</h3>
              {item.why && (
                <p>
                  <strong>Why:</strong> {item.why}
                </p>
              )}
            </li>
          ))}
        </ol>
      ),
    },
    {
      id: "outcome",
      title: "Outcome",
      show: filled(study.outcome),
      body: (
        <ul className="cs-checks">
          {study.outcome?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      id: "tools",
      title: "Tools",
      show: filled(tools),
      body: (
        <ul className="cs-chips" aria-label="Technologies used">
          {tools?.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      ),
    },
    {
      id: "links",
      title: "Links",
      show: Boolean(project.code || project.demo),
      body: (
        <div className="cs-links">
          {project.code && (
            <a href={project.code} target="_blank" rel="noreferrer">
              Code on GitHub <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live demo <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      ),
    },
  ].filter((block) => block.show);

  return (
    <Popup project={project}>
      <article className="cs">
        <header className="cs-head">
          <p className="eyebrow">
            {project.type}
            {project.status && <span className="pj-status">{project.status}</span>}
          </p>
          <h1 id="case-title" tabIndex={-1}>
            {project.title}
          </h1>
          <p className="cs-summary">{project.summary}</p>
          {project.meta && <p className="cs-meta">{project.meta}</p>}
        </header>

        <div className="pj-visual cs-visual">
          <ProjectVisual project={project} />
        </div>

        {blocks.map((block, index) => (
          <section className="cs-block" key={block.id} aria-labelledby={`cs-${block.id}`}>
            <div className="cs-label">
              <p className="cs-num">{String(index + 1).padStart(2, "0")}</p>
              <h2 id={`cs-${block.id}`}>{block.title}</h2>
            </div>
            <div className="cs-body">{block.body}</div>
          </section>
        ))}

        <button type="button" className="cs-back-bottom" onClick={() => closeTo(project)}>
          <span aria-hidden="true">←</span> Back to projects
        </button>
      </article>
    </Popup>
  );
}

export default CaseStudy;