import type { MockupKpi, MockupSession } from '../types';

/** Dados fictícios usados apenas na ilustração do dashboard (página inicial). */
export const mockupKpis: MockupKpi[] = [
  { label: 'Inscritos', value: '482', trend: '+12%' },
  { label: 'Presença', value: '87%', trend: '+5%' },
  { label: 'Certificados', value: '356', trend: '+9%' },
];

/** Altura (em %) de cada barra do gráfico de presença por dia. */
export const mockupChart: number[] = [55, 72, 64, 88, 76, 94, 68];

export const mockupSessions: MockupSession[] = [
  { time: '09:00', title: 'Abertura do Congresso', room: 'Auditório', occupancy: 96 },
  { time: '10:30', title: 'IA na Educação', room: 'Sala 204', occupancy: 78 },
  { time: '14:00', title: 'Oficina de React', room: 'Lab 3', occupancy: 64 },
];
