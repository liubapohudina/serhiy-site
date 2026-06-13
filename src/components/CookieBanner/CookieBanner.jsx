import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import styles from './CookieBanner.module.css';

const STORAGE_KEY = 'cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const saveConsent = (type) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        type,
        timestamp: Date.now(),
      }),
    );

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h3>Cookie-Einstellungen</h3>

          <p>
            Diese Website verwendet derzeit nur technisch notwendige Cookies, um
            grundlegende Funktionen bereitzustellen. Zukünftig können
            Analyse-Cookies eingesetzt werden, um die Website zu verbessern.
          </p>

          <div className={styles.links}>
            <Link to="/datenschutz">Datenschutz</Link>
            <Link to="/cookie-richtlinie">Cookie-Richtlinie</Link>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.secondaryBtn}
            onClick={() => saveConsent('necessary')}
          >
            Nur notwendige
          </button>

          <button
            type="button"
            className={styles.primaryBtn}
            onClick={() => saveConsent('all')}
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
