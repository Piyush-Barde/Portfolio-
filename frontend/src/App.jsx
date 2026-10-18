import { Fragment, useEffect, useState } from "react";
import "./App.css";
import ProfilePhoto from "./profilephoto.jsx";
import { resolveImage } from "./image.js";
import { site } from "./sitedata.js";

/*
  This file only lays the page out. All of the text, links, photo and
  projects come from siteData.js, so edit that file to change the site.
*/

const fullName = `${site.firstName} ${site.lastName}`;

// Every contact link, by name. A link with an empty value is hidden.
const allLinks = {
  GitHub: { href: site.github, external: true },
  LinkedIn: { href: site.linkedin, external: true },
  Email: { href: site.email && `mailto:${site.email}` },
};

// Picks links in the order given, e.g. links("GitHub", "Email").
function links(...names) {
  return names
    .map((label) => ({ label, ...allLinks[label] }))
    .filter((link) => link.href);
}

function SocialLink({ link }) {
  return (
    <a
      href={link.href}
      {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {link.label} ↗
    </a>
  );
}

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const root = document.querySelector(".portfolio");

    if (!root || !("IntersectionObserver" in window)) {
      return;
    }

    const sections = root.querySelectorAll(
      ".hero, .ticker, .featured, .content-section, .resume-band"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach((section) => {
      section.classList.add("reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("The form will be connected to Google Sheets in a later step.");
  }

  return (
    <div className="portfolio">
      <header className="site-header">
        <a className="logo" href="#home">
          {site.initials}
          <span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="availability" href="#contact">
          ● {site.availability}
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">{site.role}</p>
            <h1>
              {site.firstName}
              <br />
              <span>{site.lastName}.</span>
            </h1>
            <p className="intro">{site.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View my work ↗
              </a>
              <a className="button" href="#about">
                About me
              </a>
            </div>

            <div className="social-links">
              {links("GitHub", "LinkedIn", "Email").map((link) => (
                <SocialLink key={link.label} link={link} />
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <ProfilePhoto />
            <span className="visual-caption">{site.caption}</span>
          </div>
        </section>

        <div className="ticker">
          {site.ticker.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        {site.featured && (
          <section className="featured">
            <div className="architecture">
              <p className="eyebrow">FEATURED PROJECT · SYSTEM OVERVIEW</p>
              <div className="flow">
                {site.featured.flow.map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
            </div>

            <div className="featured-copy">
              <p className="eyebrow">FEATURED PROJECT</p>
              <h2>{site.featured.title}</h2>
              <p>{site.featured.description}</p>
              <a className="button" href="#projects">
                Explore project ↗
              </a>
            </div>
          </section>
        )}

        <section className="content-section" id="about">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / PROFILE</p>
              <h2>About me</h2>
            </div>
            <p className="section-note">{site.about.note}</p>
          </div>

          <div className="about-grid">
            <p>{site.about.text}</p>

            <div className="skills" id="skills">
              {site.about.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / SELECTED WORK</p>
              <h2>Projects</h2>
            </div>
            <p className="section-note">Some things I’ve made</p>
          </div>

          <div className="project-grid">
            {site.projects.map((project) => {
              const image = resolveImage(project.image);

              return (
                <article className="project-card" key={project.title}>
                  <div className="project-image">
                    {image ? (
                      <img
                        src={image}
                        alt={`${project.title} preview`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      "PROJECT PREVIEW"
                    )}
                  </div>
                  <p className="eyebrow">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="muted">{project.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="resume-band" id="resume">
          <div>
            <p className="eyebrow">03 / RESUME</p>
            <h2>Want the full overview?</h2>
          </div>

          <a className="button button-primary" href={site.resume} download>
            Download my resume ↓
          </a>
        </section>

        <section className="contact-section content-section" id="contact">
          <div>
            <p className="eyebrow">04 / GET IN TOUCH</p>
            <h2>
              {site.contact.title.map((line, index) => (
                <Fragment key={line}>
                  {index > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </h2>
            <p className="muted">{site.contact.note}</p>

            <div className="contact-links">
              {links("Email", "GitHub", "LinkedIn").map((link) => (
                <SocialLink key={link.label} link={link} />
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" placeholder="Your name" required />
            </label>

            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                placeholder="Your message"
                rows="4"
                required
              />
            </label>

            <button className="button button-primary" type="submit">
              Send message ↗
            </button>

            {message && (
              <p className="form-message" role="status">
                {message}
              </p>
            )}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <a className="logo" href="#home">
          {site.initials}
          <span>.</span>
        </a>
        <span>
          © {new Date().getFullYear()} {fullName}
        </span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;