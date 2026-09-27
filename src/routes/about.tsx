import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Container, Eyebrow, Reveal, Section, SectionHeader, Tag } from "@/components/site/primitives";
import { DOMAINS, EXPERIENCE, LINKS, SKILL_GROUPS } from "@/lib/site-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Manish Kumar Singh" },
      {
        name: "description",
        content:
          "Software Engineer with 2 years of enterprise web application experience, applying structured problem solving, research and technical analysis to AI evaluation work.",
      },
      { property: "og:title", content: "About | Manish Kumar Singh" },
      {
        property: "og:description",
        content:
          "Background, professional experience and the skills behind my AI evaluation and language-quality work.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b bg-background">
        <Container>
          <div className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <Eyebrow>About</Eyebrow>
              <h1 className="display-xl mt-6 text-balance">
                An engineer's judgment, applied to AI output.
              </h1>
              <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  I am a Software Engineer with 2 years of professional experience in enterprise
                  web application development. My work combines structured problem solving,
                  research, technical analysis and clear communication.
                </p>
                <p>
                  I'm applying those strengths to AI evaluation — examining whether AI responses
                  are accurate, relevant, logically sound, instruction-compliant and genuinely
                  useful.
                </p>
                <p>
                  I'm particularly interested in generalist AI evaluation, research, English/Hindi
                  language quality, content evaluation and technical response assessment.
                </p>
              </div>
            </div>
            <div className="self-end">
              <div className="rounded-md border bg-card p-6 shadow-card">
                <p className="label-eyebrow text-muted-foreground">At a glance</p>
                <dl className="mt-5 divide-y border-t text-sm">
                  {[
                    { k: "Based in", v: "Bengaluru, India" },
                    { k: "Experience", v: "2+ years, Software Engineering" },
                    { k: "Languages", v: "English, Hindi" },
                    { k: "Availability", v: "Remote evaluation projects" },
                  ].map((row) => (
                    <div key={row.k} className="flex items-baseline justify-between gap-5 py-3">
                      <dt className="text-muted-foreground">{row.k}</dt>
                      <dd className="text-right font-medium">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="paper">
        <Reveal>
          <SectionHeader
            eyebrow="Professional Experience"
            title="Where the judgment comes from."
            lede="Day-to-day engineering work built the habits evaluation depends on: reading requirements precisely, isolating cause, and explaining a decision in writing."
          />
        </Reveal>
        <Reveal delay={80}>
          <article className="mt-12 rounded-md border bg-card p-6 shadow-card sm:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <h3 className="display-md">
                  {EXPERIENCE.role} — {EXPERIENCE.company}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{EXPERIENCE.location}</p>
              </div>
              <p className="label-eyebrow text-muted-foreground">{EXPERIENCE.period}</p>
            </div>
            <ul className="mt-8 grid gap-4 border-t pt-8 sm:grid-cols-2">
              {EXPERIENCE.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed">
                  <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-signal" />
                  {b}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHeader eyebrow="Capabilities" title="Skills in the areas evaluation work draws on." />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <div className="h-full rounded-md border bg-card p-6 shadow-card sm:p-8">
                <p className="label-eyebrow text-muted-foreground">{g.title}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
          <Reveal>
            <SectionHeader
              tone="ink"
              eyebrow="Domain Knowledge"
              title="A generalist perspective."
              lede="My broad interests allow me to approach evaluation tasks across technology, sports, language, culture, literature, philosophy and everyday information."
            />
            <a
              href={LINKS.engineeringPortfolio}
              className="mt-8 inline-flex items-center gap-2 border-b border-ink-border pb-1 text-sm transition-colors hover:border-ink-foreground"
            >
              View Engineering Portfolio
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </Reveal>
          <Reveal delay={100}>
            <ul className="overflow-hidden rounded-md border border-ink-border">
              {DOMAINS.map((d) => (
                <li key={d.name} className="border-b border-ink-border px-6 py-5 last:border-0">
                  <p className="text-sm font-medium">{d.name}</p>
                  <p className="mt-1 text-sm text-ink-muted">{d.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
