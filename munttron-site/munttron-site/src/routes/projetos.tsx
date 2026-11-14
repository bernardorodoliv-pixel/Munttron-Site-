import { createFileRoute, Outlet, useMatch } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Munttron" },
      { name: "description", content: "Projetos desenvolvidos pela Munttron, com destaque para o Munttron Recon." },
      { property: "og:title", content: "Projetos — Munttron" },
      { property: "og:description", content: "Projetos desenvolvidos pela Munttron, com destaque para o Munttron Recon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function Projects() {
  const child = useMatch({ from: "/projetos/$slug", shouldThrow: false });
  if (child) return <Outlet />;
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  return (
    <>
      <PageHeader eyebrow="Projetos" title={<>Soluções <span className="text-gradient">Munttron</span></>}>
        Produtos desenvolvidos pela Munttron.
      </PageHeader>
      <section className="py-20">
        <Container className="space-y-8">
          {featured.map((p) => <Reveal key={p.slug}><ProjectCard p={p} /></Reveal>)}
          {others.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {others.map((p, i) => <Reveal key={p.slug} delay={i * 80}><ProjectCard p={p} /></Reveal>)}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
