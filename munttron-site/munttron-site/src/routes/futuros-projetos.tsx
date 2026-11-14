import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { Container, PageHeader, Pending, StatusBadge } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { futureProjects } from "@/data/site";

export const Route = createFileRoute("/futuros-projetos")({
  head: () => ({
    meta: [
      { title: "Futuros Projetos — Munttron" },
      { name: "description", content: "Ideias e projetos que a Munttron pretende desenvolver." },
      { property: "og:title", content: "Futuros Projetos — Munttron" },
      { property: "og:description", content: "Ideias e projetos que a Munttron pretende desenvolver." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Future,
});

function Future() {
  return (
    <>
      <PageHeader eyebrow="Roadmap" title={<>Futuros <span className="text-gradient">projetos</span></>}>
        O que a Munttron está planejando para os próximos passos.
      </PageHeader>
      <section className="py-20">
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {futureProjects.map((f, i) => (
            <Reveal key={i} delay={i * 80}>
              <article className="panel flex h-full flex-col overflow-hidden">
                <div className="relative grid aspect-video place-items-center border-b border-border bg-secondary/50">
                  <div className="grid-bg absolute inset-0" aria-hidden="true" />
                  <Sparkles className="relative h-8 w-8 text-primary/70" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <StatusBadge status={f.status} />
                  <h2 className="text-lg font-semibold">{f.name ?? "Projeto a anunciar"}</h2>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{f.category ?? "Categoria a definir"}</p>
                  <div className="text-sm text-muted-foreground">{f.description ?? <Pending label="Descrição em breve" />}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
