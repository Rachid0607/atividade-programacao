import { GraduationCap } from 'lucide-react';
import type { Person } from '../../types';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {
  person: Person;
}

/** Pega as iniciais do primeiro e do último nome (ignorando "Prof."). */
function getInitials(name: string): string {
  const parts = name.replace(/^Prof\.?\s+/i, '').split(' ').filter(Boolean);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

export default function ProfileCard({ person }: ProfileCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cover} />

      {/* Foto placeholder: troque por <img src="..." /> quando tiver a foto */}
      <div className={styles.avatar} aria-hidden="true">
        {getInitials(person.name)}
      </div>

      <span className={styles.role}>{person.role}</span>
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

      <div className={styles.links}>
        <SocialLinks links={person.links} showLabel />
      </div>
    </article>
  );
}
