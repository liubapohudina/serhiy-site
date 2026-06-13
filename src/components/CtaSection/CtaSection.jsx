import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

import styles from './CtaSection.module.css';
import img from '../../assets/images/cta.jpg';

export default function CtaSection() {
  return (
    <section className={styles.section}>
      <picture>
        {/* <source
          srcSet="/img/cta-mobile.webp"
          media="(max-width: 620px)"
          type="image/webp"
        /> */}

        <img
          src={img}
          alt="Modern renovierter Wohnraum nach professionellen Malerarbeiten"
          className={styles.image}
          loading="lazy"
          width="1920"
          height="600"
        />
      </picture>

      <div className={styles.overlay} />

      <div className="container">
        <div className={styles.content}>
          <div>
            <p className={styles.eyebrow}>Kostenlose Beratung</p>

            <h2 className={styles.title}>
              Planen Sie Maler- oder Fassadenarbeiten?
            </h2>

            <p className={styles.text}>
              Lassen Sie uns Ihr Projekt gemeinsam besprechen und die passende
              Lösung für Ihr Zuhause finden.
            </p>
          </div>

          <Link to="/kontakt" className={styles.btn}>
            Kontakt aufnehmen
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
