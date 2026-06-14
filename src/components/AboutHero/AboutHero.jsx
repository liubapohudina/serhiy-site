import { ArrowRight, BadgeCheck, Clock, Hammer } from 'lucide-react';
import { Link } from 'react-router';

import styles from './AboutHero.module.css';
import img from '../../assets/images/hero-master.webp';
import imgM from '../../assets/images/hero-master-mobile.webp';

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <picture>
        <source srcSet={imgM} media="(max-width: 620px)" type="image/webp" />
        <img
          src={img}
          alt="Serhii Drohaltsev mit über 20 Jahren Erfahrung im Innenausbau und Renovierungsbereich"
          className={styles.image}
          width="1920"
          height="760"
        />
      </picture>

      <div className={styles.overlay} />

      <div className="container">
        <div className={styles.content}>
          <p className={styles.eyebrow}>Über mich</p>

          <h1 className={styles.title}>
            Über 20 Jahre Erfahrung in Renovierung und Innenausbau
          </h1>

          <p className={styles.text}>
            Mein Name ist Serhii Drohaltsev. Als selbstständiger Handwerker
            unterstütze ich Privatkunden und Unternehmen bei Spachtelarbeiten,
            Airless-Anstrichen, Fassadenanstrichen, Trockenbau, Bodenverlegung
            und Renovierungsarbeiten.
          </p>

          <div className={styles.stats}>
            <div>
              <Hammer size={24} />
              <span>20+ Jahre Erfahrung</span>
            </div>

            <div>
              <BadgeCheck size={24} />
              <span>Persönliche Betreuung</span>
            </div>

            <div>
              <Clock size={24} />
              <span>Zuverlässige Umsetzung</span>
            </div>
          </div>

          <Link to="/kontakt" className={styles.btn}>
            Projekt besprechen
            <ArrowRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}
