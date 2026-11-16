import { BookOpen, Lightbulb, TriangleAlert } from 'lucide-react';
import type { AboutSection, Objectives } from '../types';

export const contextSections: AboutSection[] = [
  {
    id: 'problema',
    icon: TriangleAlert,
    title: 'O problema',
    paragraphs: [
      'Hoje, os eventos acadêmicos — congressos, semanas de curso e jornadas científicas — são administrados como eventos comuns: o foco está em controlar inscrições e registrar presença.',
      'Com isso, o certificado acaba comprovando apenas que o aluno esteve na sala, sem nenhuma evidência de que houve aprendizagem. A instituição também não tem dados para avaliar se o evento cumpriu seu papel pedagógico.',
    ],
  },
  {
    id: 'contexto',
    icon: BookOpen,
    title: 'Contexto',
    paragraphs: [
      'Eventos acadêmicos fazem parte da formação do estudante e muitas vezes contam como atividades complementares obrigatórias. Mesmo assim, sua gestão costuma depender de planilhas, formulários soltos e listas de presença em papel.',
      'Essa fragmentação dificulta o trabalho da coordenação e da secretaria, gera retrabalho na emissão de certificados e não permite acompanhar indicadores de participação e aprendizagem.',
    ],
  },
];

export const justification: AboutSection = {
  id: 'justificativa',
  icon: Lightbulb,
  title: 'Justificativa',
  paragraphs: [
    'O SGEA trata o evento como parte do processo educacional. Ao vincular a emissão do certificado a um questionário de avaliação com nota mínima de 60%, o certificado passa a representar aprendizagem, e não só presença.',
    'Além disso, centralizar inscrições, agenda, check-in, palestrantes e certificados em uma única plataforma reduz o trabalho manual, aumenta a confiabilidade dos dados e oferece à coordenação relatórios para melhorar os próximos eventos.',
  ],
};

export const objectives: Objectives = {
  general:
    'Desenvolver uma plataforma web para a gestão de eventos acadêmicos que integre a organização logística à avaliação da aprendizagem dos participantes.',
  specific: [
    'Permitir o cadastro de eventos, palestras, salas e palestrantes.',
    'Oferecer inscrição online e agenda visual das sessões por dia, horário e sala.',
    'Registrar a presença dos participantes por meio de check-in realizado pelos organizadores.',
    'Aplicar questionários de avaliação de aprendizagem com nota mínima de 60% para certificação.',
    'Emitir certificados automaticamente, com validação por QR Code e código hash.',
    'Disponibilizar um dashboard com indicadores de inscritos, presença e ocupação das salas.',
    'Coletar feedback pós-evento e gerar um relatório final para a coordenação.',
  ],
};
