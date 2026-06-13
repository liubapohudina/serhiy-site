import { Link } from 'react-router';
import { ArrowRight, BadgeCheck, House, Paintbrush } from 'lucide-react';

import styles from './Hero.module.css';
import v from '../../assets/video/v-1.mp4';
import poster from '../../assets/video/poster.png';

const features = [
  {
    icon: Paintbrush,
    title: 'Malerarbeiten',
    text: 'Präzise Ausführung und hochwertige Ergebnisse',
  },
  {
    icon: House,
    title: 'Fassadenarbeiten',
    text: 'Schutz und modernes Erscheinungsbild Ihrer Immobilie',
  },
  {
    icon: BadgeCheck,
    title: 'Zuverlässiger Service',
    text: 'Persönliche Beratung und termingerechte Umsetzung',
  },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src={v}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className={styles.mobileImage} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />

      <div className="container">
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            Ihr Experte für Maler- & Fassadenarbeiten
          </p>

          <h1 className={styles.title}>
            Professionelle Maler- und Fassadenarbeiten mit höchster Sorgfalt
          </h1>

          <p className={styles.text}>
            Innenanstriche, Fassadenanstriche, Fassadensanierung und
            Renovierungsarbeiten — sauber, zuverlässig und termingerecht.
          </p>

          <div className={styles.actions}>
            <Link to="/kontakt" className={styles.primaryBtn}>
              Jetzt Anfrage senden
              <ArrowRight size={20} strokeWidth={2.3} />
            </Link>

            <Link to="/leistungen" className={styles.secondaryBtn}>
              Leistungen ansehen
            </Link>
          </div>

          <div className={styles.features}>
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className={styles.feature}>
                <span className={styles.featureIcon}>
                  <Icon size={28} strokeWidth={1.9} />
                </span>

                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
