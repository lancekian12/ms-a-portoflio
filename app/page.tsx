import type { CSSProperties } from "react";
import Image from "next/image";
import portrait from "./assets/portrait.jpg";
import {
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
  resumes,
  services,
  site,
} from "./content";
import { ContactForm } from "./components/ContactForm";
import { Effects } from "./components/Effects";
import { Monogram } from "./components/Monogram";
import { Nav } from "./components/Nav";

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

const heroFacts = [
  { v: "~20", k: "Years in finance" },
  { v: "CPA", k: "Since 2006" },
  { v: "CIA", k: "Since 2010" },
  { v: "3", k: "Countries" },
];

// Left column of every section: number, title, optional note. Sticks on desktop.
function SectionHead({
  n,
  title,
  id,
  note,
}: {
  n: string;
  title: string;
  id: string;
  note?: string;
}) {
  return (
    <div className="lg:sticky lg:top-[calc(var(--nav-h)+32px)] lg:self-start" data-reveal>
      <p className="sec-num num">{n}</p>
      <h2 id={`${id}-title`} className="sec-title">
        {title}
      </h2>
      <div className="rule rule--gold mt-6 w-10" aria-hidden="true" />
      {note && <p className="meta mt-6 max-w-[26ch] text-sm">{note}</p>}
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
          className="relative flex min-h-dvh items-center pt-[calc(var(--nav-h)+40px)] pb-28"
        >
          <div className="wrap grid items-center gap-20 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="label eyebrow intro" style={stagger(0)}>
                {hero.label}
              </p>
              <h1 className="display mt-8 text-[clamp(3.25rem,1.9rem+5.4vw,7rem)] font-light">
                <span className="mask-line">
                  <span style={stagger(1)}>Anna Lurene</span>
                </span>
                <span className="mask-line">
                  <span style={stagger(2)}>Sendaydiego</span>
                </span>
                <span className="sr-only">, {site.postNominals}</span>
              </h1>
              <p className="lede intro mt-8 max-w-[24ch]" style={stagger(4)}>
                {hero.line}
              </p>
              <p className="meta intro mt-5 max-w-[46ch]" style={stagger(5)}>
                {hero.sub}
              </p>
              <div
                className="intro mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
                style={stagger(6)}
              >
                <a href="#contact" className="btn">
                  Start a conversation
                  <span className="btn-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                <a href="#experience" className="link-u">
                  View experience
                </a>
              </div>

              <dl className="hero-facts intro mt-16 max-w-xl" style={stagger(7)}>
                {heroFacts.map((f) => (
                  <div key={f.k}>
                    <dt className="sr-only">{f.k}</dt>
                    <dd className="display num text-3xl">{f.v}</dd>
                    <dd className="label mt-1 !text-[0.6875rem]">{f.k}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <figure className="portrait mr-[18px]">
                <div className="portrait-frame">
                  <Image
                    src={portrait}
                    alt="Portrait of Anna Lurene Sendaydiego"
                    fill
                    priority
                    placeholder="blur"
                    quality={90}
                    sizes="(min-width: 1024px) 440px, (min-width: 640px) 400px, 88vw"
                    className="portrait-img"
                  />
                </div>
                <figcaption className="portrait-cap label num">
                  <span>Philippines</span>
                  <span aria-hidden="true" className="gold">
                    ·
                  </span>
                  <span>Japan</span>
                  <span aria-hidden="true" className="gold">
                    ·
                  </span>
                  <span>Kenya</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ---------- 01 Profile ---------- */}
        <section id="profile" aria-labelledby="profile-title" className="section section--tint">
          <div className="wrap split">
            <SectionHead n="01" title="Profile" id="profile" />
            <div className="grid gap-14 md:grid-cols-12">
              <div className="space-y-6 md:col-span-7">
                <p className="lede" data-reveal>
                  {profile.bio[0]}
                </p>
                {profile.bio.slice(1).map((p, i) => (
                  <p key={i} className="max-w-[60ch]" data-reveal style={stagger(i + 1)}>
                    {p}
                  </p>
                ))}
              </div>
              <dl className="md:col-span-5 md:pl-6">
                {profile.facts.map((f, i) => (
                  <div
                    key={f.k}
                    className="border-t border-[var(--line-strong)] py-4 last:border-b"
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
        </section>

        {/* ---------- 02 Impact ---------- */}
        <section id="impact" aria-labelledby="impact-title" className="section band on-band">
          <div className="wrap">
            <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
              <div>
                <p className="sec-num num">02</p>
                <h2 id="impact-title" className="sec-title">
                  Impact in numbers
                </h2>
              </div>
              <p className="meta max-w-[36ch] text-sm">
                Results from the Lesson Management transformation and two decades of finance
                leadership.
              </p>
            </div>
            <div className="rule mt-12 mb-14" data-draw aria-hidden="true" />

            <ul className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {metrics.map((m, i) => (
                <li
                  key={m.label}
                  className="lg:border-l lg:border-[var(--band-line)] lg:px-8 lg:first:border-l-0 lg:first:pl-0"
                  data-reveal
                  style={stagger(i)}
                >
                  <p className="display num text-[clamp(3.5rem,2.5rem+3vw,5.25rem)] font-light">
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
                      <span className="gold">{m.suffix}</span>
                      {m.note && <sup className="fn">{m.note}</sup>}
                    </span>
                  </p>
                  <p className="meta mt-3 max-w-[30ch] text-[0.9375rem]">{m.label}</p>
                </li>
              ))}
            </ul>

            <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[var(--band-line)] pt-10 md:grid-cols-4">
              {qualityMetrics.map((q, i) => (
                <div
                  key={q.label}
                  className="flex flex-col-reverse justify-end"
                  data-reveal
                  style={stagger(i)}
                >
                  <dt className="meta mt-1 text-sm">{q.label}</dt>
                  <dd className="display num text-3xl">{q.value}</dd>
                </div>
              ))}
            </dl>
            <p className="footnote mt-10">
              <sup className="fn !text-[0.75rem]">a</sup> Lesson Management Division, 2023–2026.
              Service continuity and quality sustained throughout.
            </p>
          </div>
        </section>

        {/* ---------- 03 Expertise ---------- */}
        <section id="expertise" aria-labelledby="expertise-title" className="section">
          <div className="wrap split">
            <SectionHead
              n="03"
              title="Expertise"
              id="expertise"
              note="Core disciplines across controllership, governance, and reporting."
            />
            <ul className="x-list">
              {expertise.map((x, i) => (
                <li key={x} className="x-item" data-reveal style={stagger(i % 3)}>
                  <span className="label num gold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="x-label">{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- 04 Achievements ---------- */}
        <section
          id="achievements"
          aria-labelledby="achievements-title"
          className="section section--tint"
        >
          <div className="wrap split">
            <SectionHead n="04" title="Selected achievements" id="achievements" />
            <div>
              <ol className="ach-grid">
                {achievements.map((a, i) => (
                  <li key={a.n} className="ach-card" data-reveal style={stagger(i % 2)}>
                    <div className="flex items-center justify-between">
                      <span className="display num gold text-2xl">{a.n}</span>
                      <span className="ach-bar" aria-hidden="true" />
                    </div>
                    <h3 className="display mt-8 text-[clamp(1.75rem,1.4rem+1vw,2.25rem)]">
                      {a.title}
                      {a.footnote && <sup className="fn">1</sup>}
                    </h3>
                    <p className="mt-4">{a.body}</p>
                    <p className="mt-6 border-t border-[var(--line)] pt-5 text-[0.9375rem]">
                      <span className="label gold mb-1 block">Delivered</span>
                      <span className="font-medium text-[var(--heading)]">{a.result}</span>
                    </p>
                  </li>
                ))}
              </ol>
              <p className="footnote mt-6">
                <sup className="fn !text-[0.75rem]">1</sup> Tokyo Stock Exchange (TSE/JPX)
                Mothers Market listing support.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- 05 Experience ---------- */}
        <section id="experience" aria-labelledby="experience-title" className="section">
          <div className="wrap split">
            <SectionHead
              n="05"
              title="Experience"
              id="experience"
              note="Seven appointments at one company, after six years of audit and controllership."
            />
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-3" data-reveal>
                <h3 className="display text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)]">
                  RareJob Philippines, Inc.
                </h3>
                <span className="label num">2013 – Present</span>
              </div>
              <p className="meta mt-2 max-w-[56ch] text-sm" data-reveal>
                Most recent first. Select a role for its key achievement.
              </p>

              <ol className="tl mt-8">
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
                          <span className="block font-semibold text-[var(--heading)]">
                            {r.title}
                          </span>
                          <span className="meta mt-1 block text-sm">{r.summary}</span>
                        </span>
                        <Chevron />
                      </summary>
                      <div className="tl-body">
                        <p className="label gold mb-2">Key achievement</p>
                        <p>{r.achievement}</p>
                      </div>
                    </details>
                  </li>
                ))}
              </ol>

              <div className="mt-10" data-reveal>
                <p className="label">Group scope · centralized finance</p>
                <ul className="mt-4 grid gap-5 sm:grid-cols-3">
                  {groupScope.map((g) => (
                    <li key={g.name} className="border-l border-[var(--gold)] pl-4">
                      <span className="block font-medium text-[var(--heading)]">{g.name}</span>
                      <span className="meta text-sm">{g.note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="mt-20 flex flex-wrap items-baseline justify-between gap-3"
                data-reveal
              >
                <h3 className="display text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)]">
                  Earlier finance & audit
                </h3>
                <span className="label num">2006 – 2012</span>
              </div>
              <ol className="mt-6 border-t border-[var(--line)]">
                {earlierRoles.map((r, i) => (
                  <li
                    key={r.title}
                    className="grid grid-cols-[76px_1fr] gap-x-3 border-b border-[var(--line)] py-5 md:grid-cols-[140px_1fr_auto] md:gap-x-6"
                    data-reveal
                    style={stagger(i)}
                  >
                    <span className="num meta pt-0.5 text-[0.8125rem]">{r.dates}</span>
                    <div>
                      <p className="font-semibold text-[var(--heading)]">{r.title}</p>
                      <p>{r.org}</p>
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
        </section>

        {/* ---------- 06 Credentials ---------- */}
        <section
          id="credentials"
          aria-labelledby="credentials-title"
          className="section section--tint"
        >
          <div className="wrap split">
            <SectionHead n="06" title="Credentials" id="credentials" />
            <div>
              <ul className="grid gap-5 md:grid-cols-3">
                {credentials.map((c, i) => (
                  <li key={c.title} className="cert" data-reveal style={stagger(i)}>
                    <div className="flex items-start justify-between">
                      <Monogram size={44} className="text-[var(--accent)]" />
                      <span className="display num text-2xl text-[var(--meta)]">{c.year}</span>
                    </div>
                    <p className="label gold mt-10">{c.short}</p>
                    <h3 className="display mt-2 text-[1.75rem] leading-tight">{c.title}</h3>
                    <p className="meta mt-3 text-sm">{c.meta}</p>
                  </li>
                ))}
              </ul>
              <p className="meta mt-10 text-sm" data-reveal>
                <span className="label mr-3">Memberships</span>
                {memberships.join(" · ")}
              </p>
            </div>
          </div>
        </section>

        {/* ---------- 07 Services ---------- */}
        <section id="services" aria-labelledby="services-title" className="section">
          <div className="wrap split">
            <SectionHead
              n="07"
              title="How I can help"
              id="services"
              note="For advisory and consulting inquiries."
            />
            <ul className="grid gap-12 md:grid-cols-3 md:gap-10">
              {services.map((s, i) => (
                <li
                  key={s.title}
                  className="border-t border-[var(--line-strong)] pt-8"
                  data-reveal
                  style={stagger(i)}
                >
                  <span className="label num gold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display mt-4 text-[1.75rem] leading-tight">{s.title}</h3>
                  <p className="meta mt-3">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- 08 Contact ---------- */}
        <section id="contact" aria-labelledby="contact-title" className="section band on-band">
          <div className="wrap">
            <div data-reveal>
              <p className="sec-num num">08</p>
              <h2 id="contact-title" className="label mt-2">
                Contact
              </h2>
            </div>
            <div className="mt-10 grid gap-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p
                  className="display text-[clamp(2.5rem,1.8rem+2.6vw,4rem)] font-light"
                  data-reveal
                >
                  Let&rsquo;s talk about steady, well-governed finance.
                </p>
                <p className="meta mt-6 max-w-[40ch]" data-reveal style={stagger(1)}>
                  I am open to conversations about senior finance leadership and advisory
                  engagements.
                </p>

                <div className="mt-10" data-reveal style={stagger(2)}>
                  <p className="label">Email</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="email-link mt-2 inline-block text-[clamp(1.125rem,0.95rem+0.8vw,1.5rem)]"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <div className="mt-12" data-reveal style={stagger(3)}>
                  <p className="label">Download résumé</p>
                  <ul className="mt-4">
                    {resumes.map((r) => (
                      <li key={r.href}>
                        <a href={r.href} download className="resume-row">
                          <span className="resume-tag label num gold">{r.version}</span>
                          <span className="min-w-0 flex-1">
                            <span className="block font-semibold text-[var(--band-text)]">
                              {r.title}
                            </span>
                            <span className="meta block text-sm">{r.description}</span>
                            <span className="footnote mt-1 block">{r.meta}</span>
                          </span>
                          <svg
                            className="resume-icon"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              d="M10 3v11m0 0l-4.5-4.5M10 14l4.5-4.5M4 17h12"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.25"
                            />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {LINKEDIN_URL && (
                  <a
                    href={LINKEDIN_URL}
                    className="link-u mt-10 !text-[var(--band-text)]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn <span className="sr-only">(opens in a new tab)</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
              <div className="lg:col-span-6 lg:col-start-7" data-reveal style={stagger(1)}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="on-band bg-[var(--navy-deep)] text-[var(--white)]">
        <div className="wrap flex flex-col gap-8 border-t border-[var(--band-line)] py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Monogram size={44} className="text-[var(--gold)]" />
            <div>
              <p className="display text-xl !text-[var(--white)]">{site.name}</p>
              <p className="label mt-1 !text-[var(--mist)]">CPA · CIA</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <p className="num text-[0.8125rem] text-[var(--mist)]">
              © <Year />
            </p>
            <a href="#top" className="link-u !text-[var(--white)] text-sm">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
