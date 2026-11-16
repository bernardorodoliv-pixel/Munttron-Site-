// Conteúdo institucional central. Campos com null/"" serão preenchidos com dados oficiais.
export const site = {
  name: "Munttron",
  tagline: "Tecnologia, segurança e inteligência para o mundo digital.",
  shortDescription:
    "O Grupo Munttron desenvolve soluções de software com foco em tecnologia e cibersegurança.",
  email: "" as string, // e-mail institucional oficial — a definir
};

export type ProjectStatus = "Ativo" | "Em desenvolvimento" | "Planejado" | "Em breve";

export interface Project {
  slug: string;
  name: string;
  category: string;
  status: ProjectStatus;
  description: string;
  features?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "munttron-recon",
    name: "Munttron Recon",
    category: "Segurança · Desktop",
    status: "Ativo",
    featured: true,
    description:
      "Software desktop de segurança e reconhecimento para atividades autorizadas, com interface em tema escuro e identidade em ciano e grafite.",
    features: [
      "Gerenciamento de projetos",
      "Gerenciamento de escopos autorizados",
      "Reconhecimento",
      "Guard — gerenciamento de eventos",
      "Watch — monitoramento de disponibilidade",
      "HTTP Workspace",
      "Histórico operacional",
    ],
  },
];

export interface FutureProject {
  name: string | null;
  category: string | null;
  status: "Planejado" | "Em desenvolvimento" | "Em breve";
  description: string | null;
}

// Espaços reservados — preencher com projetos oficiais.
export const futureProjects: FutureProject[] = [
  { name: null, category: null, status: "Planejado", description: null },
  { name: null, category: null, status: "Em desenvolvimento", description: null },
  { name: null, category: null, status: "Em breve", description: null },
];

export type SocialKey = "instagram" | "github" | "linkedin" | "youtube" | "other";
export interface Social { key: SocialKey; name: string; url: string | null }

// URLs oficiais serão fornecidas posteriormente.
export const socials: Social[] = [
  { key: "instagram", name: "Instagram", url: null },
  { key: "github", name: "GitHub", url: null },
  { key: "linkedin", name: "LinkedIn", url: null },
  { key: "youtube", name: "YouTube", url: null },
  { key: "other", name: "Outras redes", url: null },
];

export const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/projetos", label: "Projetos" },
  { to: "/futuros-projetos", label: "Futuros Projetos" },
  { to: "/redes-sociais", label: "Redes Sociais" },
  { to: "/contato", label: "Contato" },
] as const;
