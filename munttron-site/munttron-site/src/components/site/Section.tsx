import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 pt-36 pb-16">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="glow-orb absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 animate-fade-up">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</div>;
}

export function Pending({ label = "Conteúdo oficial em breve" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-dashed border-border px-2.5 py-1 font-mono text-xs text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
      {label}
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {status}
    </span>
  );
}
