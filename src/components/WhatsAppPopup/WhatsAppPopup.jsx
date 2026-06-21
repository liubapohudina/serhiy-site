import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import styles from './WhatsAppPopup.module.css';
import whatsapp from '../../assets/images/whatsapp.webp';

export default function WhatsAppPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className={styles.popup}>
      <button
        className={styles.close}
        onClick={() => setShow(false)}
        aria-label="Schließen"
      >
        <X size={16} />
      </button>

      <img src={whatsapp} alt="WhatsApp" className={styles.icon} />

      <div className={styles.content}>
        <strong>Fragen?</strong>

        <span>Jetzt über WhatsApp schreiben.</span>

        <a
          href="https://wa.me/4915256507271"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat starten
        </a>
      </div>
    </div>
  );
}
