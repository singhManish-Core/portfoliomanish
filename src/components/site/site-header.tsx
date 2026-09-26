import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Container } from "@/components/site/primitives";
import { LINKS, PERSON } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/evaluation-work", label: "Evaluation Work" },
  { to: "/methodology", label: "Methodology" },
  { to: "/failure-library", label: "AI Failure Library" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md transition-shadow",
        scrolled && "shadow-card",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span
              aria-hidden="true"
              className="grid size-7 shrink-0 place-items-center rounded-sm border border-border bg-card font-mono text-[11px] font-medium tracking-tight"
            >
              MS
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium tracking-tight">
                {PERSON.name}
              </span>
              <span className="label-eyebrow hidden text-muted-foreground sm:block">
                AI Evaluation • Research
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-sm px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={LINKS.engineeringPortfolio}
              className="ml-3 inline-flex items-center rounded-sm border border-foreground px-3.5 py-2 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              Engineering Portfolio
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-sm border border-border lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t bg-background lg:hidden">
          <Container>
            <nav aria-label="Mobile" className="flex flex-col py-3">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/70 py-3.5 text-base text-muted-foreground last:border-0"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={LINKS.engineeringPortfolio}
                onClick={() => setOpen(false)}
                className="mt-4 mb-4 inline-flex items-center justify-center rounded-sm border border-foreground px-4 py-2.5 text-sm font-medium"
              >
                Engineering Portfolio
              </a>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
