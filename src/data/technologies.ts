import { Database, Mail, Monitor, Server, ShieldCheck } from 'lucide-react';
import type { ArchitectureLayer, TechGroup } from '../types';

export const techGroups: TechGroup[] = [
  {
    id: 'front',
    icon: Monitor,
    title: 'Front-end',
    technologies: [
      { name: 'React', description: 'Biblioteca para construção da interface em componentes.' },
      { name: 'TypeScript', description: 'Tipagem estática que reduz erros em tempo de desenvolvimento.' },
      { name: 'Vite', description: 'Ferramenta de build rápida com recarregamento instantâneo.' },
    ],
  },
  {
    id: 'back',
    icon: Server,
    title: 'Back-end',
    technologies: [
      { name: 'Node.js', description: 'Ambiente de execução JavaScript no servidor.' },
      { name: 'Express', description: 'Framework para criação da API REST e suas rotas.' },
    ],
  },
  {
    id: 'dados',
    icon: Database,
    title: 'Banco de dados',
    technologies: [
      { name: 'PostgreSQL', description: 'Banco de dados relacional robusto e open source.' },
      { name: 'Prisma', description: 'ORM que mapeia as tabelas e gera consultas tipadas.' },
    ],
  },
  {
    id: 'seguranca',
    icon: ShieldCheck,
    title: 'Segurança',
    technologies: [
      { name: 'JWT', description: 'Tokens para autenticação e controle de acesso por perfil.' },
      { name: 'bcrypt', description: 'Criptografia (hash) das senhas dos usuários.' },
    ],
  },
  {
    id: 'servicos',
    icon: Mail,
    title: 'Serviços externos',
    technologies: [
      { name: 'SendGrid', description: 'Envio dos e-mails de confirmação de inscrição.' },
    ],
  },
];

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: 'front',
    icon: Monitor,
    title: 'Front-end',
    subtitle: 'React + TypeScript + Vite',
    items: ['Telas e componentes', 'Rotas por perfil', 'Requisições HTTP (JSON)'],
    connectionLabel: 'HTTP / JSON',
  },
  {
    id: 'api',
    icon: Server,
    title: 'API REST',
    subtitle: 'Node.js + Express',
    items: ['Autenticação JWT', 'Regras de negócio', 'Envio de e-mails (SendGrid)'],
    connectionLabel: 'Prisma ORM',
  },
  {
    id: 'db',
    icon: Database,
    title: 'Banco de Dados',
    subtitle: 'PostgreSQL + Prisma',
    items: ['Eventos e sessões', 'Inscrições e presenças', 'Questionários e certificados'],
  },
];
