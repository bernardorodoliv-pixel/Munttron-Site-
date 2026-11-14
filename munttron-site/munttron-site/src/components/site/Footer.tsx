import { Link } from "@tanstack/react-router";
import { nav, site, socials } from "@/data/site";
import { Logo } from "./Logo";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{site.shortDescription}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Navegação</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-muted-foreground hover:text-foreground">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Redes</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {socials.map((s) => s.url ? (
              <a key={s.key} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                className="rounded-lg border border-border p-2.5 text-muted-foreground hover:border-primary hover:text-primary">
                <SocialIcon k={s.key} />
              </a>
            ) : (
              <span key={s.key} title={`${s.name} — em breve`} className="rounded-lg border border-dashed border-border p-2.5 text-muted-foreground/50">
                <SocialIcon k={s.key} />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center font-mono text-xs text-muted-foreground">
        © {year} Munttron. Todos os direitos reservados.
      </div>
    </footer>
  );
}
