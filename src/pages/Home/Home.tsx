import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import DashboardMockup from '../../components/DashboardMockup/DashboardMockup';
import Section from '../../components/Section/Section';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import StatCard from '../../components/StatCard/StatCard';
import StepCard from '../../components/StepCard/StepCard';
import { features } from '../../data/features';
import { highlights } from '../../data/highlights';
import { steps } from '../../data/steps';
import { usePageTitle } from '../../hooks/usePageTitle';
import styles from './Home.module.css';

export default function Home() {
  usePageTitle('Início');

  const highlightedFeatures = features.filter((feature) => feature.highlight);

  return (
    <>
      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroText}>
            <span className={styles.badge}>
              <Sparkles size={16} aria-hidden="true" />
              TCC · Sistemas de Informação · UMC
            </span>

            <h1 className={styles.title}>
              SGEA
              <span>Sistema de Gestão de Eventos Acadêmicos</span>
            </h1>

            <p className={styles.slogan}>
              Do check-in ao certificado: eventos acadêmicos que <strong>comprovam aprendizagem</strong>,
              e não só presença.
            </p>

            <div className={styles.actions}>
              <Button to="/funcionalidades" size="lg" icon={ArrowRight}>
                Conheça as funcionalidades
              </Button>
              <Button to="/sobre" size="lg" variant="outline">
                Sobre o projeto
              </Button>
            </div>
          </div>

          <DashboardMockup />
        </div>
      </section>

      {/* ===== Como funciona ===== */}
      <Section variant="soft" id="como-funciona">
        <SectionTitle
          eyebrow="Como funciona"
          title="Da inscrição ao certificado em 4 passos"
          subtitle="O participante só recebe o certificado depois de comprovar o que aprendeu."
        />
        <ol className={styles.steps}>
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </ol>
      </Section>

      {/* ===== Funcionalidades (resumo) ===== */}
      <Section>
        <SectionTitle
          eyebrow="Funcionalidades"
          title="Tudo o que o evento acadêmico precisa"
          subtitle="Da organização logística à avaliação da aprendizagem, em uma única plataforma."
        />
        <div className={styles.featureGrid}>
          {highlightedFeatures.map((feature) => (
            <Card
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <div className={styles.center}>
          <Button to="/funcionalidades" variant="secondary" icon={ArrowRight}>
            Ver todas as funcionalidades
          </Button>
        </div>
      </Section>

      {/* ===== Números / destaques ===== */}
      <Section variant="dark">
        <SectionTitle
          light
          eyebrow="Destaques"
          title="Certificado que vale pelo que se aprendeu"
          subtitle="Regras claras e validação pública para dar credibilidade aos eventos da instituição."
        />
        <ul className={styles.stats}>
          {highlights.map((highlight) => (
            <StatCard key={highlight.label} highlight={highlight} />
          ))}
        </ul>
      </Section>

      {/* ===== Chamada final ===== */}
      <Section>
        <div className={styles.cta}>
          <div>
            <h2>Quer saber mais sobre o SGEA?</h2>
            <p>Conheça a arquitetura do sistema ou envie uma mensagem para o autor do projeto.</p>
          </div>
          <div className={styles.actions}>
            <Button to="/tecnologias" variant="outline">
              Ver tecnologias
            </Button>
            <Button to="/contato" icon={ArrowRight}>
              Entrar em contato
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
