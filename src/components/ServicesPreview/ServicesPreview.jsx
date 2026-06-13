import {
  BadgeCheck,
  ClipboardCheck,
  Home,
  Paintbrush,
  Sparkles,
  Wrench,
} from 'lucide-react';

import styles from './ServicesPreview.module.css';

const services = [
  {
    icon: Paintbrush,
    title: 'Malerarbeiten',
    text: 'Präzise Anstriche für Wände, Decken und Wohnräume.',
  },
  {
    icon: Home,
    title: 'Fassadenanstriche',
    text: 'Schutz und neues Erscheinungsbild für Ihre Immobilie.',
  },
  {
    icon: Wrench,
    title: 'Fassadensanierung',
    text: 'Ausbesserungen und fachgerechte Sanierung von Fassaden.',
  },
  {
    icon: Sparkles,
    title: 'Innenrenovierung',
    text: 'Saubere Renovierungsarbeiten für Wohnungen und Häuser.',
  },
  {
    icon: ClipboardCheck,
    title: 'Persönliche Beratung',
    text: 'Direkter Kontakt und individuelle Lösungen für jedes Projekt.',
  },
  {
    icon: BadgeCheck,
    title: 'Zuverlässige Ausführung',
    text: 'Termintreue, Qualität und sauberes Arbeiten.',
  },
];

export default function ServicesPreview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <p className={styles.eyebrow}>Meine Leistungen</p>

          <h2 className={styles.title}>
            Professionelle Arbeiten für Innenräume und Fassaden
          </h2>

          <p className={styles.text}>
            Als selbstständiger Handwerker begleite ich Ihr Projekt persönlich —
            von der Beratung bis zur sauberen Fertigstellung.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className={styles.card}>
              <div className={styles.icon}>
                <Icon size={34} strokeWidth={1.8} />
              </div>

              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
