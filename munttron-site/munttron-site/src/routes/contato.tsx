import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Container, PageHeader, Pending } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SocialGrid } from "@/components/site/SocialGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { site } from "@/data/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Munttron" },
      { name: "description", content: "Fale com a Munttron pelo formulário de contato ou canais oficiais." },
      { property: "og:title", content: "Contato — Munttron" },
      { property: "og:description", content: "Fale com a Munttron pelo formulário de contato ou canais oficiais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  subject: z.string().trim().max(150).optional(),
  message: z.string().trim().min(10, "Mensagem muito curta").max(2000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const r = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!r.success) {
      setErrors(Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message])));
      return;
    }
    setErrors({});
    if (!site.email) {
      toast.info("O canal oficial de contato ainda está sendo configurado. Tente novamente em breve.");
      return;
    }
    const body = encodeURIComponent(`${r.data.message}\n\n— ${r.data.name} (${r.data.email})`);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(r.data.subject || "Contato pelo site")}&body=${body}`;
    form.reset();
  }

  const field = (name: string) => errors[name] && <p className="mt-1.5 text-xs text-destructive" role="alert">{errors[name]}</p>;

  return (
    <>
      <PageHeader eyebrow="Contato" title={<>Fale com a <span className="text-gradient">Munttron</span></>}>
        Envie sua mensagem pelo formulário ou pelos canais oficiais.
      </PageHeader>
      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="panel p-7">
              <Mail className="h-6 w-6 text-primary" />
              <h2 className="mt-4 text-xl font-semibold">E-mail institucional</h2>
              <div className="mt-3 text-muted-foreground">
                {site.email ? <a className="text-primary hover:underline" href={`mailto:${site.email}`}>{site.email}</a> : <Pending label="E-mail oficial em breve" />}
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <form onSubmit={onSubmit} noValidate className="panel grid gap-5 p-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <div><Label htmlFor="name">Nome</Label><Input id="name" name="name" maxLength={100} className="mt-2" autoComplete="name" />{field("name")}</div>
                <div><Label htmlFor="email">E-mail</Label><Input id="email" name="email" type="email" maxLength={255} className="mt-2" autoComplete="email" />{field("email")}</div>
              </div>
              <div><Label htmlFor="subject">Assunto</Label><Input id="subject" name="subject" maxLength={150} className="mt-2" /></div>
              <div><Label htmlFor="message">Mensagem</Label><Textarea id="message" name="message" rows={6} maxLength={2000} className="mt-2" />{field("message")}</div>
              <Button type="submit" variant="hero" className="justify-self-start">Enviar mensagem <Send /></Button>
            </form>
          </Reveal>
        </Container>
        <Container className="mt-20">
          <h2 className="mb-8 text-2xl font-semibold">Redes sociais</h2>
          <SocialGrid />
        </Container>
      </section>
    </>
  );
}
