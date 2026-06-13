import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div
      className={styles.loader}
      role="status"
      aria-label="Seite wird geladen"
    >
      <div className={styles.mark}>
        <span className={styles.line} />
        <span className={styles.dot} />
      </div>

      <p className={styles.text}>Laden</p>
    </div>
  );
}
