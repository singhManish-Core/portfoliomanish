import { createFileRoute } from "@tanstack/react-router";

import { FailureLibraryList, FailureTagRow } from "@/components/site/failure-library";
import { Container, Eyebrow, Reveal, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/failure-library")({
  head: () => ({
    meta: [
      { title: "AI Failure Library | Manish Kumar Singh" },
      {
        name: "description",
        content:
          "A library of common AI failure patterns — hallucination, false confidence, instruction failure, logical contradiction and more — each with prompt, response, cause, severity and an improved answer.",
      },
      { property: "og:title", content: "AI Failure Library | Manish Kumar Singh" },
      {
        property: "og:description",
        content:
          "Ten documented AI failure patterns identified through structured evaluation, each with a corrected response.",
      },
    ],
  }),
  component: FailureLibraryPage,
});

function FailureLibraryPage() {
  return (
    <>
      <section className="border-b bg-background">
        <Container>
          <div className="max-w-3xl py-20 sm:py-24">
            <Eyebrow>AI Failure Library</Eyebrow>
            <h1 className="display-xl mt-6 text-balance">How AI gets it wrong</h1>
            <p className="lede mt-6">
              A growing library of common AI failure patterns identified through structured
              evaluation. Every entry records the prompt, the response, the failure type, why it
              failed, its severity and an improved answer.
            </p>
            <div className="mt-10">
              <FailureTagRow />
            </div>
          </div>
        </Container>
      </section>

      <Section tone="paper">
        <Reveal>
          <p className="label-eyebrow text-muted-foreground">
            Select a pattern to expand the full evaluation
          </p>
        </Reveal>
        <div className="mt-8">
          <FailureLibraryList />
        </div>
      </Section>
    </>
  );
}
