import { CheckCircle2 } from 'lucide-react';

import styles from './ServicesDetails.module.css';
import img1 from '../../assets/images/ceiling-1.webp';
import img2 from '../../assets/images/decor-1.webp';
import img3 from '../../assets/images/facade-1.webp';

const services = [
  {
    title: 'Spachtelarbeiten & Airless-Anstriche',
    subtitle: 'Glatte Oberflächen und gleichmäßige Beschichtungen',
    text: 'Ich übernehme professionelle Spachtelarbeiten und Airless-Anstriche für Wohnungen, Häuser und Gewerbeobjekte. Der Fokus liegt auf sauberer Vorbereitung, präziser Ausführung und hochwertigen Ergebnissen.',
    image: img1,
    imageMobile: img1,
    alt: 'Professionelle Spachtelarbeiten und Airless-Anstriche im Innenraum',
    points: [
      'Spachtelarbeiten an Wänden und Decken',
      'Vorbereitung der Oberflächen',
      'Airless-Anstriche',
      'Gleichmäßige Beschichtungen',
      'Saubere Abdeckung und Ausführung',
    ],
  },
  {
    title: 'Trockenbau & Bodenverlegung',
    subtitle: 'Innenausbau für Wohn- und Geschäftsräume',
    text: 'Ich unterstütze Sie beim Innenausbau mit Trockenbauarbeiten und Bodenverlegung. Verlegt werden Laminat, Vinyl und Parkett — keine Fliesenarbeiten.',
    image: img2,
    imageMobile: img2,
    alt: 'Trockenbau und Bodenverlegung mit Laminat Vinyl und Parkett',
    points: [
      'Trockenbauarbeiten',
      'Trennwände und Deckenverkleidungen',
      'Laminatverlegung',
      'Vinylbodenverlegung',
      'Parkettverlegung',
    ],
  },
  {
    title: 'Fassadenanstriche & Renovierungsarbeiten',
    subtitle: 'Schutz, Modernisierung und saubere Umsetzung',
    text: 'Ob Fassadenanstrich oder komplette Renovierung: Ich begleite Ihr Projekt persönlich und setze die Arbeiten zuverlässig, termingerecht und mit über 20 Jahren Erfahrung um.',
    image: img3,
    imageMobile: img3,
    alt: 'Fassadenanstrich und Renovierungsarbeiten an einem Wohnhaus',
    points: [
      'Fassadenanstriche',
      'Wetterbeständige Beschichtungen',
      'Renovierungsarbeiten',
      'Modernisierung von Wohnungen und Häusern',
      'Persönliche Betreuung durch Serhii Drohaltsev',
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
            Spachtelarbeiten, Trockenbau, Bodenverlegung und Renovierung
          </h2>

          <p className={styles.text}>
            Als selbstständiger Handwerker mit über 20 Jahren Erfahrung bin ich
            Ihr direkter Ansprechpartner für Renovierungsarbeiten und
            Innenausbau in Offenbach am Main und Umgebung.
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
