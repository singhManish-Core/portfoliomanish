import { createFileRoute } from "@tanstack/react-router";

import { ComparisonLab } from "@/components/site/comparison-lab";
import {
  Container,
  Eyebrow,
  Reveal,
  Section,
  SectionHeader,
  Tag,
} from "@/components/site/primitives";
import { STUDIES } from "@/lib/site-content";

export const Route = createFileRoute("/evaluation-work")({
  head: () => ({
    meta: [
      { title: "Evaluation Work | Manish Kumar Singh" },
      {
        name: "description",
        content:
          "Independent AI evaluation studies covering LLM response quality benchmarking, factuality and hallucination auditing, English-Hindi language evaluation and technical response assessment.",
      },
      { property: "og:title", content: "Evaluation Work | Manish Kumar Singh" },
      {
        property: "og:description",
        content:
          "Four independent portfolio evaluation studies documented with method, criteria and findings.",
      },
    ],
  }),
  component: EvaluationWorkPage,
});

function EvaluationWorkPage() {
  return (
    <>
      <section className="border-b bg-background">
        <Container>
          <div className="max-w-3xl py-20 sm:py-24">
            <Eyebrow>Evaluation Work</Eyebrow>
            <h1 className="display-xl mt-6 text-balance">
              Studies in how AI answers hold up under scrutiny.
            </h1>
            <p className="lede mt-6">
              Four self-directed evaluation studies. Each one documents the rubric, the method and
              what the evaluation actually surfaced. They are independent portfolio research, not
              paid client engagements.
            </p>
          </div>
        </Container>
      </section>

      <Section tone="paper">
        <div className="space-y-5">
          {STUDIES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <article
                id={s.slug}
                className="scroll-mt-24 rounded-md border bg-card p-6 shadow-card sm:p-10"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="label-eyebrow text-muted-foreground">Project {s.n}</span>
                  <Tag tone="signal">{s.kind}</Tag>
                </div>

                <h2 className="display-lg mt-6 text-balance">{s.title}</h2>
                <p className="lede mt-5 max-w-3xl">{s.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="mt-10 grid gap-10 border-t pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
                  <div>
                    <p className="label-eyebrow text-muted-foreground">Evaluation Focus</p>
                    <ul className="mt-5 space-y-3 text-sm">
                      {s.focus.map((f) => (
                        <li key={f} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-2 size-1 shrink-0 rounded-full bg-signal"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="label-eyebrow text-muted-foreground">Method</p>
                    <ol className="mt-5 space-y-4">
                      {s.method.map((m, mi) => (
                        <li key={m} className="flex gap-5 text-sm leading-relaxed">
                          <span className="label-eyebrow shrink-0 pt-1 text-muted-foreground">
                            {String(mi + 1).padStart(2, "0")}
                          </span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="mt-10 rounded-sm border border-signal/30 bg-accent/50 p-6">
                  <p className="label-eyebrow text-accent-foreground">What the evaluation showed</p>
                  <p className="mt-3 text-sm leading-relaxed">{s.outcome}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="Evaluation Demonstration"
            title="Which answer would you trust?"
            lede="A worked example of the same rubric applied to two sample responses, with the rationale behind the preferred answer."
          />
        </Reveal>
        <div className="mt-12">
          <ComparisonLab />
        </div>
      </Section>
    </>
  );
}
