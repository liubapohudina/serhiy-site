import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

import styles from './ServicesHero.module.css';
import img from '../../assets/video/poster.png';

export default function ServicesHero() {
  return (
    <section className={styles.hero}>
      <picture>
        {/* <source
          srcSet="/img/services-hero-mobile.webp"
          media="(max-width: 620px)"
          type="image/webp"
        /> */}
        <img
          src={img}
          alt="Professionelle Malerarbeiten und Fassadenarbeiten"
          className={styles.image}
          width="1920"
          height="760"
        />
      </picture>

      <div className={styles.overlay} />

      <div className="container">
        <div className={styles.content}>
          <p className={styles.eyebrow}>Meine Leistungen</p>

          <h1 className={styles.title}>
            Professionelle Lösungen für Innenräume und Fassaden
          </h1>

          <p className={styles.text}>
            Ich biete hochwertige Malerarbeiten, Innenanstriche,
            Fassadenanstriche, Fassadensanierung und Renovierungsarbeiten —
            persönlich, sauber und zuverlässig.
          </p>

          <Link to="/kontakt" className={styles.btn}>
            Kostenlose Anfrage
            <ArrowRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}
