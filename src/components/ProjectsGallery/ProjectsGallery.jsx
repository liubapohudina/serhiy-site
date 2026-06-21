import { useEffect, useMemo, useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import styles from './ProjectsGallery.module.css';

/* Fassaden */
import facade1 from '../../assets/images/facade-1.webp';
import facade2 from '../../assets/images/facade-2.webp';
import facade3 from '../../assets/images/facade-3.webp';
import facade4 from '../../assets/images/facade-4.webp';
import facade5 from '../../assets/images/facade-5.webp';
import facade6 from '../../assets/images/facade-6.webp';
import facade7 from '../../assets/images/facade-7.webp';
import facade8 from '../../assets/images/facade-8.webp';
import facade9 from '../../assets/images/facade-9.webp';
import facade10 from '../../assets/images/facade-10.webp';
import facade11 from '../../assets/images/facade-11.webp';
import facade12 from '../../assets/images/facade-12.webp';

/* Decken */
import ceiling1 from '../../assets/images/ceiling-1.webp';
import ceiling2 from '../../assets/images/ceiling-2.webp';
import ceiling3 from '../../assets/images/ceiling-3.webp';
import ceiling4 from '../../assets/images/ceiling-4.webp';
import ceiling5 from '../../assets/images/ceiling-5.webp';

/* Dekor */
import decor1 from '../../assets/images/decor-1.webp';
import decor2 from '../../assets/images/decor-2.webp';
import decor3 from '../../assets/images/decor-3.webp';
import decor4 from '../../assets/images/decor-4.webp';
import decor5 from '../../assets/images/decor-5.webp';
import decor6 from '../../assets/images/decor-6.webp';
import decor7 from '../../assets/images/decor-7.webp';

const filters = [
  { label: 'Alle Projekte', value: 'Alle' },
  { label: 'Fassaden', value: 'Fassaden' },
  { label: 'Decken', value: 'Decken' },
  { label: 'Dekor', value: 'Dekor' },
];

const projects = [
  ...[
    facade1,
    facade2,
    facade3,
    facade4,
    facade5,
    facade6,
    facade7,
    facade8,
    facade9,
    facade10,
    facade11,
    facade12,
  ].map((image, index) => ({
    title: `Fassadenarbeit ${index + 1}`,
    category: 'Fassaden',
    text: 'Professionelle Fassadenarbeiten mit sauberer Vorbereitung, langlebigem Schutz und hochwertiger Optik.',
    image,
    alt: `Professionelle Fassadenarbeit ${index + 1}`,
  })),

  ...[ceiling1, ceiling2, ceiling3, ceiling4, ceiling5].map((image, index) => ({
    title: `Deckengestaltung ${index + 1}`,
    category: 'Decken',
    text: 'Saubere Deckenarbeiten für moderne Innenräume mit präziser Ausführung und gleichmäßiger Oberfläche.',
    image,
    alt: `Professionelle Deckengestaltung ${index + 1}`,
  })),

  ...[decor1, decor2, decor3, decor4, decor5, decor6, decor7].map(
    (image, index) => ({
      title: `Dekorative Gestaltung ${index + 1}`,
      category: 'Dekor',
      text: 'Dekorative Oberflächen, Akzente und Details für ein individuelles und hochwertiges Raumgefühl.',
      image,
      alt: `Dekorative Wandgestaltung ${index + 1}`,
    }),
  ),
];

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState('Alle');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Alle') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const closeModal = () => setActiveProject(null);

  useEffect(() => {
    if (!activeProject) return;

    document.body.classList.add('lock');

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeModal();
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
            <p className={styles.eyebrow}>Projektgalerie</p>

            <h2 className={styles.title}>Arbeiten nach Bereichen entdecken</h2>

            <p className={styles.text}>
              Filtern Sie die Galerie nach Fassaden, Decken oder Dekor und sehen
              Sie passende Beispiele aus abgeschlossenen Projekten.
            </p>
          </div>

          <div className={styles.filters}>
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={`${styles.filterBtn} ${
                  activeFilter === filter.value ? styles.active : ''
                }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filteredProjects.map((project, index) => (
              <article
                key={`${project.category}-${index}`}
                className={`${styles.card} ${
                  index === 0 || index === 5 ? styles.large : ''
                }`}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className={styles.image}
                  loading="lazy"
                />

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
        <div className={styles.modal} onMouseDown={closeModal}>
          <div
            className={styles.modalBox}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.close}
              onClick={closeModal}
              aria-label="Galerie schließen"
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
