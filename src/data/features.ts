import {
  Award,
  CalendarDays,
  CalendarPlus,
  ChartColumn,
  ClipboardCheck,
  FileText,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Mic,
  ScanLine,
  UserPlus,
} from 'lucide-react';
import type { Feature, Profile } from '../types';

export const profiles: Profile[] = ['Coordenação', 'Secretaria', 'Aluno'];

export const features: Feature[] = [
  {
    id: 'cadastro-eventos',
    icon: CalendarPlus,
    title: 'Cadastro de eventos e palestras',
    description:
      'Criação de congressos e semanas de curso com suas palestras, salas, horários e capacidade de vagas.',
    profiles: ['Coordenação', 'Secretaria'],
    highlight: true,
  },
  {
    id: 'inscricao',
    icon: UserPlus,
    title: 'Inscrição de participantes',
    description:
      'O aluno escolhe o evento e as sessões de interesse e faz sua inscrição em poucos cliques.',
    profiles: ['Aluno', 'Secretaria'],
  },
  {
    id: 'agenda',
    icon: CalendarDays,
    title: 'Agenda visual das sessões',
    description:
      'Grade de programação organizada por dia, horário e sala, facilitando o planejamento do participante.',
    profiles: ['Coordenação', 'Secretaria', 'Aluno'],
    highlight: true,
  },
  {
    id: 'check-in',
    icon: ScanLine,
    title: 'Check-in nas sessões',
    description:
      'Os organizadores registram a presença do aluno em cada sessão, garantindo dados confiáveis de participação.',
    profiles: ['Secretaria'],
    highlight: true,
  },
  {
    id: 'palestrantes',
    icon: Mic,
    title: 'Gestão de palestrantes',
    description:
      'Cadastro de currículo e disponibilidade dos palestrantes e vínculo de cada um às suas sessões.',
    profiles: ['Coordenação', 'Secretaria'],
  },
  {
    id: 'questionario',
    icon: ClipboardCheck,
    title: 'Questionário de aprendizagem',
    description:
      'Avaliação ao final do evento: o aluno precisa acertar pelo menos 60% para liberar o certificado.',
    profiles: ['Coordenação', 'Aluno'],
    highlight: true,
  },
  {
    id: 'certificados',
    icon: Award,
    title: 'Certificados automáticos',
    description:
      'Emissão automática do certificado com validação pública por QR Code e código hash único.',
    profiles: ['Coordenação', 'Aluno'],
    highlight: true,
  },
  {
    id: 'notificacoes',
    icon: Mail,
    title: 'Notificações por e-mail',
    description:
      'Envio automático de e-mail de confirmação de inscrição, mantendo o participante sempre informado.',
    profiles: ['Secretaria', 'Aluno'],
  },
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    title: 'Dashboard do organizador',
    description:
      'Visão em tempo real de inscritos, presença por sessão e taxa de ocupação das salas.',
    profiles: ['Coordenação', 'Secretaria'],
    highlight: true,
  },
  {
    id: 'feedback',
    icon: MessageSquare,
    title: 'Feedback pós-evento',
    description:
      'Formulário de avaliação do evento e das palestras para coletar a percepção dos participantes.',
    profiles: ['Coordenação', 'Aluno'],
  },
  {
    id: 'relatorio',
    icon: FileText,
    title: 'Relatório final',
    description:
      'Consolidação de presença, desempenho nos questionários e feedback em um relatório do evento.',
    profiles: ['Coordenação'],
  },
  {
    id: 'indicadores',
    icon: ChartColumn,
    title: 'Indicadores de aprendizagem',
    description:
      'Acompanhamento das notas dos questionários para medir se o evento gerou aprendizagem de fato.',
    profiles: ['Coordenação'],
  },
];
