"use client";

import { useEffect, useRef, useState } from "react";
import { nav } from "../content";
import { Monogram } from "./Monogram";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in the middle band of the viewport.
  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const first = overlayRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && overlayRef.current) {
        const items = overlayRef.current.querySelectorAll<HTMLElement>("a, button");
        const firstEl = items[0];
        const lastEl = items[items.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="wrap flex h-full items-center justify-between">
          <a
            href="#top"
            className="inline-flex min-h-11 items-center gap-3 text-[var(--heading)]"
            aria-label="Anna Lurene Sendaydiego, back to top"
          >
            <Monogram size={40} />
            <span className="hidden text-sm font-semibold tracking-wide sm:inline">
              A. L. Sendaydiego
            </span>
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="nav-link"
                    aria-current={active === n.id ? "true" : undefined}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 inline-flex h-12 w-12 cursor-pointer items-center justify-center text-[var(--heading)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 8h18M3 16h18" stroke="currentColor" strokeWidth="1.25" />
            </svg>
          </button>
        </div>
        <div className="nav-progress" aria-hidden="true" />
      </header>

      <div
        id="mobile-menu"
        ref={overlayRef}
        className={`menu-overlay on-band lg:hidden ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="wrap flex h-[var(--nav-h)] items-center justify-between">
          <Monogram size={40} className="text-[var(--gold)]" />
          <button
            type="button"
            className="-mr-2 inline-flex h-12 w-12 cursor-pointer items-center justify-center"
            onClick={() => {
              setOpen(false);
              toggleRef.current?.focus();
            }}
          >
            <span className="sr-only">Close menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.25" />
            </svg>
          </button>
        </div>
        <nav aria-label="Mobile" className="wrap flex flex-1 flex-col justify-center pb-16">
          <ul>
            {nav.map((n) => (
              <li key={n.id} className="border-t border-[var(--band-line)] last:border-b">
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="flex min-h-16 items-baseline gap-5 py-3"
                >
                  <span className="label num text-[var(--band-meta)]">
                    {n.n}
                  </span>
                  <span className="font-display text-4xl font-light">{n.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
