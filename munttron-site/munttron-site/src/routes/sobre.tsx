import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Building2, Target, Eye, Gem, Flag, Layers } from "lucide-react";
import { Container, PageHeader, Pending } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Munttron — História, missão e valores" },
      { name: "description", content: "Conheça a Munttron: história, missão, visão, valores, objetivos e área de atuação." },
      { property: "og:title", content: "Sobre a Munttron — História, missão e valores" },
      { property: "og:description", content: "Conheça a Munttron: história, missão, visão, valores, objetivos e área de atuação." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

// Preencher "text" com o conteúdo institucional oficial.
const blocks: { icon: typeof BookOpen; title: string; text: string | null; wide?: boolean }[] = [
  { icon: BookOpen, title: "Nossa história", text: null, wide: true },
  { icon: Building2, title: "O que é a Munttron", text: null, wide: true },
  { icon: Target, title: "Missão", text: null },
  { icon: Eye, title: "Visão", text: null },
  { icon: Gem, title: "Valores", text: null },
  { icon: Flag, title: "Objetivos", text: null },
  { icon: Layers, title: "Área de atuação", text: null, wide: true },
];

function About() {
  return (
    <>
      <PageHeader eyebrow="Sobre" title={<>A empresa por trás da <span className="text-gradient">Munttron</span></>}>
        Tecnologia e cibersegurança com identidade própria.
      </PageHeader>
      <section className="py-20">
        <Container className="grid gap-4 md:grid-cols-2">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={(i % 2) * 80} className={b.wide ? "md:col-span-2" : ""}>
              <article className="panel h-full p-7">
                <div className="flex items-center gap-3">
                  <b.icon className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">{b.title}</h2>
                </div>
                <div className="mt-4 text-muted-foreground">{b.text ?? <Pending />}</div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
