import PageHeader from '../../components/PageHeader/PageHeader';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Section from '../../components/Section/Section';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { advisors, author } from '../../data/autor';
import { usePageTitle } from '../../hooks/usePageTitle';
import styles from './Author.module.css';

export default function Author() {
  usePageTitle('Autor');

  return (
    <>
      <PageHeader
        eyebrow="Autor"
        title="Quem está por trás do projeto"
        subtitle="Projeto Final de Curso de Sistemas de Informação da Universidade de Mogi das Cruzes."
      />

      {/* Card do autor */}
      <Section>
        <div className={styles.author}>
          <ProfileCard person={author} featured />
        </div>
      </Section>

      {/* Cards do orientador e do coorientador */}
      <Section variant="soft">
        <SectionTitle
          eyebrow="Orientação"
          title="Orientador e coorientador"
          subtitle="Professores que acompanharam o desenvolvimento do projeto."
        />
        <div className={styles.advisors}>
          {advisors.map((advisor) => (
            <ProfileCard key={advisor.name} person={advisor} />
          ))}
        </div>
      </Section>
    </>
  );
}
