import { ExternalLink } from "lucide-react";
import { socials } from "@/data/site";
import { SocialIcon } from "./SocialIcon";
import { Button } from "@/components/ui/button";

export function SocialGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {socials.map((s) => (
        <article key={s.key} className="panel flex flex-col items-start gap-4 p-6">
          <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-secondary text-primary"><SocialIcon k={s.key} className="h-6 w-6" /></span>
          <h3 className="font-semibold">{s.name}</h3>
          {s.url ? (
            <Button asChild variant="glass" size="sm"><a href={s.url} target="_blank" rel="noopener noreferrer">Acessar perfil <ExternalLink /></a></Button>
          ) : (
            <Button variant="glass" size="sm" disabled>Em breve</Button>
          )}
        </article>
      ))}
    </div>
  );
}
