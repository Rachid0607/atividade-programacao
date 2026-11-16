import { CircleCheck, Target } from 'lucide-react';
import Card from '../../components/Card/Card';
import PageHeader from '../../components/PageHeader/PageHeader';
import Section from '../../components/Section/Section';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TextCard from '../../components/TextCard/TextCard';
import { contextSections, justification, objectives } from '../../data/about';
import { usePageTitle } from '../../hooks/usePageTitle';
import styles from './About.module.css';

export default function About() {
  usePageTitle('Sobre o Projeto');

  return (
    <>
      <PageHeader
        eyebrow="Sobre o projeto"
        title="Eventos acadêmicos como parte do aprendizado"
        subtitle="Entenda o problema que o SGEA resolve, o contexto em que ele nasceu e os objetivos do projeto."
      />

      {/* Problema e contexto */}
      <Section>
        <div className={styles.twoColumns}>
          {contextSections.map((section) => (
            <TextCard key={section.id} section={section} />
          ))}
        </div>
      </Section>

      {/* Objetivos */}
      <Section variant="soft">
        <SectionTitle
          eyebrow="Objetivos"
          title="O que o projeto pretende alcançar"
          subtitle="Um objetivo geral que orienta o trabalho e objetivos específicos que se tornam funcionalidades."
        />

        <div className={styles.objectives}>
          <Card icon={Target} title="Objetivo geral" description={objectives.general} variant="highlight" />

          <Card title="Objetivos específicos">
            <ul className={styles.checklist}>
              {objectives.specific.map((objective) => (
                <li key={objective}>
                  <CircleCheck size={20} aria-hidden="true" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Justificativa */}
      <Section>
        <div className={styles.narrow}>
          <TextCard section={justification} highlight />
        </div>
      </Section>
    </>
  );
}
