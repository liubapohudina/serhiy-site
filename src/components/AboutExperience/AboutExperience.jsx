import { BadgeCheck, Brush, Home, ShieldCheck } from 'lucide-react';

import styles from './AboutExperience.module.css';

const timeline = [
  {
    year: '10+',
    title: 'Jahre Erfahrung',
    text: 'Praktische Erfahrung mit Malerarbeiten, Fassaden und Renovierungsprojekten.',
  },
  {
    year: '100%',
    title: 'Persönliche Betreuung',
    text: 'Jedes Projekt wird direkt von mir begleitet und abgestimmt.',
  },
  {
    year: '1',
    title: 'Fester Ansprechpartner',
    text: 'Keine wechselnden Kontakte — Sie sprechen direkt mit dem Handwerker.',
  },
];

const skills = [
  {
    icon: Brush,
    title: 'Malerarbeiten',
    text: 'Innenanstriche, Decken, Wände und saubere Oberflächen.',
  },
  {
    icon: Home,
    title: 'Fassaden',
    text: 'Fassadenanstriche, Schutzbeschichtungen und Sanierungsarbeiten.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualität',
    text: 'Ordentliche Vorbereitung und langlebige Ausführung.',
  },
  {
    icon: BadgeCheck,
    title: 'Zuverlässigkeit',
    text: 'Klare Absprachen, faire Kommunikation und Termintreue.',
  },
];

export default function AboutExperience() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <p className={styles.eyebrow}>Erfahrung & Arbeitsweise</p>

          <h2 className={styles.title}>Handwerk, das persönlich bleibt</h2>

          <p className={styles.text}>
            Ich lege Wert auf klare Beratung, saubere Vorbereitung und eine
            Ausführung, die nicht nur gut aussieht, sondern auch lange hält.
          </p>
        </div>

        <div className={styles.timeline}>
          {timeline.map((item) => (
            <article key={item.title} className={styles.timelineCard}>
              <strong>{item.year}</strong>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.skills}>
          {skills.map(({ icon: Icon, title, text }) => (
            <article key={title} className={styles.skill}>
              <span>
                <Icon size={24} strokeWidth={2} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
