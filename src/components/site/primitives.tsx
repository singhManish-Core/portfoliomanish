import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[78rem] px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "paper" | "ink";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-t py-16 sm:py-24 lg:py-28",
        tone === "default" && "bg-background",
        tone === "paper" && "bg-paper",
        tone === "ink" && "border-ink-border bg-ink text-ink-foreground",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: "default" | "ink";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "label-eyebrow flex items-center gap-3",
        tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn("h-px w-6", tone === "ink" ? "bg-ink-border" : "bg-border")}
      />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lede,
  tone = "default",
  className,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  tone?: "default" | "ink";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2 className={cn("display-lg mt-5 text-balance", tone === "ink" && "text-ink-foreground")}>
        {title}
      </h2>
      {lede ? (
        <p className={cn("lede mt-5", tone === "ink" && "text-ink-muted")}>{lede}</p>
      ) : null}
    </div>
  );
}

export function Tag({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "ink" | "signal";
}) {
  return (
    <span
      className={cn(
        "label-eyebrow inline-flex items-center rounded-full border px-2.5 py-1",
        tone === "default" && "border-border bg-secondary text-secondary-foreground",
        tone === "signal" && "border-transparent bg-accent text-accent-foreground",
        tone === "ink" && "border-ink-border text-ink-muted",
      )}
    >
      {children}
    </span>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        className,
      )}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

export function ScoreBar({
  value,
  max = 5,
  tone = "default",
  label,
}: {
  value: number;
  max?: number;
  tone?: "default" | "signal" | "muted";
  label?: string;
}) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    const target = (value / max) * 100;
    if (!node || typeof IntersectionObserver === "undefined") {
      setWidth(target);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWidth(target);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, max]);

  return (
    <div
      ref={ref}
      className="h-1.5 w-full overflow-hidden rounded-full bg-border"
      role="img"
      aria-label={label ?? `Score ${value} out of ${max}`}
    >
      <div
        className={cn(
          "h-full rounded-full transition-[width] duration-[900ms] ease-out motion-reduce:transition-none",
          tone === "signal" && "bg-signal",
          tone === "default" && "bg-foreground",
          tone === "muted" && "bg-muted-foreground",
        )}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export function FlowSteps({
  steps,
  tone = "default",
}: {
  steps: string[];
  tone?: "default" | "ink";
}) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2">
          <span
            className={cn(
              "label-eyebrow rounded-sm border px-2.5 py-1.5",
              tone === "ink"
                ? "border-ink-border text-ink-foreground"
                : "border-border bg-card text-foreground",
            )}
          >
            {step}
          </span>
          {i < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className={cn(
                "text-xs",
                tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
              )}
            >
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
