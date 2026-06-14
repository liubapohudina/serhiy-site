import { ArrowRight, Phone } from 'lucide-react';

import styles from './ContactHero.module.css';
import img from '../../assets/images/hero-master.webp';
import imgM from '../../assets/images/hero-master-mobile.webp';

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <picture>
        <source srcSet={imgM} media="(max-width: 620px)" type="image/webp" />
        <img
          src={img}
          alt="Kontakt für Renovierungsarbeiten und Innenausbau in Offenbach am Main"
          className={styles.image}
          width="1920"
          height="680"
        />
      </picture>

      <div className={styles.overlay} />

      <div className="container">
        <div className={styles.content}>
          <p className={styles.eyebrow}>Kontakt</p>

          <h1 className={styles.title}>
            Lassen Sie uns über Ihr Projekt sprechen
          </h1>

          <p className={styles.text}>
            Sie planen Spachtelarbeiten, Trockenbau, Bodenverlegung,
            Airless-Anstriche oder eine Renovierung? Kontaktieren Sie mich für
            eine persönliche und unverbindliche Beratung.
          </p>

          <div className={styles.actions}>
            <a href="#contact-form" className={styles.primaryBtn}>
              Jetzt anfragen
              <ArrowRight size={19} />
            </a>

            <a href="tel:+4915256507271" className={styles.secondaryBtn}>
              <Phone size={18} />
              +49 152 56507271
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
