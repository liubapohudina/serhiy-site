import { Link } from 'react-router';
import { ArrowRight, Phone } from 'lucide-react';

import styles from './ContactHero.module.css';
import img from '../../assets/video/poster.png';

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <picture>
        {/* <source
          srcSet="/img/contact-hero-mobile.webp"
          media="(max-width: 620px)"
          type="image/webp"
        /> */}

        <img
          src={img}
          alt="Kontakt für professionelle Malerarbeiten und Fassadenarbeiten"
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
            Sie planen Malerarbeiten, einen Fassadenanstrich oder eine
            Renovierung? Kontaktieren Sie mich für eine unverbindliche Beratung.
          </p>

          <div className={styles.actions}>
            <a href="#contact-form" className={styles.primaryBtn}>
              Jetzt anfragen
              <ArrowRight size={19} />
            </a>

            <a href="tel:+4917612345678" className={styles.secondaryBtn}>
              <Phone size={18} />
              Telefonisch kontaktieren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
