import PageHeader from '../../components/PageHeader/PageHeader';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Section from '../../components/Section/Section';
import { advisor, author } from '../../data/people';
import { usePageTitle } from '../../hooks/usePageTitle';
import styles from './Author.module.css';

const people = [author, advisor];

export default function Author() {
  usePageTitle('Autor');

  return (
    <>
      <PageHeader
        eyebrow="Autor"
        title="Quem está por trás do projeto"
        subtitle="Projeto Final de Curso de Sistemas de Informação da Universidade de Mogi das Cruzes."
      />

      <Section>
        <div className={styles.grid}>
          {people.map((person) => (
            <ProfileCard key={person.name} person={person} />
          ))}
        </div>
      </Section>
    </>
  );
}
