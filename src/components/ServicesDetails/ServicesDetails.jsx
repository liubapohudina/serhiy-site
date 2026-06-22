import { CheckCircle2 } from 'lucide-react';

import styles from './ServicesDetails.module.css';
import img1 from '../../assets/images/ceiling-1.webp';
import img2 from '../../assets/images/decor-1.webp';
import img3 from '../../assets/images/facade-1.webp';

const services = [
  {
    title: 'Deckengestaltung & moderne Deckensysteme',
    subtitle: 'Individuelle Lösungen für Wohn- und Geschäftsräume',
    text: 'Ich gestalte Decken mit modernen Trockenbausystemen, Spanndecken und kreativen Konstruktionen. Jede Lösung wird präzise umgesetzt und an den Raum angepasst.',
    image: img1,
    imageMobile: img1,
    alt: 'Moderne Deckengestaltung und Trockenbaudecken',
    points: [
      'Trockenbau-Decken',
      'Spanndecken',
      'Integrierte Beleuchtung',
      'Abgehängte Decken',
      'Individuelle Deckenkonstruktionen',
    ],
  },
  {
    title: 'Dekorative Wand- und Oberflächengestaltung',
    subtitle: 'Hochwertige dekorative Techniken für einzigartige Räume',
    text: 'Ich biete dekorative Beschichtungen, Strukturputz und moderne Wandtechniken an. Jede Oberfläche wird sorgfältig vorbereitet und handwerklich präzise ausgeführt.',
    image: img2,
    imageMobile: img2,
    alt: 'Dekorative Wandgestaltung und Strukturputz',
    points: [
      'Dekorative Beschichtungen',
      'Strukturputz',
      'Moderne Wandtechniken',
      'Individuelle Designs',
      'Hochwertige Materialien',
    ],
  },
  {
    title: 'Fassadenarbeiten & Außenrenovierung',
    subtitle: 'Schutz, Modernisierung und langlebige Ergebnisse',
    text: 'Ich übernehme Fassadenanstriche, Reparaturen und Modernisierungen für Wohn- und Gewerbeobjekte. Ziel ist eine langlebige, wetterbeständige und optisch ansprechende Fassade.',
    image: img3,
    imageMobile: img3,
    alt: 'Professionelle Fassadenarbeiten und Außenrenovierung',
    points: [
      'Fassadenanstriche',
      'Wetterbeständige Beschichtungen',
      'Reparatur und Ausbesserung',
      'Modernisierung von Fassaden',
      'Saubere und zuverlässige Umsetzung',
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
            Fassaden, Decken und dekorative Oberflächen
          </h2>

          <p className={styles.text}>
            Als selbstständiger Handwerker mit über 20 Jahren Erfahrung biete
            ich hochwertige Fassadenarbeiten, moderne Deckensysteme und
            dekorative Oberflächengestaltung für Wohn- und Gewerbeobjekte.
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
