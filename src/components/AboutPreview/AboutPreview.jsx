import { Link } from 'react-router';
import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Handshake,
  ShieldCheck,
} from 'lucide-react';

import styles from './AboutPreview.module.css';
import imgDesk from '../../assets/video/about-master.webp';
import imgMob from '../../assets/video/about-master-mobile.webp';
import aboutVideo from '../../assets/video/aboutVideo.mp4';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Saubere Ausführung',
    text: 'Sorgfältige Arbeiten mit hohem Qualitätsanspruch und Blick fürs Detail.',
  },
  {
    icon: Clock,
    title: 'Termintreue',
    text: 'Zuverlässige Planung und pünktliche Fertigstellung der Arbeiten.',
  },
  {
    icon: Handshake,
    title: 'Persönlicher Kontakt',
    text: 'Direkte Kommunikation ohne Vermittler oder wechselnde Ansprechpartner.',
  },
  {
    icon: CheckCircle2,
    title: 'Individuelle Lösungen',
    text: 'Passende Konzepte für Renovierung, Ausbau und Modernisierung.',
  },
];

export default function AboutPreview() {
  const [videoError, setVideoError] = useState(false);
  return (
    <section className={styles.section}>
      <div className={styles.imageCol}>
        {!videoError ? (
          <video
            className={styles.image}
            autoPlay
            muted
            loop
            playsInline
            poster={imgDesk}
            onError={() => setVideoError(true)}
          >
            <source src={aboutVideo} type="video/mp4" />
          </video>
        ) : (
          <picture>
            <source
              srcSet={imgMob}
              media="(max-width: 620px)"
              type="image/webp"
            />
            <img
              src={imgDesk}
              alt="Handwerker bei Spachtelarbeiten und Renovierungsarbeiten"
              className={styles.image}
              loading="lazy"
              width="542"
              height="620"
            />
          </picture>
        )}
      </div>

      <div className="container">
        <div className={styles.contentGrid}>
          <div className={styles.spacer} />

          <div className={styles.content}>
            <p className={styles.eyebrow}>Über mich</p>
            <h2 className={styles.title}>
              Über 20 Jahre Erfahrung im Innenausbau und Renovierungsbereich
            </h2>
            <p className={styles.text}>
              Mein Name ist Serhii Drohaltsev. Seit über 20 Jahren bin ich im
              Bereich Renovierung und Innenausbau tätig. Ich unterstütze
              Privatkunden und Unternehmen bei Spachtelarbeiten,
              Airless-Anstrichen, Fassadenanstrichen, Trockenbau, Bodenverlegung
              und Renovierungsarbeiten. Dabei lege ich großen Wert auf Qualität,
              Zuverlässigkeit und eine saubere Ausführung aller Arbeiten.
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
