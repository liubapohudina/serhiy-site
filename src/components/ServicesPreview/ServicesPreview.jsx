import {
  BadgeCheck,
  Building2,
  Hammer,
  Paintbrush,
  PanelsTopLeft,
  Layers,
} from 'lucide-react';

import styles from './ServicesPreview.module.css';

const services = [
  {
    icon: Layers,
    title: 'Spachtelarbeiten',
    text: 'Professionelle Spachtelarbeiten für glatte und perfekt vorbereitete Oberflächen.',
  },
  {
    icon: Paintbrush,
    title: 'Airless-Anstriche',
    text: 'Effiziente und gleichmäßige Beschichtungen mit moderner Airless-Technik.',
  },
  {
    icon: Building2,
    title: 'Fassadenanstriche',
    text: 'Witterungsbeständige Anstriche für den Schutz und die Aufwertung Ihrer Fassade.',
  },
  {
    icon: PanelsTopLeft,
    title: 'Trockenbau',
    text: 'Errichtung von Trennwänden, Deckenverkleidungen und Innenausbauarbeiten.',
  },
  {
    icon: Hammer,
    title: 'Bodenverlegung',
    text: 'Verlegung von Laminat, Vinyl und Parkett für Wohn- und Geschäftsräume.',
  },
  {
    icon: BadgeCheck,
    title: 'Renovierungsarbeiten',
    text: 'Komplette Renovierungsarbeiten mit sauberer und zuverlässiger Ausführung.',
  },
];

export default function ServicesPreview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <p className={styles.eyebrow}>Meine Leistungen</p>

          <h2 className={styles.title}>
            Spachtelarbeiten, Trockenbau, Bodenverlegung und Renovierung
          </h2>

          <p className={styles.text}>
            Ich unterstütze Sie bei Renovierungs- und Ausbauprojekten – von
            Spachtelarbeiten und Airless-Anstrichen bis hin zu Trockenbau,
            Bodenverlegung und Fassadenanstrichen.
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
