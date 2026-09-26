import { createFileRoute } from "@tanstack/react-router";

import {
  Container,
  Eyebrow,
  FlowSteps,
  Reveal,
  Section,
  SectionHeader,
} from "@/components/site/primitives";
import {
  EVALUATION_DIMENSIONS,
  FRAMEWORK_FLOW,
  FRAMEWORK_STEPS,
  RESEARCH_FLOW,
} from "@/lib/site-content";

export const Route = createFileRoute("/methodology")({
  head: () => ({
    meta: [
      { title: "Methodology | Manish Kumar Singh" },
      {
        name: "description",
        content:
          "A nine-step AI evaluation framework: understand the task, identify criteria, verify claims, compare alternatives, classify errors, score against a rubric and explain the judgment.",
      },
      { property: "og:title", content: "Methodology | Manish Kumar Singh" },
      {
        property: "og:description",
        content:
          "How I evaluate AI responses: observable criteria, verified claims, rubric scoring and documented reasoning.",
      },
    ],
  }),
  component: MethodologyPage,
});

function MethodologyPage() {
  return (
    <>
      <section className="border-b bg-ink text-ink-foreground">
        <Container>
          <div className="max-w-3xl py-20 sm:py-24">
            <Eyebrow tone="ink">Methodology</Eyebrow>
            <h1 className="display-xl mt-6 text-balance">My evaluation framework</h1>
            <p className="lede mt-6 text-ink-muted">
              I don't evaluate responses based on whether they simply sound convincing. I break
              each output into observable criteria, verify claims where necessary, compare
              alternatives against a defined rubric, identify failure modes and document the
              reasoning behind the final judgment.
            </p>
            <div className="mt-10">
              <FlowSteps steps={FRAMEWORK_FLOW} tone="ink" />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Reveal>
          <SectionHeader eyebrow="The Process" title="Nine steps, in order." />
        </Reveal>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-md border bg-border md:grid-cols-2 lg:grid-cols-3">
          {FRAMEWORK_STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 45}>
              <li className="h-full bg-card p-7">
                <p className="label-eyebrow text-signal">{step.n}</p>
                <h3 className="mt-5 text-lg font-medium tracking-tight">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="Rubric"
              title="What every score is made of."
              lede="Each dimension is scored independently on a 1–5 scale, with the observable evidence recorded alongside it. A single overall impression hides which part of the answer actually failed."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-md border bg-card shadow-card">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Evaluation dimensions and the question each answers</caption>
                <thead>
                  <tr className="border-b bg-secondary">
                    <th scope="col" className="label-eyebrow px-6 py-4 text-muted-foreground">
                      Dimension
                    </th>
                    <th scope="col" className="label-eyebrow px-6 py-4 text-muted-foreground">
                      Question it answers
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {EVALUATION_DIMENSIONS.map((d) => (
                    <tr key={d.title} className="border-b last:border-0">
                      <th scope="row" className="px-6 py-4 align-top font-medium">
                        {d.title}
                      </th>
                      <td className="px-6 py-4 align-top text-muted-foreground">{d.question}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              tone="ink"
              eyebrow="Research Process"
              title="Research before judgment."
              lede="When evaluating factual claims, I distinguish between plausible-sounding information and information supported by reliable evidence."
            />
          </Reveal>
          <Reveal delay={100}>
            <ol className="overflow-hidden rounded-md border border-ink-border">
              {RESEARCH_FLOW.map((s, i) => (
                <li
                  key={s}
                  className="flex items-center gap-5 border-b border-ink-border px-6 py-4 last:border-0"
                >
                  <span className="label-eyebrow w-6 text-ink-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium">{s}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
