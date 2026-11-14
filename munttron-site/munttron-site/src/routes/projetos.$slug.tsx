import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { Container, PageHeader, StatusBadge } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.project.name} — Munttron` : "Projeto — Munttron";
    const d = loaderData?.project.description ?? "Projeto Munttron.";
    return {
      meta: [
        { title: t }, { name: "description", content: d },
        { property: "og:title", content: t }, { property: "og:description", content: d },
        { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
        ...(loaderData ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData();
  return (
    <>
      <PageHeader eyebrow={p.category} title={p.name}>
        <div className="mb-4"><StatusBadge status={p.status} /></div>
        {p.description}
      </PageHeader>
      <section className="py-20">
        <Container>
          {p.features && (
            <Reveal>
              <h2 className="text-2xl font-semibold">Recursos</h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {p.features.map((f) => (
                  <li key={f} className="panel flex items-center gap-3 p-5"><Check className="h-5 w-5 text-primary" />{f}</li>
                ))}
              </ul>
            </Reveal>
          )}
          <Button asChild variant="glass" className="mt-12"><Link to="/projetos"><ArrowLeft /> Todos os projetos</Link></Button>
        </Container>
      </section>
    </>
  );
}
