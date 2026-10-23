import type { CSSProperties } from "react";
import Image from "next/image";
import portrait from "./assets/portrait.jpg";
import {
  CV_URL,
  CONTACT_EMAIL,
  LINKEDIN_URL,
  achievements,
  credentials,
  earlierRoles,
  expertise,
  groupScope,
  hero,
  memberships,
  metrics,
  profile,
  qualityMetrics,
  rarejobRoles,
  services,
  site,
} from "./content";
import { ContactForm } from "./components/ContactForm";
import { Effects } from "./components/Effects";
import { Monogram } from "./components/Monogram";
import { Nav } from "./components/Nav";
import { SealBadge } from "./components/SealBadge";

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

function SectionHead({ n, label, id }: { n: string; label: string; id: string }) {
  return (
    <div>
      <h2 id={`${id}-title`} className="label sec-head" data-reveal>
        <span className="num">{n}</span>
        <span aria-hidden="true">—</span>
        <span>{label}</span>
      </h2>
      <div className="rule sec-rule" data-draw aria-hidden="true" />
    </div>
  );
}

function Chevron() {
  return (
    <svg className="chev" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

async function Year() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <Effects />

      <main id="main">
        {/* ---------- Hero ---------- */}
        <section
          id="top"
          aria-label="Introduction"
          className="hero relative flex min-h-dvh items-center overflow-hidden pt-[calc(var(--nav-h)+32px)] pb-24"
        >
          <div className="hero-ledger" aria-hidden="true" />
          <div className="wrap relative grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <p className="label intro" style={stagger(0)}>
                <span className="intro-tick" aria-hidden="true" />
                {hero.label}
              </p>
              <h1 className="display mt-7 text-[clamp(3.25rem,1.9rem+5.6vw,7.25rem)] font-light">
                <span className="mask-line">
                  <span style={stagger(1)}>Anna Lurene</span>
                </span>
                <span className="mask-line">
                  <span style={stagger(2)}>
                    Sendaydiego<span className="hero-dot">.</span>
                  </span>
                </span>
                <span className="sr-only">, {site.postNominals}</span>
              </h1>
              <p className="lede intro mt-8 max-w-[22ch] italic" style={stagger(4)}>
                {hero.line}
              </p>
              <div className="rule rule-intro mt-10 max-w-md" aria-hidden="true" />
              <p className="meta intro mt-6 max-w-[46ch]" style={stagger(6)}>
                {hero.sub}
              </p>
              <div
                className="intro mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
                style={stagger(7)}
              >
                <a href="#contact" className="btn btn--arrow">
                  Start a conversation
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </a>
                <a href="#experience" className="link-u">
                  View experience <span className="arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <figure className="portrait" data-parallax="-0.06">
                <div className="portrait-frame">
                  <Image
                    src={portrait}
                    alt="Portrait of Anna Lurene Sendaydiego in a cream embroidered barong"
                    fill
                    priority
                    placeholder="blur"
                    quality={90}
                    sizes="(min-width: 1024px) 420px, (min-width: 640px) 380px, 86vw"
                    className="portrait-img"
                  />
                </div>
                <SealBadge className="portrait-seal" />
                <figcaption className="portrait-cap label num">
                  <span>Philippines</span>
                  <span aria-hidden="true">·</span>
                  <span>Japan</span>
                  <span aria-hidden="true">·</span>
                  <span>Kenya</span>
                </figcaption>
              </figure>
            </div>
          </div>

          <a href="#profile" className="scroll-cue" aria-label="Scroll to profile">
            <span className="label">Scroll</span>
            <span className="scroll-line" aria-hidden="true" />
          </a>
        </section>

        {/* ---------- 01 Profile ---------- */}
        <section id="profile" aria-labelledby="profile-title" className="section">
          <div className="wrap">
            <SectionHead n="01" label="Profile" id="profile" />
            <div className="ledger">
              <div className="hidden lg:block" />
              <div className="grid gap-16 md:grid-cols-12">
                <div className="space-y-6 md:col-span-7">
                  <p className="lede" data-reveal="clip">
                    {profile.bio[0]}
                  </p>
                  {profile.bio.slice(1).map((p, i) => (
                    <p key={i} className="max-w-[60ch]" data-reveal style={stagger(i + 1)}>
                      {p}
                    </p>
                  ))}
                </div>
                <dl className="md:col-span-4 md:col-start-9">
                  {profile.facts.map((f, i) => (
                    <div
                      key={f.k}
                      className="border-t border-[var(--rule)] py-4 last:border-b"
                      data-reveal
                      style={stagger(i)}
                    >
                      <dt className="label">{f.k}</dt>
                      <dd className="num mt-1 font-medium text-[var(--heading)]">{f.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 02 Impact ---------- */}
        <section id="impact" aria-labelledby="impact-title" className="section band band-ruled on-band">
          <div className="wrap">
            <SectionHead n="02" label="Impact in numbers" id="impact" />
            <ul className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {metrics.map((m, i) => (
                <li
                  key={m.label}
                  className="border-t border-[rgba(156,175,136,0.45)] pt-6 lg:border-t-0 lg:border-l lg:px-8 lg:pt-0 lg:first:border-l-0 lg:first:pl-0"
                  data-reveal
                  style={stagger(i)}
                >
                  <p className="display num metric-num pb-4 text-[clamp(3.5rem,2.5rem+3vw,5.5rem)] font-light">
                    <span className="sr-only">
                      {m.prefix ?? ""}
                      {m.value}
                      {m.suffix ?? ""}
                    </span>
                    <span aria-hidden="true">
                      {m.prefix}
                      <span data-count={m.value} data-decimals={m.decimals}>
                        {m.value.toFixed(m.decimals)}
                      </span>
                      {m.suffix}
                      {m.note && <sup className="fn">{m.note}</sup>}
                    </span>
                  </p>
                  <p className="meta mt-3 max-w-[30ch] text-[0.9375rem]">{m.label}</p>
                </li>
              ))}
            </ul>

            <div className="mt-20 grid gap-8 lg:grid-cols-12">
              <p className="label lg:col-span-3" data-reveal>
                Quality held during the change<sup className="fn">a</sup>
              </p>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 lg:col-span-9">
                {qualityMetrics.map((q, i) => (
                  <div key={q.label} className="flex flex-col-reverse justify-end" data-reveal style={stagger(i)}>
                    <dt className="meta mt-1 text-sm">{q.label}</dt>
                    <dd className="display num text-3xl">{q.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rule mt-16" data-draw aria-hidden="true" />
            <p className="footnote mt-4">
              <sup className="fn !text-[0.75rem]">a</sup> Lesson Management Division, 2023–2026.
              Service continuity and quality sustained throughout.
            </p>
          </div>
        </section>

        {/* ---------- 03 Expertise ---------- */}
        <section
          id="expertise"
          aria-labelledby="expertise-title"
          className="section overflow-hidden"
        >
          <div className="watermark" data-drift="220" aria-hidden="true">
            Governance
          </div>
          <div className="wrap above-watermark">
            <SectionHead n="03" label="Expertise" id="expertise" />
            <div className="ledger">
              <p className="meta max-w-[28ch] text-sm" data-reveal>
                Core disciplines across controllership, governance, and reporting.
              </p>
              <ul className="x-grid bg-[color-mix(in_srgb,var(--bg)_82%,transparent)]">
                {expertise.map((x, i) => (
                  <li key={x} className="x-cell" data-reveal style={stagger(i % 3)}>
                    <span className="label num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="x-label">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- 04 Achievements (balance sheet) ---------- */}
        <section id="achievements" aria-labelledby="achievements-title" className="section section--tint">
          <div className="wrap">
            <SectionHead n="04" label="Selected achievements" id="achievements" />
            <div className="balance-head mb-4 hidden md:grid" aria-hidden="true">
              <span />
              <span className="label">What I brought</span>
              <span />
              <span className="label">What it delivered</span>
            </div>
            <ol>
              {achievements.map((a, i) => (
                <li key={a.n} className="balance-row" data-reveal style={stagger(i)}>
                  <span className="display num ach-n text-2xl text-[var(--meta)]">{a.n}</span>
                  <div>
                    <h3 className="display text-[clamp(1.75rem,1.4rem+1vw,2.25rem)]">
                      {a.title}
                      {a.footnote && <sup className="fn">1</sup>}
                    </h3>
                    <p className="mt-3 max-w-[48ch]">{a.body}</p>
                  </div>
                  <span className="balance-divider" aria-hidden="true" />
                  <div className="md:pt-2">
                    <p className="label mb-2 md:hidden">Delivered</p>
                    <p className="max-w-[44ch] font-medium text-[var(--heading)]">{a.result}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="footnote mt-6">
              <sup className="fn !text-[0.75rem]">1</sup> Tokyo Stock Exchange (TSE/JPX) Mothers
              Market listing support.
            </p>
          </div>
        </section>

        {/* ---------- 05 Experience ---------- */}
        <section id="experience" aria-labelledby="experience-title" className="section">
          <div className="wrap">
            <SectionHead n="05" label="Experience" id="experience" />

            <div className="ledger">
              <div data-reveal>
                <p className="label">2013 – Present</p>
                <p className="meta mt-2 text-sm">Seven appointments, one company.</p>
              </div>
              <div>
                <h3 className="display text-[clamp(2rem,1.5rem+1.8vw,3rem)]" data-reveal="clip">
                  RareJob Philippines, Inc.
                </h3>
                <p className="meta mt-2 max-w-[56ch]" data-reveal>
                  Philippine arm of a Tokyo-listed online English education group. Most recent
                  first; select a role for its key achievement.
                </p>

                <ol className="tl mt-10">
                  {rarejobRoles.map((r, i) => (
                    <li
                      key={r.title}
                      className={`tl-item ${r.dates.includes("Present") ? "is-current" : ""}`}
                      data-reveal
                      style={stagger(i)}
                    >
                      <span className="tl-date">{r.dates}</span>
                      <span className="tl-track" aria-hidden="true">
                        <span className="tl-dot" />
                      </span>
                      <details>
                        <summary>
                          <span>
                            <span className="tl-title block font-semibold text-[var(--text)]">
                              {r.title}
                            </span>
                            <span className="meta mt-1 block text-sm">{r.summary}</span>
                          </span>
                          <Chevron />
                        </summary>
                        <div className="tl-body">
                          <p className="label mb-2">Key achievement</p>
                          <p>{r.achievement}</p>
                        </div>
                      </details>
                    </li>
                  ))}
                </ol>

                <div className="mt-10 border-t border-[var(--rule)] pt-6" data-reveal>
                  <p className="label">Group scope · centralized finance</p>
                  <ul className="mt-4 grid gap-4 sm:grid-cols-3">
                    {groupScope.map((g) => (
                      <li key={g.name}>
                        <span className="block font-medium text-[var(--heading)]">{g.name}</span>
                        <span className="meta text-sm">{g.note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="ledger mt-24">
              <div data-reveal>
                <p className="label">2006 – 2012</p>
                <p className="meta mt-2 text-sm">Audit and controllership in Manila and Nairobi.</p>
              </div>
              <div>
                <h3 className="display text-[clamp(2rem,1.5rem+1.8vw,3rem)]" data-reveal="clip">
                  Earlier finance & audit
                </h3>
                <ol className="mt-8">
                  {earlierRoles.map((r, i) => (
                    <li
                      key={r.title}
                      className="grid grid-cols-[76px_1fr] gap-x-3 border-t border-[color-mix(in_srgb,var(--rule)_55%,transparent)] py-5 md:grid-cols-[140px_1fr_auto] md:gap-x-6"
                      data-reveal
                      style={stagger(i)}
                    >
                      <span className="num meta pt-0.5 text-[0.8125rem]">{r.dates}</span>
                      <div>
                        <p className="font-semibold">{r.title}</p>
                        <p className="text-[var(--heading)]">{r.org}</p>
                        <p className="meta mt-1 max-w-[60ch] text-sm">{r.detail}</p>
                      </div>
                      <span className="label col-start-2 mt-2 md:col-start-3 md:mt-1">
                        {r.place}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 06 Credentials ---------- */}
        <section id="credentials" aria-labelledby="credentials-title" className="section section--tint">
          <div className="wrap">
            <SectionHead n="06" label="Credentials" id="credentials" />
            <ul className="grid gap-6 md:grid-cols-3">
              {credentials.map((c, i) => (
                <li key={c.title} className="cert" data-reveal style={stagger(i)}>
                  <div className="flex items-start justify-between">
                    <Monogram size={52} className="cert-seal text-[var(--sage-deep)] dark:text-[var(--sage)]" />
                    <span className="display num text-3xl text-[var(--meta)]">{c.year}</span>
                  </div>
                  <p className="label mt-10">{c.short}</p>
                  <h3 className="display mt-2 text-[1.875rem] leading-tight">{c.title}</h3>
                  <p className="meta mt-3 text-sm">{c.meta}</p>
                </li>
              ))}
            </ul>
            <p className="meta mt-10 text-sm" data-reveal>
              <span className="label mr-3">Memberships</span>
              {memberships.join(" · ")}
            </p>
          </div>
        </section>

        {/* ---------- 07 Services ---------- */}
        <section id="services" aria-labelledby="services-title" className="section">
          <div className="wrap">
            <SectionHead n="07" label="How I can help" id="services" />
            <div className="ledger">
              <p className="meta max-w-[28ch] text-sm" data-reveal>
                For advisory and consulting inquiries.
              </p>
              <ul className="grid gap-12 md:grid-cols-3 md:gap-8">
                {services.map((s, i) => (
                  <li key={s.title} data-reveal style={stagger(i)}>
                    <div className="rule mb-6" aria-hidden="true" />
                    <span className="label num">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="display mt-3 text-[1.875rem] leading-tight">{s.title}</h3>
                    <p className="meta mt-3">{s.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- 08 Contact ---------- */}
        <section id="contact" aria-labelledby="contact-title" className="section band on-band">
          <div className="wrap">
            <SectionHead n="08" label="Contact" id="contact" />
            <div className="grid gap-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p
                  className="display text-[clamp(2.5rem,1.8rem+2.6vw,4rem)] font-light"
                  data-reveal="clip"
                >
                  Let&rsquo;s talk about steady, well-governed finance.
                </p>
                <p className="meta mt-6 max-w-[40ch]" data-reveal style={stagger(1)}>
                  I am open to conversations about senior finance leadership and advisory
                  engagements.
                </p>
                <div className="mt-10 flex flex-wrap gap-4" data-reveal style={stagger(2)}>
                  <a href={CV_URL} className="btn btn--ghost" download>
                    Download CV (PDF)
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    className="btn btn--ghost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn <span className="sr-only">(opens in a new tab)</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <p className="footnote mt-6" data-reveal style={stagger(3)}>
                  Or write directly:{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="underline decoration-[var(--sage)] underline-offset-4">
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7" data-reveal style={stagger(1)}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="band on-band border-t border-[rgba(156,175,136,0.45)]">
        <div className="wrap flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Monogram size={48} className="text-[var(--sage)]" />
            <div>
              <p className="display text-xl">{site.name}</p>
              <p className="label mt-1">CPA · CIA</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <p className="footnote num">
              © <Year />
            </p>
            <a href="#top" className="link-u !text-[var(--band-text)] text-sm">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
