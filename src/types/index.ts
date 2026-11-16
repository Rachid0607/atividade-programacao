import type { LucideIcon } from 'lucide-react';

/** Perfis de acesso do SGEA. */
export type Profile = 'Coordenação' | 'Secretaria' | 'Aluno';

/** Item de menu da Navbar. */
export interface NavItem {
  label: string;
  path: string;
}

/** Funcionalidade do sistema. */
export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  profiles: Profile[];
  /** Se true, aparece no resumo da página inicial. */
  highlight?: boolean;
}

/** Passo do fluxo "Como funciona". */
export interface Step {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  /** Selo de destaque exibido no rodapé do passo (ex.: "Mínimo de 60% de acerto"). */
  badge?: string;
}

/** Número/destaque exibido na página inicial. */
export interface Highlight {
  value: string;
  label: string;
  description: string;
}

/** Tecnologia usada no sistema. */
export interface Technology {
  name: string;
  description: string;
}

/** Grupo de tecnologias (Front-end, Back-end...). */
export interface TechGroup {
  id: string;
  icon: LucideIcon;
  title: string;
  technologies: Technology[];
}

/** Camada do diagrama de arquitetura. */
export interface ArchitectureLayer {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  items: string[];
  /** Rótulo da seta que liga esta camada à próxima (opcional). */
  connectionLabel?: string;
}

/** Link externo de uma pessoa. */
export interface SocialLink {
  kind: 'github' | 'linkedin' | 'email';
  label: string;
  url: string;
}

/** Pessoa exibida na página Autor (autor, orientador e coorientador). */
export interface Person {
  name: string;
  /** Papel no projeto: "Autor", "Orientador" ou "Coorientador". */
  role: string;
  description: string;
  /** Linhas de informação extra (curso, instituição...). */
  details: string[];
  links: SocialLink[];
}

/** Bloco de texto da página Sobre. */
export interface AboutSection {
  id: string;
  icon: LucideIcon;
  title: string;
  paragraphs: string[];
}

/** Indicador fictício do mockup de dashboard (página inicial). */
export interface MockupKpi {
  label: string;
  value: string;
  trend: string;
}

/** Sessão fictícia do mockup de dashboard (página inicial). */
export interface MockupSession {
  time: string;
  title: string;
  room: string;
  occupancy: number;
}

/** Objetivos do projeto. */
export interface Objectives {
  general: string;
  specific: string[];
}
