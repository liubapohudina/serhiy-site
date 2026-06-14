import styles from './ProjectsHero.module.css';
import img from '../../assets/images/hero-master.webp';
import imgM from '../../assets/images/hero-master-mobile.webp';

export default function ProjectsHero() {
  return (
    <section className={styles.hero}>
      <picture>
        <source srcSet={imgM} media="(max-width: 620px)" type="image/webp" />

        <img
          src={img}
          alt="Galerie abgeschlossener Malerarbeiten und Fassadenarbeiten"
          className={styles.image}
          width="1920"
          height="680"
        />
      </picture>

      <div className={styles.overlay} />

      <div className="container">
        <div className={styles.content}>
          <p className={styles.eyebrow}>Projekte</p>

          <h1 className={styles.title}>Einblicke in abgeschlossene Arbeiten</h1>

          <p className={styles.text}>
            Eine Auswahl meiner Arbeiten aus den Bereichen Malerarbeiten,
            Fassadenanstriche, Fassadensanierung und Renovierung.
          </p>
        </div>
      </div>
    </section>
  );
}
