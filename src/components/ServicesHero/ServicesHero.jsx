import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

import styles from './ServicesHero.module.css';
import img from '../../assets/images/hero-master.webp';
import imgM from '../../assets/images/hero-master-mobile.webp';

export default function ServicesHero() {
  return (
    <section className={styles.hero}>
      <picture>
        <source srcSet={imgM} media="(max-width: 620px)" type="image/webp" />

        <img
          src={img}
          alt="Spachtelarbeiten, Trockenbau und Renovierungsarbeiten"
          className={styles.image}
          width="1920"
          height="760"
        />
      </picture>

      <div className={styles.overlay} />

      <div className="container">
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            Spachtelarbeiten • Airless-Anstriche • Trockenbau
          </p>

          <h1 className={styles.title}>
            Professionelle Renovierungsarbeiten und Innenausbau
          </h1>

          <p className={styles.text}>
            Mit über 20 Jahren Erfahrung biete ich Spachtelarbeiten,
            Airless-Anstriche, Fassadenanstriche, Trockenbau, Bodenverlegung und
            Renovierungsarbeiten für Wohnungen, Häuser und Gewerbeobjekte.
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
