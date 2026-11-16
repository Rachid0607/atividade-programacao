import { Fragment } from 'react';
import { ArrowRight } from 'lucide-react';
import type { ArchitectureLayer } from '../../types';
import styles from './ArchitectureDiagram.module.css';

interface ArchitectureDiagramProps {
  layers: ArchitectureLayer[];
}

/** Diagrama Front → API REST → Banco de Dados, feito com componentes e CSS. */
export default function ArchitectureDiagram({ layers }: ArchitectureDiagramProps) {
  return (
    <div className={styles.diagram} role="list" aria-label="Fluxo da arquitetura do sistema">
      {layers.map((layer, index) => {
        const { icon: Icon } = layer;
        const isLast = index === layers.length - 1;

        return (
          <Fragment key={layer.id}>
            <div className={styles.layer} role="listitem">
              <span className={styles.step}>{index + 1}</span>
              <div className={styles.icon}>
                <Icon size={28} aria-hidden="true" />
              </div>
              <h3 className={styles.title}>{layer.title}</h3>
              <span className={styles.subtitle}>{layer.subtitle}</span>
              <ul className={styles.items}>
                {layer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {!isLast && (
              <div className={styles.connector} aria-hidden="true">
                <span className={styles.line} />
                <span className={styles.arrow}>
                  <ArrowRight size={18} />
                </span>
                {layer.connectionLabel && (
                  <span className={styles.label}>{layer.connectionLabel}</span>
                )}
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
