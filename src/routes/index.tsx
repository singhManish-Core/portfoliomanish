import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";

import { ComparisonLab } from "@/components/site/comparison-lab";
import { FailureLibraryList } from "@/components/site/failure-library";
import {
  Container,
  Eyebrow,
  FlowSteps,
  Reveal,
  Section,
  SectionHeader,
  Tag,
} from "@/components/site/primitives";
import {
  DOMAINS,
  EVALUATION_DIMENSIONS,
  FRAMEWORK_FLOW,
  LANGUAGE_DIMENSIONS,
  LINKS,
  RESEARCH_FLOW,
  STUDIES,
  TECH_STACK,
  TRUST_METRICS,
} from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manish Kumar Singh | AI Generalist & AI Evaluator" },
      {
        name: "description",
        content:
          "AI Generalist and Software Engineer specializing in AI response evaluation, research, reasoning, English-Hindi language quality and technical content assessment.",
      },
      {
        property: "og:title",
        content: "Manish Kumar Singh | AI Generalist & AI Evaluator",
      },
      {
        property: "og:description",
        content:
          "Structured evaluation of AI responses across accuracy, reasoning, relevance, instruction following, clarity and usefulness.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-background">
        <div
          aria-hidden="true"
          className="rule-grid pointer-events-none absolute inset-0 opacity-60"
        />
        <Container className="relative">
          <div className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16 lg:py-32">
            <div className="reveal">
              <Eyebrow>AI Evaluation • Research • Language</Eyebrow>
              <h1 className="display-xl mt-7 text-balance">
                Making AI responses more accurate, useful and human.
              </h1>
              <p className="lede mt-7 max-w-2xl">
                Software Engineer with 2 years of professional experience, combining structured
                reasoning, research, language quality and technical analysis to evaluate
                AI-generated content.
              </p>
              <p className="label-eyebrow mt-6 text-muted-foreground">
                AI Generalist • Response Evaluation • Research • English / Hindi • Software
                Engineering
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  to="/evaluation-work"
                  className="group inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Explore Evaluation Work
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 rounded-sm border border-foreground px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  <Download aria-hidden="true" className="size-4" />
                  Download Resume
                </Link>
                <a
                  href={LINKS.engineeringPortfolio}
                  className="inline-flex items-center gap-1.5 px-1 py-3 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  Engineering Portfolio
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            </div>

            <div className="reveal self-end" style={{ animationDelay: "120ms" }}>
              <div className="rounded-md border bg-card p-6 shadow-lift">
                <p className="label-eyebrow text-muted-foreground">Evaluation Snapshot</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Every response is read as a set of checkable claims, followed instructions and
                  reasoning steps — not as one overall impression.
                </p>
                <dl className="mt-6 divide-y border-t">
                  {EVALUATION_DIMENSIONS.slice(0, 4).map((d) => (
                    <div key={d.title} className="flex items-baseline justify-between gap-4 py-3">
                      <dt className="text-sm font-medium">{d.title}</dt>
                      <dd className="font-mono text-[11px] text-muted-foreground">Scored 1–5</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust metrics */}
      <section className="border-b bg-paper">
        <Container>
          <dl className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
            {TRUST_METRICS.map((m) => (
              <div
                key={m.value}
                className="py-8 first:pt-8 sm:px-8 sm:py-10 sm:first:pl-0"
              >
                <dt className="display-md">{m.value}</dt>
                <dd className="label-eyebrow mt-2 text-muted-foreground">{m.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Dimensions */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="Evaluation Dimensions"
            title="Beyond “does it sound good?”"
            lede="A convincing AI response is not necessarily a correct one. I evaluate responses through multiple dimensions to determine whether they are accurate, relevant, well-reasoned and useful."
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {EVALUATION_DIMENSIONS.map((d, i) => (
            <Reveal key={d.title} delay={i * 60}>
              <div className="group h-full bg-card p-7 transition-colors hover:bg-accent/40">
                <p className="label-eyebrow text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-lg font-medium tracking-tight">{d.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {d.question}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Methodology teaser */}
      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal>
            <SectionHeader
              tone="ink"
              eyebrow="Methodology"
              title="My evaluation framework"
              lede="I don't evaluate responses based on whether they simply sound convincing. I break each output into observable criteria, verify claims where necessary, compare alternatives against a defined rubric, identify failure modes and document the reasoning behind the final judgment."
            />
            <Link
              to="/methodology"
              className="mt-8 inline-flex items-center gap-2 border-b border-ink-border pb-1 text-sm text-ink-foreground transition-colors hover:border-ink-foreground"
            >
              See the nine-step process
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-md border border-ink-border p-6 sm:p-8">
              <p className="label-eyebrow text-ink-muted">Process</p>
              <div className="mt-6">
                <FlowSteps steps={FRAMEWORK_FLOW} tone="ink" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Featured studies */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="Featured Evaluation Studies"
            title="Independent studies, documented end to end."
            lede="Self-directed evaluation work built to show method and judgment. These are portfolio research studies, not commercial client engagements."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {STUDIES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <Link
                to="/evaluation-work"
                hash={s.slug}
                className="group flex h-full flex-col rounded-md border bg-card p-6 shadow-card transition-shadow hover:shadow-lift sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="label-eyebrow text-muted-foreground">Project {s.n}</span>
                  <Tag tone="signal">{s.kind}</Tag>
                </div>
                <h3 className="display-md mt-6">{s.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  Read the study
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Comparison lab */}
      <Section tone="paper" id="comparison">
        <Reveal>
          <SectionHeader
            eyebrow="Evaluation Demonstration"
            title="Which answer would you trust?"
            lede="Two sample responses to the same prompt. Choose one, then compare your judgment with the rubric result and rationale. Both responses are portfolio-created examples."
          />
        </Reveal>
        <div className="mt-12">
          <ComparisonLab />
        </div>
      </Section>

      {/* Failure library teaser */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="AI Failure Library"
            title="How AI gets it wrong"
            lede="A growing library of common AI failure patterns identified through structured evaluation. Each entry records the prompt, the response, the failure type, why it failed, severity and an improved answer."
          />
        </Reveal>
        <div className="mt-12">
          <FailureLibraryList limit={4} />
        </div>
        <Reveal>
          <Link
            to="/failure-library"
            className="mt-8 inline-flex items-center gap-2 border-b border-border pb-1 text-sm font-medium transition-colors hover:border-foreground"
          >
            View all ten failure patterns
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>
      </Section>

      {/* Language */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="Language Evaluation"
              title="Language is more than grammar."
              lede="A technically correct translation can still sound unnatural. My bilingual evaluation considers meaning, grammar, naturalness, tone, cultural context and whether the response feels appropriate to a native speaker."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { title: "English", items: LANGUAGE_DIMENSIONS.english },
                { title: "Hindi", items: LANGUAGE_DIMENSIONS.hindi },
              ].map((col) => (
                <div key={col.title} className="rounded-md border bg-card p-6 shadow-card">
                  <p className="label-eyebrow text-muted-foreground">{col.title}</p>
                  <ul className="mt-5 space-y-3 text-sm">
                    {col.items.map((item) => (
                      <li key={item} className="flex gap-3 border-b border-border/70 pb-3 last:border-0 last:pb-0">
                        <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-signal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Research */}
      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <SectionHeader
              tone="ink"
              eyebrow="Research"
              title="Research before judgment."
              lede="When evaluating factual claims, I distinguish between plausible-sounding information and information supported by reliable evidence."
            />
          </Reveal>
          <Reveal delay={100}>
            <ol className="space-y-px overflow-hidden rounded-md border border-ink-border">
              {RESEARCH_FLOW.map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-5 border-b border-ink-border px-6 py-4 last:border-0"
                >
                  <span className="label-eyebrow w-6 text-ink-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      {/* Technical */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="Technical Evaluation"
              title="Technical enough to challenge technical answers."
              lede="My software-engineering background allows me to evaluate AI-generated technical content from a practical application-development perspective."
            />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              I focus on whether generated explanations and solutions are technically correct,
              complete, practical and aligned with the requested requirements.
            </p>
            <a
              href={LINKS.engineeringPortfolio}
              className="mt-8 inline-flex items-center gap-2 rounded-sm border border-foreground px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              View Engineering Portfolio
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-md border bg-border">
              {TECH_STACK.map((t) => (
                <li key={t} className="bg-card px-5 py-5 text-sm font-medium">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Domain knowledge */}
      <Section tone="paper">
        <Reveal>
          <SectionHeader
            eyebrow="Domain Knowledge"
            title="A generalist perspective."
            lede="My broad interests allow me to approach evaluation tasks across technology, sports, language, culture, literature, philosophy and everyday information."
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map((d, i) => (
            <Reveal key={d.name} delay={i * 50}>
              <div className="h-full bg-card p-7">
                <h3 className="text-base font-medium tracking-tight">{d.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section tone="ink" id="contact">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <SectionHeader
              tone="ink"
              eyebrow="Contact"
              title="Let's improve the quality of AI."
              lede="Available for remote AI evaluation, AI training, research and language-quality work."
            />
          </Reveal>
          <Reveal delay={100}>
            <ul className="overflow-hidden rounded-md border border-ink-border">
              {[
                { label: "Email", value: LINKS.emailLabel, href: LINKS.email },
                { label: "LinkedIn", value: "Profile link to be added", href: LINKS.linkedin },
                { label: "GitHub", value: "Profile link to be added", href: LINKS.github },
                {
                  label: "Engineering Portfolio",
                  value: "Portfolio link to be added",
                  href: LINKS.engineeringPortfolio,
                },
              ].map((row) => (
                <li key={row.label} className="border-b border-ink-border last:border-0">
                  <a
                    href={row.href}
                    className="group flex items-center justify-between gap-5 px-6 py-5 transition-colors hover:bg-ink-foreground/5"
                  >
                    <span>
                      <span className="label-eyebrow block text-ink-muted">{row.label}</span>
                      <span className="mt-1.5 block text-sm">{row.value}</span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-ink-muted transition-transform group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
