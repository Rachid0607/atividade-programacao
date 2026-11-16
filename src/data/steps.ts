import { Award, ClipboardCheck, ScanLine, UserPlus } from 'lucide-react';
import type { Step } from '../types';

export const steps: Step[] = [
  {
    number: 1,
    icon: UserPlus,
    title: 'Inscrição',
    description: 'O aluno se inscreve no evento e nas sessões e recebe a confirmação por e-mail.',
  },
  {
    number: 2,
    icon: ScanLine,
    title: 'Participação',
    description: 'Nas sessões, a organização faz o check-in e registra a presença do participante.',
  },
  {
    number: 3,
    icon: ClipboardCheck,
    title: 'Questionário',
    description: 'Ao final, o aluno responde a avaliação de aprendizagem e precisa acertar 60%.',
  },
  {
    number: 4,
    icon: Award,
    title: 'Certificado',
    description: 'Aprovado, o certificado é emitido automaticamente com QR Code para validação.',
  },
];
