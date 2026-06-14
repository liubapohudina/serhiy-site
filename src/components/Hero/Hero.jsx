import { Link } from 'react-router';
import {
  ArrowRight,
  Paintbrush,
  Building2,
  Hammer,
  BadgeCheck,
} from 'lucide-react';

import styles from './Hero.module.css';
import v from '../../assets/video/v-1.mp4';
import poster from '../../assets/video/poster.webp';

const features = [
  {
    icon: Paintbrush,
    title: 'Spachtelarbeiten & Airless-Anstriche',
    text: 'Saubere Oberflächen und gleichmäßige Beschichtungen für Innenräume.',
  },
  {
    icon: Building2,
    title: 'Fassadenanstriche',
    text: 'Schutz, Werterhalt und ein gepflegtes Erscheinungsbild Ihrer Fassade.',
  },
  {
    icon: Hammer,
    title: 'Trockenbau & Bodenverlegung',
    text: 'Verlegung von Laminat, Vinyl und Parkett sowie Trockenbauarbeiten.',
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
            Spachtelarbeiten • Airless-Anstriche • Trockenbau
          </p>

          <h1 className={styles.title}>
            Professionelle Renovierungsarbeiten für Wohnungen, Häuser und
            Gewerbeobjekte
          </h1>

          <p className={styles.text}>
            Ich biete Spachtelarbeiten, Airless-Anstriche, Fassadenanstriche,
            Trockenbau, Bodenverlegung und Renovierungsarbeiten – zuverlässig,
            sauber und termingerecht.
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
