import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

import styles from './CtaSection.module.css';
import img from '../../assets/images/cta.jpg';

export default function CtaSection() {
  return (
    <section className={styles.section}>
      <picture>
        <img
          src={img}
          alt="Professionelle Renovierungsarbeiten und Innenausbau"
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
            <p className={styles.eyebrow}>Kostenlose Beratung & Angebot</p>

            <h2 className={styles.title}>
              Planen Sie eine Renovierung oder einen Innenausbau?
            </h2>

            <p className={styles.text}>
              Kontaktieren Sie mich für Spachtelarbeiten, Airless-Anstriche,
              Trockenbau, Bodenverlegung, Fassadenanstriche und
              Renovierungsarbeiten. Ich berate Sie gerne persönlich und
              unverbindlich.
            </p>
          </div>

          <Link to="/kontakt" className={styles.btn}>
            Jetzt Kontakt aufnehmen
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
