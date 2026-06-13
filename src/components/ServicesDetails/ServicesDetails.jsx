import { CheckCircle2 } from 'lucide-react';

import styles from './ServicesDetails.module.css';
import img1 from '../../assets/images/project-1.jpg';
import img2 from '../../assets/images/project-2.jpg';
import img3 from '../../assets/images/project-3.jpg';

const services = [
  {
    title: 'Malerarbeiten',
    subtitle: 'Saubere Anstriche für Innenräume',
    text: 'Ich übernehme präzise Malerarbeiten für Wohnungen, Häuser und einzelne Räume. Der Fokus liegt auf sauberer Vorbereitung, hochwertigen Materialien und einem Ergebnis, das langfristig überzeugt.',
    image: img1,
    imageMobile: img1,
    alt: 'Malerarbeiten im Innenraum mit sauber gestrichenen Wänden',
    points: [
      'Innenanstriche',
      'Deckenanstriche',
      'Wandgestaltung',
      'Renovierungsanstriche',
      'Saubere Vorbereitung der Flächen',
    ],
  },
  {
    title: 'Fassadenarbeiten',
    subtitle: 'Schutz und neues Erscheinungsbild',
    text: 'Eine gepflegte Fassade schützt Ihr Gebäude und sorgt für einen hochwertigen ersten Eindruck. Ich führe Fassadenanstriche und vorbereitende Arbeiten sorgfältig und wetterbeständig aus.',
    image: img2,
    imageMobile: img2,
    alt: 'Professionell gestrichene Hausfassade nach Fassadenarbeiten',
    points: [
      'Fassadenanstriche',
      'Wetterbeständige Beschichtungen',
      'Farbberatung',
      'Ausbesserungsarbeiten',
      'Schutz vor Witterungseinflüssen',
    ],
  },
  {
    title: 'Fassadensanierung & Renovierung',
    subtitle: 'Sorgfältige Erneuerung mit persönlicher Betreuung',
    text: 'Ob kleinere Ausbesserungen oder komplette Renovierung: Ich begleite Ihr Projekt persönlich und achte auf eine ordentliche, zuverlässige und termingerechte Umsetzung.',
    image: img3,
    imageMobile: img3,
    alt: 'Renovierungsarbeiten und Fassadensanierung an einem Wohnhaus',
    points: [
      'Fassadensanierung',
      'Wohnungsrenovierung',
      'Hausrenovierung',
      'Spachtel- und Vorarbeiten',
      'Termingerechte Fertigstellung',
    ],
  },
];

export default function ServicesDetails() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <p className={styles.eyebrow}>Leistungsbereiche</p>

          <h2 className={styles.title}>
            Maler- und Fassadenarbeiten aus einer Hand
          </h2>

          <p className={styles.text}>
            Als selbstständiger Handwerker bin ich Ihr direkter Ansprechpartner.
            Ich plane und realisiere jedes Projekt persönlich — ohne unnötige
            Umwege.
          </p>
        </div>

        <div className={styles.list}>
          {services.map((service, index) => (
            <article key={service.title} className={styles.item}>
              <div className={styles.media}>
                <picture>
                  <source
                    srcSet={service.imageMobile}
                    media="(max-width: 620px)"
                    type="image/webp"
                  />
                  <img
                    src={service.image}
                    alt={service.alt}
                    className={styles.image}
                    loading="lazy"
                    width="720"
                    height="520"
                  />
                </picture>
              </div>

              <div className={styles.content}>
                <span className={styles.number}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p className={styles.subtitle}>{service.subtitle}</p>

                <h3>{service.title}</h3>

                <p className={styles.description}>{service.text}</p>

                <ul className={styles.points}>
                  {service.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={18} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
