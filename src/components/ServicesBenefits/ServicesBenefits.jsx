import {
  BadgeCheck,
  Clock,
  Handshake,
  PaintBucket,
  ShieldCheck,
  Wallet,
} from 'lucide-react';

import styles from './ServicesBenefits.module.css';

const benefits = [
  {
    icon: BadgeCheck,
    title: '20+ Jahre Erfahrung',
    text: 'Langjährige Erfahrung in Renovierung, Innenausbau und Modernisierung.',
  },
  {
    icon: Handshake,
    title: 'Persönliche Betreuung',
    text: 'Direkter Kontakt vom ersten Gespräch bis zur Fertigstellung Ihres Projekts.',
  },
  {
    icon: PaintBucket,
    title: 'Saubere Ausführung',
    text: 'Sorgfältige Arbeitsweise und Schutz Ihrer Räume während der Arbeiten.',
  },
  {
    icon: Clock,
    title: 'Termintreue',
    text: 'Zuverlässige Planung und pünktliche Umsetzung aller Arbeiten.',
  },
  {
    icon: Wallet,
    title: 'Faire Preise',
    text: 'Transparente Angebote ohne versteckte Kosten.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualität & Langlebigkeit',
    text: 'Hochwertige Materialien und professionelle Verarbeitung für dauerhafte Ergebnisse.',
  },
];

export default function ServicesBenefits() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p className={styles.eyebrow}>Ihre Vorteile</p>

            <h2 className={styles.title}>
              Über 20 Jahre Erfahrung im Bereich Renovierung und Innenausbau
            </h2>

            <p className={styles.text}>
              Als selbstständiger Handwerker begleite ich Ihr Projekt
              persönlich. Ob Spachtelarbeiten, Airless-Anstriche, Trockenbau,
              Bodenverlegung oder Renovierungsarbeiten – Sie erhalten
              professionelle Ausführung, persönliche Betreuung und zuverlässige
              Ergebnisse aus einer Hand.
            </p>
          </div>

          <div className={styles.grid}>
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className={styles.card}>
                <span className={styles.icon}>
                  <Icon size={24} strokeWidth={2} />
                </span>

                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
