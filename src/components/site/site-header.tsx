import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import portrait from "@/assets/manish-kumar-singh-portrait.jpeg";
import { Container } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
import { LINKS, PERSON } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const NAV = [
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
        "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl transition-shadow",
        scrolled && "shadow-card",
      )}
    >
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-4 py-2.5 xl:min-h-24 xl:gap-6">
          <Link
            to="/"
            className="group flex min-w-0 shrink items-center gap-3 sm:gap-4"
            onClick={() => setOpen(false)}
            aria-label="Manish Kumar Singh — Home"
          >
            <span aria-hidden="true" className="size-12 shrink-0 overflow-hidden rounded-full border-2 border-card bg-accent shadow-card ring-1 ring-border transition-transform duration-300 group-hover:scale-105 sm:size-14">
              {/* <img src={portraitAsset.url} alt="" className="size-full object-cover object-top" /> */}
              <img src={portrait} alt="MS" className="size-full object-cover object-top" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[1.22rem] leading-tight font-semibold text-foreground transition-colors group-hover:text-signal sm:text-[1.5rem]">
                {PERSON.name}
              </span>
              <span className="mt-1 hidden text-[10px] font-semibold uppercase text-signal sm:block">
                AI Evaluation • Research
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden shrink-0 items-center gap-0.5 xl:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group relative px-2.5 py-3 text-[0.875rem] font-medium whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground [&_.nav-indicator]:scale-x-100" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
                <span aria-hidden="true" className="nav-indicator absolute inset-x-2.5 bottom-1 h-0.5 origin-left scale-x-0 bg-signal transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
            <a
              href={LINKS.engineeringPortfolio}
              className="ml-3 inline-flex items-center rounded-full bg-primary px-4 py-2.5 text-[0.875rem] font-semibold whitespace-nowrap text-primary-foreground shadow-card transition-colors hover:bg-signal"
            >
              Engineering Portfolio
            </a>
          </nav>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-11 shrink-0 rounded-full xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t bg-background xl:hidden">
          <Container>
            <nav aria-label="Mobile" className="flex flex-col py-3">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/70 py-3.5 text-base font-medium text-muted-foreground transition-colors hover:text-signal last:border-0"
                  activeProps={{ className: "text-signal" }}
                  activeOptions={{ exact: true }}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={LINKS.engineeringPortfolio}
                onClick={() => setOpen(false)}
                className="mt-4 mb-4 inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-signal"
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
