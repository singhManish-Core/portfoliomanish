import { Plus } from "lucide-react";
import { useState } from "react";

import { Tag } from "@/components/site/primitives";
import { FAILURES, type Failure } from "@/lib/site-content";
import { cn } from "@/lib/utils";

function severityTone(severity: Failure["severity"]) {
  switch (severity) {
    case "Critical":
      return "text-severe";
    case "High":
      return "text-severe/85";
    case "Moderate":
      return "text-caution";
    default:
      return "text-muted-foreground";
  }
}

function FailureCard({ failure }: { failure: Failure }) {
  const [open, setOpen] = useState(false);
  const panelId = `failure-panel-${failure.id}`;

  return (
    <article
      className={cn(
        "rounded-md border bg-card transition-shadow",
        open ? "shadow-lift" : "shadow-card hover:shadow-lift",
      )}
    >
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
        >
          <span>
            <span className="block text-base font-medium tracking-tight">{failure.name}</span>
            <span className="mt-1.5 block text-sm text-muted-foreground">{failure.summary}</span>
          </span>
          <span className="flex shrink-0 flex-col items-end gap-2">
            <span className={cn("label-eyebrow", severityTone(failure.severity))}>
              {failure.severity}
            </span>
            <Plus
              aria-hidden="true"
              className={cn(
                "size-4 text-muted-foreground transition-transform duration-300",
                open && "rotate-45",
              )}
            />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        hidden={!open}
        className="border-t px-5 pt-5 pb-6 sm:px-6"
      >
        <dl className="space-y-5 text-sm">
          <div>
            <dt className="label-eyebrow text-muted-foreground">Prompt</dt>
            <dd className="mt-2 font-mono text-[13px] leading-relaxed">{failure.prompt}</dd>
          </div>
          <div>
            <dt className="label-eyebrow text-muted-foreground">AI Response</dt>
            <dd className="mt-2 rounded-sm border border-severe/25 bg-severe/5 p-4 leading-relaxed whitespace-pre-line">
              {failure.response}
            </dd>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="label-eyebrow text-muted-foreground">Failure Type</dt>
              <dd className="mt-2">{failure.failureType}</dd>
            </div>
            <div>
              <dt className="label-eyebrow text-muted-foreground">Severity</dt>
              <dd className={cn("mt-2 font-medium", severityTone(failure.severity))}>
                {failure.severity}
              </dd>
            </div>
          </div>
          <div>
            <dt className="label-eyebrow text-muted-foreground">Why It Failed</dt>
            <dd className="mt-2 leading-relaxed">{failure.why}</dd>
          </div>
          <div>
            <dt className="label-eyebrow text-muted-foreground">Improved Response</dt>
            <dd className="mt-2 rounded-sm border border-signal/30 bg-accent/60 p-4 leading-relaxed whitespace-pre-line">
              {failure.improved}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function FailureLibraryList({ limit }: { limit?: number }) {
  const items = limit ? FAILURES.slice(0, limit) : FAILURES;
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((f) => (
        <FailureCard key={f.id} failure={f} />
      ))}
    </div>
  );
}

export function FailureTagRow() {
  return (
    <div className="flex flex-wrap gap-2">
      {FAILURES.map((f) => (
        <Tag key={f.id}>{f.name}</Tag>
      ))}
    </div>
  );
}
