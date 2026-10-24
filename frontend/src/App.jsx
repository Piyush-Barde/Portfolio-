import { Fragment, useEffect, useState } from "react";
import "./App.css";
import ProfilePhoto from "./profilephoto.jsx";
import { site } from "./sitedata.js";
import "./motion.css";
import Stats from "./sections/Stats.jsx";
import About from "./sections/About.jsx";
import Education from "./sections/Education.jsx";
import Experience from "./sections/Experience.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Achievements from "./sections/Achievements.jsx";
import ScrollProgress from "./sections/ScrollProgress.jsx";
import Header from "./Header.jsx";
import "./responsive.css";
import CaseStudy from "./sections/CaseStudy.jsx";
import { useHash, slugFromHash, projectSlug } from "./sections/route.js";

/*
  This file only lays the page out. All of the text, links, photo and
  projects come from siteData.js, so edit that file to change the site.
*/

const fullName = `${site.firstName} ${site.lastName}`;
const homeTitle = document.title;

// Sections that are shown, in page order. Empty lists drop out, so the
// numbers (01, 02, ...) always count only what is visible.
const order = [
  "about",
  site.education.length > 0 && "education",
  site.experience.length > 0 && "experience",
  site.skills.length > 0 && "skills",
  (site.projects.length > 0 || site.moreProjects.length > 0) && "projects",
  site.achievements.length > 0 && "achievements",
  "resume",
  "contact",
].filter(Boolean);

const names = {
  about: "PROFILE",
  education: "EDUCATION",
  experience: "EXPERIENCE",
  skills: "SKILLS",
  projects: "SELECTED WORK",
  achievements: "ACHIEVEMENTS",
  resume: "RESUME",
  contact: "GET IN TOUCH",
};

// Menu links: only the sections that are on the page.
const navNames = {
  about: "About",
  education: "Education",
  experience: "Experience",
  skills: "Skills",
  projects: "Projects",
  achievements: "Achievements",
  resume: "Resume",
  contact: "Contact",
};
const navLinks = [
  { href: "#home", label: "Home" },
  ...order.map((key) => ({ href: `#${key}`, label: navNames[key] })),
];

const label = (key) =>
  `${String(order.indexOf(key) + 1).padStart(2, "0")} / ${names[key]}`;

// Every contact link, by name. A link with an empty value is hidden.
const allLinks = {
  GitHub: { href: "https://github.com/Piyush-Barde", external: true },
  LinkedIn: {
    href: "https://www.linkedin.com/in/piyush-barde-b054a8165",
    external: true,
  },
  Email: {
    href: site.email
      ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}`
      : "",
    external: true,
  },
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
  const [sending, setSending] = useState(false);

  // Which case study (if any) is open: the address looks like #/project/<name>
  const hash = useHash();
  const slug = slugFromHash(hash);
  const caseProject = slug
    ? site.projects.find((project) => projectSlug(project) === slug)
    : null;

  // Page title while a case study is open. After closing, scroll back to
  // the project card and give it keyboard focus.
  useEffect(() => {
    if (slug) {
      document.title = `${caseProject ? caseProject.title : "Not found"} · ${fullName}`;
      return;
    }
    document.title = homeTitle;
    const target = hash.length > 1 ? document.getElementById(hash.slice(1)) : null;
    if (target) {
      target.scrollIntoView();
      if (target.tagName === "ARTICLE") target.focus({ preventScroll: true });
    }
  }, [hash, slug, caseProject]);

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

  // Sends the form to your Google Sheet (the Apps Script link in siteData.js).
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const endpoint = site.contact?.endpoint;

    if (!endpoint) {
      setMessage("The form isn't connected yet. Please email me directly.");
      return;
    }

    setSending(true);
    setMessage("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new URLSearchParams(new FormData(form)),
      });
      const result = await response.json();
      if (!result.ok) throw new Error("rejected");
      form.reset();
      setMessage("Thanks! Your message was sent. I'll get back to you soon.");
    } catch {
      setMessage(
        "Sorry, that didn't go through. Please try again or email me directly."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div className={`portfolio${site.animations ? " motion" : ""}`}>
      {site.animations && <ScrollProgress />}

      <Header
        initials={site.initials}
        links={navLinks}
        availability={site.availability}
      />

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

        <Stats stats={site.stats} animate={site.animations} />

        <About about={site.about} label={label("about")} />
        <Education items={site.education} label={label("education")} />
        <Experience items={site.experience} label={label("experience")} />
        <Skills groups={site.skills} label={label("skills")} />
        <Projects
          projects={site.projects}
          more={site.moreProjects}
          label={label("projects")}
        />
        <Achievements items={site.achievements} label={label("achievements")} />

        <section className="resume-band" id="resume">
          <div>
            <p className="eyebrow">{label("resume")}</p>
            <h2>Want the full overview?</h2>
          </div>

          <a className="button button-primary" href={site.resume} download>
            Download my resume ↓
          </a>
        </section>

        <section className="contact-section content-section" id="contact">
          <div>
            <p className="eyebrow">{label("contact")}</p>
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
            {/* Hidden trap field: people never see it, spam bots fill it in. */}
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", opacity: 0 }}
            />

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

            <button
              className="button button-primary"
              type="submit"
              disabled={sending}
            >
              {sending ? "Sending…" : "Send message ↗"}
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

      {slug && <CaseStudy key={slug} project={caseProject} />}
    </div>
  );
}

export default App;