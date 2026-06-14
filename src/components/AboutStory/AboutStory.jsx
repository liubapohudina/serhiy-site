import { CheckCircle2 } from 'lucide-react';

import styles from './AboutStory.module.css';
import img from '../../assets/images/about-master-story.webp';

export default function AboutStory() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.media}>
            <picture>
              <img
                src={img}
                alt="Serhii Drohaltsev bei Renovierungs- und Innenausbauarbeiten"
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
              Über 20 Jahre Erfahrung im Handwerk
            </h2>

            <p className={styles.text}>
              Seit über 20 Jahren arbeite ich im Bereich Renovierung,
              Innenausbau und Modernisierung. In dieser Zeit habe ich zahlreiche
              Projekte für Privatkunden und Unternehmen erfolgreich umgesetzt.
              Dabei habe ich gelernt, dass hochwertige Handwerksarbeit nicht nur
              Fachwissen erfordert, sondern auch Zuverlässigkeit, saubere
              Kommunikation und Liebe zum Detail.
            </p>

            <p className={styles.text}>
              Heute begleite ich jedes Projekt persönlich – von der ersten
              Beratung bis zur Fertigstellung. Ob Spachtelarbeiten,
              Airless-Anstriche, Trockenbau, Bodenverlegung oder
              Renovierungsarbeiten: Sie wissen jederzeit genau, mit wem Sie
              zusammenarbeiten.
            </p>

            <ul className={styles.list}>
              <li>
                <CheckCircle2 size={19} />
                Persönliche Betreuung durch einen erfahrenen Handwerker
              </li>

              <li>
                <CheckCircle2 size={19} />
                Über 20 Jahre Erfahrung in Renovierung und Innenausbau
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
