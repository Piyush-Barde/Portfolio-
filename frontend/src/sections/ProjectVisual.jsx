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

function ProjectVisual({ project }) {
  const image = resolveImage(project.image);

  if (image) return <img src={image} alt={`${project.title} preview`} loading="lazy" />;
  if (project.diagram) return <Diagram diagram={project.diagram} />;
  return null;
}

export default ProjectVisual;