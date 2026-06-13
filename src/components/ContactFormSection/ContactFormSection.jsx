import { ArrowRight, ClipboardCheck } from 'lucide-react';

import styles from './ContactFormSection.module.css';

export default function ContactFormSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className={styles.section} id="contact-form">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Kostenlose Anfrage</p>

            <h2 className={styles.title}>Beschreiben Sie kurz Ihr Projekt</h2>

            <p className={styles.text}>
              Teilen Sie mir mit, welche Arbeiten geplant sind. Ich melde mich
              schnellstmöglich zurück, um Details, Umfang und nächsten Schritt
              persönlich zu besprechen.
            </p>

            <div className={styles.notice}>
              <ClipboardCheck size={24} />
              <p>
                Die Anfrage ist unverbindlich. Ihre Daten werden ausschließlich
                zur Bearbeitung Ihrer Anfrage verwendet.
              </p>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label>
                <span>Vorname *</span>
                <input type="text" name="firstName" required />
              </label>

              <label>
                <span>Nachname *</span>
                <input type="text" name="lastName" required />
              </label>
            </div>

            <div className={styles.row}>
              <label>
                <span>Telefon *</span>
                <input type="tel" name="phone" required />
              </label>

              <label>
                <span>E-Mail *</span>
                <input type="email" name="email" required />
              </label>
            </div>

            <label>
              <span>Leistung auswählen</span>
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Bitte auswählen
                </option>
                <option value="malerarbeiten">Malerarbeiten</option>
                <option value="fassadenarbeiten">Fassadenarbeiten</option>
                <option value="fassadensanierung">Fassadensanierung</option>
                <option value="renovierung">Renovierung</option>
                <option value="sonstiges">Sonstiges</option>
              </select>
            </label>

            <label>
              <span>Nachricht</span>
              <textarea
                name="message"
                rows="6"
                placeholder="Beschreiben Sie Ihr Projekt..."
              />
            </label>

            <label className={styles.checkbox}>
              <input type="checkbox" name="privacy" required />
              <span>
                Ich habe die Datenschutzerklärung gelesen und akzeptiere diese.
              </span>
            </label>

            <button type="submit" className={styles.submit}>
              Anfrage senden
              <ArrowRight size={19} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
