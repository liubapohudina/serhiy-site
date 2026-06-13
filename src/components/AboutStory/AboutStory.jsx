import { CheckCircle2 } from 'lucide-react';

import styles from './AboutStory.module.css';
import img from '../../assets/images/about-master.jpg';

export default function AboutStory() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.media}>
            <picture>
              {/* <source
                srcSet="/img/about-story-mobile.webp"
                media="(max-width: 620px)"
                type="image/webp"
              /> */}
              <img
                src={img}
                alt="Saubere Vorbereitung für Malerarbeiten im Innenraum"
                className={styles.image}
                loading="lazy"
                width="760"
                height="620"
              />
            </picture>
          </div>

          <div className={styles.content}>
            <p className={styles.eyebrow}>Meine Geschichte</p>

            <h2 className={styles.title}>
              Aus Erfahrung entsteht zuverlässige Qualität
            </h2>

            <p className={styles.text}>
              Seit mehr als 10 Jahren arbeite ich im Bereich Malerarbeiten,
              Renovierung und Fassadengestaltung. In dieser Zeit habe ich
              gelernt, dass gute Handwerksarbeit nicht nur aus Technik besteht,
              sondern auch aus Vertrauen, sauberer Kommunikation und einem
              ehrlichen Blick für Details.
            </p>

            <p className={styles.text}>
              Heute arbeite ich als selbstständiger Handwerker und begleite
              jedes Projekt persönlich. Vom ersten Gespräch über die
              Vorbereitung bis zur Fertigstellung wissen Sie genau, mit wem Sie
              arbeiten.
            </p>

            <ul className={styles.list}>
              <li>
                <CheckCircle2 size={19} />
                Persönliche Betreuung statt anonymer Abwicklung
              </li>
              <li>
                <CheckCircle2 size={19} />
                Erfahrung mit Innenräumen, Fassaden und Renovierungen
              </li>
              <li>
                <CheckCircle2 size={19} />
                Saubere Arbeitsweise und transparente Kommunikation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
