import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

import styles from './ProjectsPreview.module.css';

import facadeDesktop from '../../assets/images/facade-desktop.webp';
import facadeMobile from '../../assets/images/facade-mobile.webp';

import ceilingDesktop from '../../assets/images/ceiling-desktop.webp';
import ceilingMobile from '../../assets/images/ceiling-mobile.webp';

import decorDesktop from '../../assets/images/decor-desktop.webp';
import decorMobile from '../../assets/images/decor-mobile.webp';

const projects = [
  {
    title: 'Fassadenarbeiten',
    text: 'Professionelle Fassadengestaltung, langlebige Beschichtungen und moderne Optik.',
    imageDesktop: facadeDesktop,
    imageMobile: facadeMobile,
    alt: 'Renovierte und modernisierte Hausfassade',
  },
  {
    title: 'Deckengestaltung',
    text: 'Spanndecken, Trockenbau-Decken und kreative Lösungen für jeden Raum.',
    imageDesktop: ceilingDesktop,
    imageMobile: ceilingMobile,
    alt: 'Moderne Deckengestaltung mit Beleuchtung',
  },
  {
    title: 'Dekorative Oberflächen',
    text: 'Strukturputz, dekorative Beschichtungen und individuelle Wandgestaltung.',
    imageDesktop: decorDesktop,
    imageMobile: decorMobile,
    alt: 'Dekorative Wandoberfläche mit Struktur',
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
            Beispiele aus den Bereichen Fassadenarbeiten, Deckengestaltung und
            dekorativen Oberflächen.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <picture>
                <source
                  srcSet={project.imageMobile}
                  media="(max-width: 600px)"
                  type="image/webp"
                />
                <source
                  srcSet={project.imageDesktop}
                  media="(min-width: 601px)"
                  type="image/webp"
                />

                <img
                  src={project.imageDesktop}
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
