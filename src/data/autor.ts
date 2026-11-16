import type { Person } from '../types';

/** Autor do projeto (único integrante). */
export const author: Person = {
  name: 'João Pedro Rachid de Abreu',
  role: 'Autor',
  description:
    'Estudante de Sistemas de Informação na Universidade de Mogi das Cruzes, responsável pelo desenvolvimento do SGEA como Projeto Final de Curso.',
  details: ['Sistemas de Informação – UMC', 'Projeto Final de Curso (PFC)'],
  links: [
    { kind: 'github', label: 'GitHub', url: 'https://github.com/Rachid0607' },
    { kind: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/joao-rachid/' },
  ],
};

/** Orientador e coorientador do projeto. */
export const advisors: Person[] = [
  {
    name: 'Prof. Bruno Messias Aguiar',
    role: 'Orientador',
    description: 'Professor do curso de Sistemas de Informação da UMC e orientador deste Projeto Final de Curso.',
    details: ['Sistemas de Informação – UMC'],
    links: [],
  },
  {
    name: 'Prof. Alessandro Aparecido da Silva Horas',
    role: 'Coorientador',
    description: 'Professor do curso de Sistemas de Informação da UMC e coorientador deste Projeto Final de Curso.',
    details: ['Sistemas de Informação – UMC'],
    links: [],
  },
];
