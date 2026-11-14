import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SocialGrid } from "@/components/site/SocialGrid";

export const Route = createFileRoute("/redes-sociais")({
  head: () => ({
    meta: [
      { title: "Redes Sociais — Munttron" },
      { name: "description", content: "Acompanhe a Munttron nas redes sociais oficiais." },
      { property: "og:title", content: "Redes Sociais — Munttron" },
      { property: "og:description", content: "Acompanhe a Munttron nas redes sociais oficiais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Social,
});

function Social() {
  return (
    <>
      <PageHeader eyebrow="Conecte-se" title={<>Redes <span className="text-gradient">oficiais</span></>}>
        Os perfis oficiais da Munttron serão publicados aqui.
      </PageHeader>
      <section className="py-20"><Container><Reveal><SocialGrid /></Reveal></Container></section>
    </>
  );
}
