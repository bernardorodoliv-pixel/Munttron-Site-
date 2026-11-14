import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Radar, Box } from "lucide-react";
import type { Project } from "@/data/site";
import { StatusBadge } from "./Section";
import { Button } from "@/components/ui/button";

export function ProjectCard({ p }: { p: Project }) {
  if (p.featured) {
    return (
      <article className="panel-featured relative overflow-hidden p-8 md:p-10 scanline">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-xl border border-primary/40 bg-primary/10 text-primary"><Radar className="h-7 w-7" /></span>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{p.category}</p>
                <h3 className="text-2xl font-semibold md:text-3xl">{p.name}</h3>
              </div>
            </div>
            <div className="mt-5"><StatusBadge status={p.status} /> <span className="ml-2 font-mono text-xs text-primary">● Projeto em destaque</span></div>
            <p className="mt-5 text-muted-foreground">{p.description}</p>
            <Button asChild variant="hero" className="mt-8">
              <Link to="/projetos/$slug" params={{ slug: p.slug }}>Saiba mais <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          {p.features && (
            <ul className="grid content-start gap-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-3 rounded-lg border border-border/70 bg-background/40 px-4 py-3 text-sm">
                  <Check className="h-4 w-4 shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>
          )}
        </div>
      </article>
    );
  }
  return (
    <article className="panel flex flex-col p-6">
      <span className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-secondary text-primary"><Box className="h-5 w-5" /></span>
      <p className="mt-5 font-mono text-xs uppercase tracking-wider text-muted-foreground">{p.category}</p>
      <h3 className="mt-1 text-xl font-semibold">{p.name}</h3>
      <div className="mt-3"><StatusBadge status={p.status} /></div>
      <p className="mt-4 flex-1 text-sm text-muted-foreground">{p.description}</p>
      <Button asChild variant="outline" className="mt-6 self-start">
        <Link to="/projetos/$slug" params={{ slug: p.slug }}>Saiba mais <ArrowRight className="h-4 w-4" /></Link>
      </Button>
    </article>
  );
}
