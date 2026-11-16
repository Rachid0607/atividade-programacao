import type { Person } from '../types';

export const author: Person = {
  name: 'João Pedro Rachid de Abreu',
  role: 'Autor',
  description:
    'Estudante de Sistemas de Informação na Universidade de Mogi das Cruzes, responsável pelo desenvolvimento do SGEA como Projeto Final de Curso.',
  details: ['Bacharelado em Sistemas de Informação', 'Universidade de Mogi das Cruzes (UMC)'],
  links: [
    { kind: 'github', label: 'GitHub', url: 'https://github.com/Rachid0607' },
    // TODO: substitua "#" pela URL do seu perfil no LinkedIn
    { kind: 'linkedin', label: 'LinkedIn', url: '#' },
  ],
};

export const advisor: Person = {
  name: 'Prof. Alessandro Aparecido da Silva Horas',
  role: 'Orientador',
  description:
    'Professor do curso de Sistemas de Informação da UMC e orientador deste Projeto Final de Curso.',
  details: ['Curso de Sistemas de Informação', 'Universidade de Mogi das Cruzes (UMC)'],
  links: [],
};
