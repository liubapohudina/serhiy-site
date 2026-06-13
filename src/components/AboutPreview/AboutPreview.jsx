import { Link } from 'react-router';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Handshake,
  ShieldCheck,
} from 'lucide-react';

import styles from './AboutPreview.module.css';
import imgDesk from '../../assets/images/about-master.jpg';
import imgMob from '../../assets/images/about-master-mobile.jpg';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Saubere Ausführung',
    text: 'Ich arbeite sorgfältig, ordentlich und mit Blick fürs Detail.',
  },
  {
    icon: Clock,
    title: 'Termintreue',
    text: 'Absprachen und Termine werden zuverlässig eingehalten.',
  },
  {
    icon: Handshake,
    title: 'Persönlicher Kontakt',
    text: 'Sie sprechen direkt mit mir — ohne Zwischenwege.',
  },
  {
    icon: CheckCircle2,
    title: 'Faire Umsetzung',
    text: 'Transparente Beratung und passende Lösungen für Ihr Projekt.',
  },
];

export default function AboutPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.imageCol}>
        <picture>
          <source
            srcSet={imgMob}
            media="(max-width: 620px)"
            type="image/webp"
          />
          <img
            src={imgDesk}
            alt="Malermeister bei sorgfältigen Malerarbeiten im Innenraum"
            className={styles.image}
            loading="lazy"
            width="760"
            height="620"
          />
        </picture>
      </div>

      <div className="container">
        <div className={styles.contentGrid}>
          <div className={styles.spacer} />

          <div className={styles.content}>
            <p className={styles.eyebrow}>Über mich</p>

            <h2 className={styles.title}>
              Persönliche Handwerksarbeit für schöne Innenräume und gepflegte
              Fassaden
            </h2>

            <p className={styles.text}>
              Ich bin Ihr direkter Ansprechpartner für Malerarbeiten,
              Innenanstriche, Fassadenanstriche und Renovierungsarbeiten. Jedes
              Projekt wird persönlich geplant und sauber umgesetzt — mit
              Sorgfalt, Erfahrung und zuverlässiger Kommunikation.
            </p>

            <div className={styles.benefits}>
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className={styles.benefit}>
                  <span className={styles.icon}>
                    <Icon size={22} strokeWidth={2} />
                  </span>

                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/ueber-mich" className={styles.btn}>
              Mehr über mich
              <ArrowRight size={19} strokeWidth={2.3} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
