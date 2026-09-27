import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, Mail } from "lucide-react";

import { Container, Eyebrow, Reveal, Section, SectionHeader, Tag } from "@/components/site/primitives";
import { EXPERIENCE, LINKS, PERSON, SKILL_GROUPS, STUDIES } from "@/lib/site-content";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume | Manish Kumar Singh" },
      {
        name: "description",
        content:
          "AI Generalist resume: AI evaluation, research, English-Hindi language quality and two years of software engineering experience.",
      },
      { property: "og:title", content: "Resume | Manish Kumar Singh" },
      {
        property: "og:description",
        content:
          "AI Evaluation • Research • Language • Software Engineering — resume and contact details.",
      },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <>
      <section className="border-b bg-background">
        <Container>
          <div className="py-20 sm:py-24">
            <Eyebrow>Resume</Eyebrow>
            <h1 className="display-xl mt-6 max-w-3xl text-balance">AI Generalist Resume</h1>
            <p className="lede mt-6 max-w-2xl">
              AI Evaluation • Research • Language • Software Engineering
            </p>

            <div className="mt-10 rounded-md border bg-card p-6 shadow-lift sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <p className="display-md">{PERSON.name}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {PERSON.role} · {PERSON.location}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={LINKS.resume}
                    className="inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    <Download aria-hidden="true" className="size-4" />
                    Download Resume
                  </a>
                  <a
                    href={LINKS.linkedin}
                    className="inline-flex items-center gap-2 rounded-sm border border-foreground px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                  >
                    View LinkedIn
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </div>
              <p className="mt-6 border-t pt-5 text-xs text-muted-foreground">
                Resume file and LinkedIn URL are placeholders until you provide them.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16">
          <div className="space-y-12">
            <Reveal>
              <div>
                <p className="label-eyebrow text-muted-foreground">Profile</p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  Software Engineer with 2 years of experience in enterprise web application
                  development, applying structured problem solving, research, technical analysis
                  and written communication to the evaluation of AI-generated content across
                  English and Hindi.
                </p>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <div>
                <p className="label-eyebrow text-muted-foreground">Experience</p>
                <div className="mt-5 rounded-md border bg-card p-6 shadow-card sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h2 className="text-lg font-medium tracking-tight">
                      {EXPERIENCE.role} — {EXPERIENCE.company}
                    </h2>
                    <p className="label-eyebrow text-muted-foreground">{EXPERIENCE.period}</p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{EXPERIENCE.location}</p>
                  <ul className="mt-6 space-y-3 border-t pt-6">
                    {EXPERIENCE.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1 shrink-0 rounded-full bg-signal"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div>
                <p className="label-eyebrow text-muted-foreground">
                  Independent Evaluation Studies
                </p>
                <ul className="mt-5 space-y-3">
                  {STUDIES.map((s) => (
                    <li key={s.slug} className="rounded-md border bg-card p-5 shadow-card">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <h3 className="text-sm font-medium">{s.title}</h3>
                        <Tag tone="signal">{s.kind}</Tag>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal delay={60}>
              <div className="rounded-md border bg-card p-6 shadow-card">
                <p className="label-eyebrow text-muted-foreground">Contact</p>
                <ul className="mt-5 space-y-3 text-sm">
                  <li>
                    <a
                      href={LINKS.email}
                      className="inline-flex items-center gap-2 underline-offset-4 hover:underline"
                    >
                      <Mail aria-hidden="true" className="size-4 text-muted-foreground" />
                      {LINKS.emailLabel}
                    </a>
                  </li>
                  <li>
                    <a href={LINKS.linkedin} className="underline-offset-4 hover:underline">
                      LinkedIn — link to be added
                    </a>
                  </li>
                  <li>
                    <a href={LINKS.github} className="underline-offset-4 hover:underline">
                      GitHub — link to be added
                    </a>
                  </li>
                  <li>
                    <a
                      href={LINKS.engineeringPortfolio}
                      className="underline-offset-4 hover:underline"
                    >
                      Engineering Portfolio — link to be added
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            {SKILL_GROUPS.map((g, i) => (
              <Reveal key={g.title} delay={100 + i * 50}>
                <div className="rounded-md border bg-card p-6 shadow-card">
                  <p className="label-eyebrow text-muted-foreground">{g.title}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="Next Step"
            title="Let's improve the quality of AI."
            lede="Available for remote AI evaluation, AI training, research and language-quality projects."
          />
          <a
            href={LINKS.email}
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            <Mail aria-hidden="true" className="size-4" />
            Get in touch
          </a>
        </Reveal>
      </Section>
    </>
  );
}
