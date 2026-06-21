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
          alt="Ausgewählte Arbeiten aus Fassaden, Decken und dekorativer Gestaltung"
          className={styles.image}
          width="1920"
          height="680"
        />
      </picture>

      <div className={styles.overlay} />

      <div className="container">
        <div className={styles.content}>
          <p className={styles.eyebrow}>Referenzen</p>

          <h1 className={styles.title}>
            Handwerkliche Qualität, die man sieht
          </h1>

          <p className={styles.text}>
            Entdecken Sie ausgewählte Arbeiten aus den Bereichen Fassaden,
            Decken und dekorative Gestaltung — sauber ausgeführt, langlebig und
            mit Blick fürs Detail.
          </p>
        </div>
      </div>
    </section>
  );
}
