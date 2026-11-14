import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled || open ? "border-b border-border/60 bg-background/85 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" aria-label="Munttron — início" onClick={() => setOpen(false)}><Logo /></Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/projetos">Munttron Recon</Link>
          </Button>
          <button className="rounded-md p-2 lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border/60 px-6 py-4 lg:hidden" aria-label="Principal móvel">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }}
              className="block rounded-md px-3 py-3 text-base text-muted-foreground hover:bg-secondary hover:text-foreground data-[status=active]:text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
