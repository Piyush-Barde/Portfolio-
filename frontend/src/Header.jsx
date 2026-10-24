import { useEffect, useRef, useState } from "react";
import "./Header.css";

/*
  Top bar. On wide screens it is the normal menu; on small screens the
  menu folds into a hamburger button. The links come from App.jsx.
*/
function Header({ initials, links, availability, availabilityHref = "#contact" }) {
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(0);
  const bar = useRef(null);

  const close = () => setOpen(false);

  function toggle() {
    // The menu panel starts right under the bar, wherever the bar is.
    if (!open && bar.current) setTop(bar.current.getBoundingClientRect().bottom);
    setOpen(!open);
  }

  useEffect(() => {
    if (!open) return;

    const onKey = (event) => event.key === "Escape" && close();
    const onResize = () => window.innerWidth > 1024 && close();

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`site-header${open ? " menu-open" : ""}`} ref={bar}>
      <a className="logo" href="#home" onClick={close}>
        {initials}
        <span>.</span>
      </a>

      <nav
        id="main-menu"
        className="nav-menu"
        aria-label="Main navigation"
        style={open ? { top } : undefined}
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}

        {availability && (
          <a className="nav-availability" href={availabilityHref} onClick={close}>
            ● {availability}
          </a>
        )}
      </nav>

      {availability && (
        <a className="availability" href={availabilityHref}>
          ● {availability}
        </a>
      )}

      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="main-menu"
        onClick={toggle}
      >
        <span />
        <span />
        <span />
      </button>

      {open && <div className="nav-backdrop" style={{ top }} onClick={close} />}
    </header>
  );
}

export default Header;