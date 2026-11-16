import { Award, CalendarDays, LayoutDashboard, QrCode, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { mockupChart, mockupKpis, mockupSessions } from '../../data/mockup';
import { cn } from '../../utils/cn';
import IconBox from '../IconBox/IconBox';
import type { IconBoxTone } from '../IconBox/IconBox';
import styles from './DashboardMockup.module.css';

const sidebarIcons = [LayoutDashboard, CalendarDays, Users, Award];
const weekDays = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];

interface FloatingCardProps {
  icon: LucideIcon;
  tone: IconBoxTone;
  title: string;
  subtitle: string;
  position: 'top' | 'bottom';
}

/** Cartão que "flutua" sobre a janela do mockup. */
function FloatingCard({ icon, tone, title, subtitle, position }: FloatingCardProps) {
  return (
    <div className={cn(styles.floating, position === 'top' ? styles.floatingTop : styles.floatingBottom)}>
      <IconBox icon={icon} tone={tone} size="sm" />
      <div>
        <strong>{title}</strong>
        <span className={styles.small}>{subtitle}</span>
      </div>
    </div>
  );
}

/** Ilustração do dashboard do SGEA feita somente com HTML + CSS. */
export default function DashboardMockup() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.window}>
        {/* Barra do "navegador" */}
        <div className={styles.titleBar}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.url}>sgea.umc.br/dashboard</span>
        </div>

        <div className={styles.app}>
          <aside className={styles.sidebar}>
            {sidebarIcons.map((Icon, index) => (
              <span key={index} className={index === 0 ? styles.sideActive : styles.sideItem}>
                <Icon size={16} />
              </span>
            ))}
          </aside>

          <div className={styles.content}>
            <div className={styles.heading}>
              <div>
                <span className={styles.small}>Semana de Sistemas de Informação</span>
                <strong>Dashboard do organizador</strong>
              </div>
              <span className={styles.badge}>Ao vivo</span>
            </div>

            <div className={styles.kpis}>
              {mockupKpis.map((kpi) => (
                <div key={kpi.label} className={styles.kpi}>
                  <span className={styles.small}>{kpi.label}</span>
                  <strong>{kpi.value}</strong>
                  <span className={styles.trend}>{kpi.trend}</span>
                </div>
              ))}
            </div>

            <div className={styles.chart}>
              <span className={styles.small}>Presença por dia</span>
              <div className={styles.bars}>
                {mockupChart.map((height, index) => (
                  <div key={index} className={styles.barColumn}>
                    <span className={styles.bar} style={{ height: `${height}%` }} />
                    <span className={styles.barLabel}>{weekDays[index]}</span>
                  </div>
                ))}
              </div>
            </div>

            <ul className={styles.sessions}>
              {mockupSessions.map((session) => (
                <li key={session.title} className={styles.session}>
                  <span className={styles.time}>{session.time}</span>
                  <div className={styles.sessionInfo}>
                    <strong>{session.title}</strong>
                    <span className={styles.small}>{session.room}</span>
                  </div>
                  <div className={styles.occupancy}>
                    <span style={{ width: `${session.occupancy}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <FloatingCard
        icon={Award}
        tone="success"
        title="Aprovado: 85%"
        subtitle="Certificado liberado"
        position="top"
      />
      <FloatingCard
        icon={QrCode}
        tone="dark"
        title="Certificado válido"
        subtitle="hash #a3f9…c21e"
        position="bottom"
      />
    </div>
  );
}
