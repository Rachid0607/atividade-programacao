import { GraduationCap } from 'lucide-react';
import type { Person } from '../../types';
import { cn } from '../../utils/cn';
import Eyebrow from '../Eyebrow/Eyebrow';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {
  person: Person;
  /** Card maior, usado para o autor. */
  featured?: boolean;
}

/** Pega as iniciais do primeiro e do último nome (ignorando "Prof."). */
function getInitials(name: string): string {
  const parts = name.replace(/^Prof\.?\s+/i, '').split(' ').filter(Boolean);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

export default function ProfileCard({ person, featured = false }: ProfileCardProps) {
  return (
    <article className={cn(styles.card, featured && styles.featured)}>
      <div className={styles.cover} />

      {/* Foto placeholder: troque por <img src="..." alt="..." /> quando tiver a foto */}
      <div className={styles.avatar} aria-hidden="true">
        {getInitials(person.name)}
      </div>

      <Eyebrow>{person.role}</Eyebrow>
      <h2 className={styles.name}>{person.name}</h2>
      <p className={styles.description}>{person.description}</p>

      <ul className={styles.details}>
        {person.details.map((detail) => (
          <li key={detail}>
            <GraduationCap size={18} aria-hidden="true" />
            {detail}
          </li>
        ))}
      </ul>

      {person.links.length > 0 && (
        <div className={styles.links}>
          <SocialLinks links={person.links} showLabel />
        </div>
      )}
    </article>
  );
}
