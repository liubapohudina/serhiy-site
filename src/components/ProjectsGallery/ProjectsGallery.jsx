import { useEffect, useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

import styles from './ProjectsGallery.module.css';

import img1 from '../../assets/images/project-1.jpg';
import img2 from '../../assets/images/project-1.jpg';
import img3 from '../../assets/images/project-1.jpg';
import img4 from '../../assets/images/project-1.jpg';
import img5 from '../../assets/images/project-1.jpg';
import img6 from '../../assets/images/project-1.jpg';

const projects = [
  {
    title: 'Innenanstrich im Wohnbereich',
    category: 'Malerarbeiten',
    text: 'Helle Wandflächen, saubere Übergänge und ein modernes Wohngefühl.',
    image: img1,
    alt: 'Heller Wohnraum nach professionellem Innenanstrich',
  },
  {
    title: 'Fassade mit neuem Anstrich',
    category: 'Fassadenanstrich',
    text: 'Frische Optik und wetterbeständiger Schutz für die Außenfassade.',
    image: img2,
    alt: 'Hausfassade nach professionellem Fassadenanstrich',
  },
  {
    title: 'Renovierung eines Flurbereichs',
    category: 'Renovierung',
    text: 'Gepflegte Oberflächen und ein sauberer, freundlicher Eingangsbereich.',
    image: img3,
    alt: 'Renovierter Flur nach Malerarbeiten',
  },
  {
    title: 'Fassadensanierung am Wohnhaus',
    category: 'Fassadensanierung',
    text: 'Ausbesserung, Vorbereitung und neuer Schutz für die Gebäudehülle.',
    image: img4,
    alt: 'Sanierte Fassade eines Wohnhauses',
  },
  {
    title: 'Decken- und Wandgestaltung',
    category: 'Innenanstrich',
    text: 'Gleichmäßige Beschichtung für ein klares und hochwertiges Raumgefühl.',
    image: img5,
    alt: 'Frisch gestrichene Decke und Wände im Innenraum',
  },
  {
    title: 'Außenbereich modernisiert',
    category: 'Fassadenarbeiten',
    text: 'Stimmige Farbwahl und saubere Verarbeitung für ein gepflegtes Gesamtbild.',
    image: img6,
    alt: 'Modernisierter Außenbereich mit neuer Fassadenfarbe',
  },
];

export default function ProjectsGallery() {
  const [activeProject, setActiveProject] = useState(null);

  const closeModal = () => setActiveProject(null);

  useEffect(() => {
    if (!activeProject) return;

    document.body.classList.add('lock');

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('lock');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.blur} aria-hidden="true" />

        <div className="container">
          <div className={styles.head}>
            <p className={styles.eyebrow}>Galerie</p>

            <h2 className={styles.title}>
              Arbeiten, die Qualität sichtbar machen
            </h2>

            <p className={styles.text}>
              Jede Fläche wird sorgfältig vorbereitet und sauber ausgeführt — ob
              Innenraum, Fassade oder Renovierung.
            </p>
          </div>

          <div className={styles.grid}>
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`${styles.card} ${
                  index === 0 || index === 3 ? styles.large : ''
                }`}
              >
                <picture>
                  <img
                    src={project.image}
                    alt={project.alt}
                    className={styles.image}
                    loading="lazy"
                    width="760"
                    height="560"
                  />
                </picture>

                <div className={styles.overlay}>
                  <span className={styles.category}>{project.category}</span>

                  <div className={styles.info}>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                  </div>

                  <button
                    type="button"
                    className={styles.icon}
                    aria-label={`${project.title} vergrößern`}
                    onClick={() => setActiveProject(project)}
                  >
                    <ExternalLink size={20} strokeWidth={2.2} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          onMouseDown={closeModal}
        >
          <div
            className={styles.modalBox}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.close}
              aria-label="Galerie schließen"
              onClick={closeModal}
            >
              <X size={24} strokeWidth={2.2} />
            </button>

            <img
              src={activeProject.image}
              alt={activeProject.alt}
              className={styles.modalImage}
            />

            <div className={styles.modalContent}>
              <span>{activeProject.category}</span>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.text}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
