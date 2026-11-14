import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Network, Cpu, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/site/Logo";
import { Container } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects, site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Munttron — Tecnologia e Cibersegurança" },
      { name: "description", content: "Munttron: soluções de software com foco em tecnologia, cibersegurança e inovação. Conheça o Munttron Recon." },
      { property: "og:title", content: "Munttron — Tecnologia e Cibersegurança" },
      { property: "og:description", content: "Munttron: soluções de software com foco em tecnologia, cibersegurança e inovação. Conheça o Munttron Recon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: Shield, title: "Segurança", text: "Proteção como princípio de projeto." },
  { icon: Network, title: "Redes", text: "Visibilidade sobre ambientes digitais." },
  { icon: Cpu, title: "Tecnologia", text: "Software construído com precisão." },
  { icon: Lock, title: "Confiança", text: "Uso ético e atividades autorizadas." },
];

function Home() {
  const featured = projects.find((p) => p.featured);
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="glow-orb absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
        <svg className="absolute inset-0 h-full w-full opacity-30" aria-hidden="true">
          <line x1="0" y1="78%" x2="100%" y2="62%" stroke="var(--primary)" strokeWidth="0.5" />
          <line x1="0" y1="30%" x2="100%" y2="48%" stroke="var(--tech)" strokeWidth="0.5" />
        </svg>
        <Container className="relative pt-24 text-center">
          <div className="animate-fade-up">
            <LogoMark className="mx-auto h-24 w-24" />
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.4em] text-primary">Munttron</p>
            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Tecnologia, segurança e <span className="text-gradient">inteligência</span> para o mundo digital.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{site.shortDescription}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="lg"><Link to="/projetos">Conheça nossos projetos <ArrowRight /></Link></Button>
              <Button asChild variant="glass" size="lg"><Link to="/sobre">Sobre a Munttron</Link></Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="panel h-full p-6">
                  <p.icon className="h-6 w-6 text-primary" />
                  <h2 className="mt-4 font-semibold">{p.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {featured && (
        <section className="pb-28">
          <Container>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Projeto em destaque</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Primeiro produto Munttron</h2>
            </Reveal>
            <Reveal className="mt-10"><ProjectCard p={featured} /></Reveal>
          </Container>
        </section>
      )}
    </>
  );
}
