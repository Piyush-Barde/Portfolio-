import { useEffect, useRef, useState } from "react";
import { useInView } from "./useInView.js";
import { resolveImage } from "../images.js";
import "./Achievements.css";

const isPdf = (path) => /\.pdf($|\?)/i.test(path || "");

/* Pop-up that shows the certificate. Esc, the Close button or a click outside closes it. */
function Certificate({ item, file, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (dialog && !dialog.open) dialog.showModal();
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = before;
    };
  }, []);

  return (
    <dialog
      ref={ref}
      className="ac-dialog"
      aria-label={`Certificate: ${item.title}`}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) ref.current.close();
      }}
    >
      <div className="ac-panel">
        <div className="ac-bar">
          <p className="ac-bar-title">{item.title}</p>
          <button
            type="button"
            className="ac-close"
            onClick={() => ref.current.close()}
            aria-label="Close certificate"
            autoFocus
          >
            <span aria-hidden="true">✕</span> Close
          </button>
        </div>

        <div className="ac-view">
          {isPdf(file) ? (
            <>
              <object data={file} type="application/pdf" aria-label={item.title}>
                <p className="muted">Your browser can't show this PDF here.</p>
              </object>
              <a className="ac-open" href={file} target="_blank" rel="noreferrer">
                Open PDF in a new tab ↗
              </a>
            </>
          ) : (
            <img src={file} alt={`Certificate: ${item.title}`} />
          )}
        </div>

        {item.link && (
          <p className="ac-verify">
            <a href={item.link} target="_blank" rel="noreferrer">
              Verify online ↗
            </a>
          </p>
        )}
      </div>
    </dialog>
  );
}

function Card({ item }) {
  const [ref, seen] = useInView();
  const [open, setOpen] = useState(false);
  // The certificate (image or PDF) is only shown in the pop-up, never on the card.
  const file =
    resolveImage(item.certificate) || item.certificate || resolveImage(item.image);

  return (
    <article className={`ac-card${seen ? " is-in" : ""}`} ref={ref}>
      <div className="ac-text">
        {item.badge && <span className="ac-badge">{item.badge}</span>}
        <h3>{item.title}</h3>
        {item.text && <p className="muted">{item.text}</p>}

        {file && (
          <button
            type="button"
            className="ac-view-btn"
            onClick={() => setOpen(true)}
            aria-label={`View certificate: ${item.title}`}
          >
            View ↗
          </button>
        )}

        {/* no certificate file, but a web link: keep a plain link */}
        {!file && item.link && (
          <a className="ac-link" href={item.link} target="_blank" rel="noreferrer">
            View ↗
          </a>
        )}
      </div>

      {open && <Certificate item={item} file={file} onClose={() => setOpen(false)} />}
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