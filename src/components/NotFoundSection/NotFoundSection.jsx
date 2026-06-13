import { ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router';

import styles from './NotFoundSection.module.css';

export default function NotFoundSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bgNumber}>404</div>

      <div className="container">
        <div className={styles.content}>
          <span className={styles.badge}>Seite nicht gefunden</span>

          <h1 className={styles.title}>Diese Seite existiert leider nicht</h1>

          <p className={styles.text}>
            Die angeforderte Seite wurde möglicherweise verschoben, umbenannt
            oder ist nicht mehr verfügbar.
          </p>

          <div className={styles.actions}>
            <Link to="/" className={styles.primaryBtn}>
              <Home size={18} />
              Zur Startseite
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className={styles.secondaryBtn}
            >
              <ArrowLeft size={18} />
              Zurück
            </button>
          </div>
        </div>
      </div>

      <div className={styles.blurOne} />
      <div className={styles.blurTwo} />
    </section>
  );
}
