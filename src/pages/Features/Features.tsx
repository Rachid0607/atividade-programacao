import { useState } from 'react';
import Card from '../../components/Card/Card';
import PageHeader from '../../components/PageHeader/PageHeader';
import Section from '../../components/Section/Section';
import { features, profiles } from '../../data/features';
import type { Profile } from '../../types';
import { usePageTitle } from '../../hooks/usePageTitle';
import { cn } from '../../utils/cn';
import styles from './Features.module.css';

type Filter = Profile | 'Todos';

const filters: Filter[] = ['Todos', ...profiles];

export default function Features() {
  usePageTitle('Funcionalidades');

  // Perfil selecionado nas abas
  const [activeFilter, setActiveFilter] = useState<Filter>('Todos');

  const visibleFeatures =
    activeFilter === 'Todos'
      ? features
      : features.filter((feature) => feature.profiles.includes(activeFilter));

  return (
    <>
      <PageHeader
        eyebrow="Funcionalidades"
        title="O que o SGEA oferece"
        subtitle="Filtre pelas funcionalidades disponíveis para cada perfil de acesso: Coordenação, Secretaria e Aluno."
      />

      <Section>
        <div className={styles.toolbar}>
          <div className={styles.tabs} role="tablist" aria-label="Filtrar por perfil">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                className={cn(styles.tab, activeFilter === filter && styles.activeTab)}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <p className={styles.count} aria-live="polite">
            {visibleFeatures.length} funcionalidade{visibleFeatures.length !== 1 && 's'}
          </p>
        </div>

        {/* A key muda com o filtro para reiniciar a animação de entrada */}
        <div key={activeFilter} className={styles.grid} role="tabpanel">
          {visibleFeatures.map((feature) => (
            <Card
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              tags={feature.profiles}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
