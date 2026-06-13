import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

import styles from './ProjectsPreview.module.css';
import img1 from '../../assets/images/project-1.jpg';
import img2 from '../../assets/images/project-2.jpg';
import img3 from '../../assets/images/project-3.jpg';

const projects = [
  {
    title: 'Innenanstrich',
    text: 'Saubere Wand- und Deckenanstriche für helle, gepflegte Wohnräume.',
    image: img1,
    // imageMobile: '/img/project-1-mobile.webp',
    alt: 'Frisch gestrichener heller Wohnraum nach professionellen Malerarbeiten',
  },
  {
    title: 'Fassadenanstrich',
    text: 'Neuer Schutz und modernes Erscheinungsbild für die Außenfassade.',
    image: img2,
    // imageMobile: '/img/project-2-mobile.webp',
    alt: 'Modernisierte Hausfassade nach professionellem Fassadenanstrich',
  },
  {
    title: 'Fassadensanierung',
    text: 'Ausbesserung, Vorbereitung und saubere Beschichtung der Fassade.',
    image: img3,
    // imageMobile: '/img/project-3-mobile.webp',
    alt: 'Sanierte Fassade eines Wohnhauses nach Renovierungsarbeiten',
  },
];

export default function ProjectsPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.bgBlur} aria-hidden="true" />

      <div className="container">
        <div className={styles.head}>
          <p className={styles.eyebrow}>Projekte</p>

          <h2 className={styles.title}>Einblicke in abgeschlossene Arbeiten</h2>

          <p className={styles.text}>
            Eine kleine Auswahl typischer Arbeiten aus dem Bereich
            Malerarbeiten, Fassadenanstriche und Renovierung.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <picture>
                {/* <source
                  srcSet={project.imageMobile}
                  media="(max-width: 620px)"
                  type="image/webp"
                /> */}
                <img
                  src={project.image}
                  alt={project.alt}
                  className={styles.image}
                  loading="lazy"
                  width="520"
                  height="420"
                />
              </picture>

              <div className={styles.content}>
                <span className={styles.label}>{project.title}</span>
                <p>{project.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.action}>
          <Link to="/projekte" className={styles.btn}>
            Weitere Projekte ansehen
            <ArrowRight size={18} strokeWidth={2.3} />
          </Link>
        </div>
      </div>
    </section>
  );
}
