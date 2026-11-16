import { Award, ClipboardCheck, ScanLine, UserPlus } from 'lucide-react';
import type { Step } from '../types';

/** Passos da seção "Como funciona" da página inicial. */
export const steps: Step[] = [
  {
    number: 1,
    icon: UserPlus,
    title: 'Inscrição',
    description: 'O aluno se inscreve no evento e nas sessões de interesse.',
    badge: 'Confirmação por e-mail',
  },
  {
    number: 2,
    icon: ScanLine,
    title: 'Participação',
    description: 'Nas sessões, a organização faz o check-in e registra a presença do participante.',
    badge: 'Check-in por sessão',
  },
  {
    number: 3,
    icon: ClipboardCheck,
    title: 'Questionário',
    description: 'Ao final, o aluno responde a avaliação de aprendizagem sobre o conteúdo do evento.',
    badge: 'Mínimo de 60% de acerto',
  },
  {
    number: 4,
    icon: Award,
    title: 'Certificado com QR Code',
    description: 'Aprovado, o aluno recebe o certificado gerado automaticamente.',
    badge: 'Validação por QR Code',
  },
];
