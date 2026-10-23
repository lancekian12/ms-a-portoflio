"use client";

import { useEffect } from "react";

// One observer for the whole page: fade-up reveals, hairline draws, and count-ups.
export function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal], [data-draw]");
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    targets.forEach((el) => io.observe(el));

    const frames: number[] = [];
    const countIo = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          countIo.unobserve(entry.target);
          const el = entry.target as HTMLElement;
          const end = Number(el.dataset.count);
          const decimals = Number(el.dataset.decimals ?? 0);
          const duration = 1600;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 4);
            el.textContent = (end * eased).toFixed(decimals);
            if (p < 1) frames.push(requestAnimationFrame(tick));
          };
          frames.push(requestAnimationFrame(tick));
        }
      },
      { threshold: 0.6 },
    );
    counters.forEach((el) => {
      el.textContent = (0).toFixed(Number(el.dataset.decimals ?? 0));
      countIo.observe(el);
    });

    // Scroll-linked motion: nav progress, portrait parallax, watermark drift, timeline fill.
    const progress = document.querySelector<HTMLElement>(".nav-progress");
    const parallax = document.querySelectorAll<HTMLElement>("[data-parallax]");
    const drift = document.querySelectorAll<HTMLElement>("[data-drift]");
    const tlItems = document.querySelectorAll<HTMLElement>(".tl-item");
    let ticking = false;
    let raf = 0;

    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      const max = document.documentElement.scrollHeight - vh;
      if (progress) progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;

      parallax.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) return;
        const factor = Number(el.dataset.parallax ?? 0);
        el.style.setProperty("--py", `${(rect.top + rect.height / 2 - vh / 2) * factor}px`);
      });

      drift.forEach((el) => {
        const host = el.parentElement!.getBoundingClientRect();
        if (host.bottom < 0 || host.top > vh) return;
        const p = (vh - host.top) / (vh + host.height); // 0 → 1 across the viewport
        el.style.setProperty("--dx", `${(0.5 - p) * Number(el.dataset.drift ?? 160)}px`);
      });

      const line = vh * 0.62;
      tlItems.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const f = Math.min(1, Math.max(0, (line - rect.top - 22) / rect.height));
        el.style.setProperty("--f", f.toFixed(3));
        el.classList.toggle("is-passed", rect.top + 26 < line);
      });
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      io.disconnect();
      countIo.disconnect();
      frames.forEach(cancelAnimationFrame);
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
