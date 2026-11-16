import ArchitectureDiagram from '../../components/ArchitectureDiagram/ArchitectureDiagram';
import Card from '../../components/Card/Card';
import PageHeader from '../../components/PageHeader/PageHeader';
import Section from '../../components/Section/Section';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { architectureLayers, techGroups } from '../../data/technologies';
import { usePageTitle } from '../../hooks/usePageTitle';
import styles from './Technologies.module.css';

export default function Technologies() {
  usePageTitle('Tecnologias e Arquitetura');

  return (
    <>
      <PageHeader
        eyebrow="Tecnologias e arquitetura"
        title="Como o SGEA é construído"
        subtitle="Uma stack moderna, tipada de ponta a ponta, organizada em camadas bem definidas."
      />

      <Section>
        <SectionTitle
          eyebrow="Arquitetura"
          title="Fluxo da aplicação"
          subtitle="O front-end consome uma API REST, que aplica as regras de negócio e acessa o banco de dados."
        />
        <ArchitectureDiagram layers={architectureLayers} />
      </Section>

      <Section variant="soft">
        <SectionTitle
          eyebrow="Stack"
          title="Tecnologias utilizadas"
          subtitle="Ferramentas escolhidas por serem consolidadas no mercado e terem boa documentação."
        />
        <div className={styles.grid}>
          {techGroups.map((group) => (
            <Card key={group.id} icon={group.icon} title={group.title}>
              <ul className={styles.techList}>
                {group.technologies.map((tech) => (
                  <li key={tech.name}>
                    <strong>{tech.name}</strong>
                    <span>{tech.description}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
