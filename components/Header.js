"use client";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  ["Packages", "#packages"],
  ["Estimate", "#estimate"],
  ["Gallery", "#gallery"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="top">
      <div className="wrap bar">
        <a href="#top" aria-label={site.name}>
          <img src="/logo.png" alt={site.name} className="logo" />
        </a>

        <nav className="desk" aria-label="Main">
          {links.map(([t, h]) => (
            <a key={h} href={h}>
              {t}
            </a>
          ))}
          <a className="btn solid sm" href="#quote">
            Get a quote
          </a>
        </nav>

        <button
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="mnav" aria-label="Mobile">
          {links.map(([t, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>
              {t}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
