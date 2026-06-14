import { BadgeCheck, Hammer, Layers, ShieldCheck } from 'lucide-react';

import styles from './AboutExperience.module.css';

const timeline = [
  {
    year: '20+',
    title: 'Jahre Erfahrung',
    text: 'Langjährige Erfahrung im Bereich Renovierung, Innenausbau und Modernisierung.',
  },
  {
    year: '100%',
    title: 'Persönliche Betreuung',
    text: 'Jedes Projekt wird direkt von mir geplant, begleitet und umgesetzt.',
  },
  {
    year: '1',
    title: 'Fester Ansprechpartner',
    text: 'Direkter Kontakt ohne Vermittler oder wechselnde Ansprechpartner.',
  },
];

const skills = [
  {
    icon: Layers,
    title: 'Spachtelarbeiten',
    text: 'Professionelle Vorbereitung von Wänden und Decken für perfekte Oberflächen.',
  },
  {
    icon: Hammer,
    title: 'Trockenbau & Bodenverlegung',
    text: 'Innenausbau sowie Verlegung von Laminat, Vinyl und Parkett.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualität & Langlebigkeit',
    text: 'Hochwertige Materialien und sorgfältige Ausführung für dauerhafte Ergebnisse.',
  },
  {
    icon: BadgeCheck,
    title: 'Zuverlässigkeit',
    text: 'Klare Kommunikation, faire Beratung und termingerechte Umsetzung.',
  },
];

export default function AboutExperience() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <p className={styles.eyebrow}>Erfahrung & Arbeitsweise</p>

          <h2 className={styles.title}>
            Über 20 Jahre Erfahrung im Renovierungs- und Innenausbaubereich
          </h2>

          <p className={styles.text}>
            Mein Ziel ist es, jedes Projekt mit hoher Qualität, persönlicher
            Betreuung und sauberer Ausführung umzusetzen. Dabei stehen
            Zuverlässigkeit, Transparenz und langlebige Ergebnisse im
            Mittelpunkt.
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
