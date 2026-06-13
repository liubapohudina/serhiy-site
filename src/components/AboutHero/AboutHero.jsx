import { ArrowRight, BadgeCheck, Clock, Paintbrush } from 'lucide-react';
import { Link } from 'react-router';

import styles from './AboutHero.module.css';
import img from '../../assets/video/poster.png';

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <picture>
        {/* <source
          srcSet="/img/about-hero-mobile.webp"
          media="(max-width: 620px)"
          type="image/webp"
        /> */}
        <img
          src={img}
          alt="Serhii Drohaltsev bei professionellen Malerarbeiten"
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
            Persönliche Handwerksarbeit mit über 10 Jahren Erfahrung
          </h1>

          <p className={styles.text}>
            Ich bin Serhii Drohaltsev — Ihr direkter Ansprechpartner für
            Malerarbeiten, Fassadenanstriche, Fassadensanierung und
            Renovierungsarbeiten.
          </p>

          <div className={styles.stats}>
            <div>
              <Paintbrush size={24} />
              <span>10+ Jahre Erfahrung</span>
            </div>

            <div>
              <BadgeCheck size={24} />
              <span>Saubere Ausführung</span>
            </div>

            <div>
              <Clock size={24} />
              <span>Termintreue Arbeit</span>
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
