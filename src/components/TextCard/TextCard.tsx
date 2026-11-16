import type { AboutSection } from '../../types';
import Card from '../Card/Card';

interface TextCardProps {
  section: AboutSection;
  /** Exibe o card com fundo azul-escuro. */
  highlight?: boolean;
}

/** Card com ícone, título e vários parágrafos (problema, contexto, justificativa). */
export default function TextCard({ section, highlight = false }: TextCardProps) {
  return (
    <Card icon={section.icon} title={section.title} variant={highlight ? 'highlight' : 'default'}>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </Card>
  );
}
