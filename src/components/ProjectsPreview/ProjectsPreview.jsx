import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

import styles from './ProjectsPreview.module.css';
import img1 from '../../assets/images/project-1.jpg';
import img2 from '../../assets/images/project-2.jpg';
import img3 from '../../assets/images/project-3.jpg';

const projects = [
  {
    title: 'Spachtelarbeiten',
    text: 'Professionell vorbereitete Wand- und Deckenflächen für hochwertige Endbeschichtungen.',
    image: img1,
    alt: 'Professionelle Spachtelarbeiten an Wänden und Decken',
  },
  {
    title: 'Fassadenanstrich',
    text: 'Witterungsbeständiger Fassadenanstrich für Schutz und ein modernes Erscheinungsbild.',
    image: img2,
    alt: 'Modernisierte Hausfassade nach Fassadenanstrich',
  },
  {
    title: 'Trockenbau & Renovierung',
    text: 'Innenausbau, Renovierungsarbeiten und saubere Umsetzung individueller Projekte.',
    image: img3,
    alt: 'Trockenbau- und Renovierungsarbeiten im Innenbereich',
  },
];

export default function ProjectsPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.bgBlur} aria-hidden="true" />

      <div className="container">
        <div className={styles.head}>
          <p className={styles.eyebrow}>Referenzen</p>

          <h2 className={styles.title}>Einblicke in abgeschlossene Projekte</h2>

          <p className={styles.text}>
            Beispiele aus den Bereichen Spachtelarbeiten, Fassadenanstriche,
            Trockenbau, Bodenverlegung und Renovierungsarbeiten.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <picture>
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
