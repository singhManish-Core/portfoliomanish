import { Check, CircleSlash } from "lucide-react";
import { useState } from "react";

import { ScoreBar, Tag } from "@/components/site/primitives";
import { COMPARISON } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type Choice = "A" | "B" | null;

export function ComparisonLab() {
  const [choice, setChoice] = useState<Choice>(null);
  const revealed = choice !== null;
  const correct = choice === COMPARISON.preferred;

  const responses = [
    { key: "A" as const, ...COMPARISON.responseA },
    { key: "B" as const, ...COMPARISON.responseB },
  ];

  return (
    <div>
      <div className="rounded-md border bg-card p-5 shadow-card sm:p-6">
        <p className="label-eyebrow text-muted-foreground">Prompt</p>
        <p className="mt-3 font-mono text-sm leading-relaxed text-foreground">
          {COMPARISON.prompt}
        </p>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        {responses.map((r) => {
          const selected = choice === r.key;
          const isPreferred = revealed && COMPARISON.preferred === r.key;
          return (
            <div
              key={r.key}
              className={cn(
                "flex flex-col rounded-md border bg-card p-5 transition-shadow sm:p-6",
                selected && "ring-1 ring-signal",
                isPreferred ? "shadow-lift" : "shadow-card",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="label-eyebrow text-muted-foreground">{r.label}</p>
                {isPreferred ? (
                  <Tag tone="signal">Preferred</Tag>
                ) : revealed ? (
                  <Tag>Weaker</Tag>
                ) : null}
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed whitespace-pre-line">
                {r.text}
              </div>
              <button
                type="button"
                onClick={() => setChoice(r.key)}
                aria-pressed={selected}
                className={cn(
                  "mt-6 inline-flex items-center justify-center gap-2 rounded-sm border px-4 py-2.5 text-sm font-medium transition-colors",
                  selected
                    ? "border-foreground bg-foreground text-background"
                    : "border-border hover:border-foreground",
                )}
              >
                I would trust {r.label}
              </button>
            </div>
          );
        })}
      </div>

      <div
        className={cn(
          "mt-5 grid gap-5 transition-opacity duration-500 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]",
          revealed ? "opacity-100" : "opacity-55",
        )}
        aria-live="polite"
      >
        <div className="rounded-md border bg-card p-5 shadow-card sm:p-6">
          <p className="label-eyebrow text-muted-foreground">Rubric Scores — 1 to 5</p>
          <ul className="mt-5 space-y-4">
            {COMPARISON.scores.map((s) => (
              <li key={s.criterion}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium">{s.criterion}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    A {s.a} · B {s.b}
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-[1.25rem_1fr] items-center gap-x-3 gap-y-1.5">
                  <span className="font-mono text-[10px] text-muted-foreground">A</span>
                  <ScoreBar value={s.a} tone="muted" label={`Response A, ${s.criterion}: ${s.a} of 5`} />
                  <span className="font-mono text-[10px] text-muted-foreground">B</span>
                  <ScoreBar value={s.b} tone="signal" label={`Response B, ${s.criterion}: ${s.b} of 5`} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md border border-ink-border bg-ink p-5 text-ink-foreground shadow-card sm:p-6">
          <p className="label-eyebrow text-ink-muted">Preferred Response</p>
          <p className="display-md mt-3">Response {COMPARISON.preferred}</p>
          {revealed ? (
            <p className="mt-4 flex items-start gap-2 text-sm text-ink-muted">
              {correct ? (
                <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              ) : (
                <CircleSlash className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              )}
              {correct
                ? "Same conclusion. Here is the reasoning behind it."
                : "A different conclusion — here is the reasoning behind the rubric result."}
            </p>
          ) : (
            <p className="mt-4 text-sm text-ink-muted">
              Pick a response above to see the rationale.
            </p>
          )}
          <p className="mt-5 text-sm leading-relaxed text-ink-foreground/85">
            {COMPARISON.rationale}
          </p>
        </div>
      </div>
    </div>
  );
}
