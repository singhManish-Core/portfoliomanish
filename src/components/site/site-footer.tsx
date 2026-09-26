import { Link } from "@tanstack/react-router";

import { Container } from "@/components/site/primitives";
import { LINKS, PERSON } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-border bg-ink text-ink-foreground">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="display-md">{PERSON.name}</p>
            <p className="label-eyebrow mt-3 text-ink-muted">{PERSON.tagline}</p>
            <p className="mt-4 text-sm text-ink-muted">{PERSON.location}</p>
          </div>

          <div>
            <p className="label-eyebrow text-ink-muted">Pages</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { to: "/evaluation-work", label: "Evaluation Work" },
                { to: "/methodology", label: "Methodology" },
                { to: "/failure-library", label: "AI Failure Library" },
                { to: "/about", label: "About" },
                { to: "/resume", label: "Resume" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-ink-muted transition-colors hover:text-ink-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-eyebrow text-ink-muted">Elsewhere</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={LINKS.linkedin} className="text-ink-muted transition-colors hover:text-ink-foreground">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={LINKS.github} className="text-ink-muted transition-colors hover:text-ink-foreground">
                  GitHub
                </a>
              </li>
              <li>
                <Link to="/resume" className="text-ink-muted transition-colors hover:text-ink-foreground">
                  Resume
                </Link>
              </li>
              <li>
                <a
                  href={LINKS.engineeringPortfolio}
                  className="text-ink-muted transition-colors hover:text-ink-foreground"
                >
                  Engineering Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-ink-border py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {PERSON.name}
          </p>
          <p>Evaluation studies on this site are independent portfolio research.</p>
        </div>
      </Container>
    </footer>
  );
}
