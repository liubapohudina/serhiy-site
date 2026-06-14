import { ArrowRight, ClipboardCheck } from 'lucide-react';

import styles from './ContactFormSection.module.css';

export default function ContactFormSection() {
  return (
    <section className={styles.section} id="contact-form">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Kostenlose Anfrage</p>

            <h2 className={styles.title}>Beschreiben Sie Ihr Projekt</h2>

            <p className={styles.text}>
              Teilen Sie mir mit, welche Arbeiten geplant sind. Ich melde mich
              zeitnah zurück und erstelle Ihnen gerne ein unverbindliches
              Angebot.
            </p>

            <div className={styles.notice}>
              <ClipboardCheck size={24} />
              <p>
                Die Anfrage ist unverbindlich. Ihre Daten werden ausschließlich
                zur Bearbeitung Ihrer Anfrage verwendet.
              </p>
            </div>
          </div>

          <form
            className={styles.form}
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="74678b79-f9c8-4f78-83d8-37292f7ea15f"
            />

            <input
              type="hidden"
              name="subject"
              value="Neue Anfrage von der Website"
            />

            <input
              type="hidden"
              name="from_name"
              value="Serhii Drohaltsev Renovierung"
            />

            <input
              type="hidden"
              name="redirect"
              value="/kontakt?success=true"
            />

            <div className={styles.row}>
              <label>
                <span>Vorname *</span>
                <input type="text" name="Vorname" required />
              </label>

              <label>
                <span>Nachname *</span>
                <input type="text" name="Nachname" required />
              </label>
            </div>

            <div className={styles.row}>
              <label>
                <span>Telefon *</span>
                <input type="tel" name="Telefon" required />
              </label>

              <label>
                <span>E-Mail *</span>
                <input type="email" name="E-Mail" required />
              </label>
            </div>

            <label>
              <span>Leistung auswählen</span>
              <select name="Leistung" defaultValue="">
                <option value="" disabled>
                  Bitte auswählen
                </option>
                <option value="Spachtelarbeiten">Spachtelarbeiten</option>
                <option value="Airless-Anstriche">Airless-Anstriche</option>
                <option value="Fassadenanstriche">Fassadenanstriche</option>
                <option value="Trockenbau">Trockenbau</option>
                <option value="Bodenverlegung">Bodenverlegung</option>
                <option value="Renovierungsarbeiten">
                  Renovierungsarbeiten
                </option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
            </label>

            <label>
              <span>Nachricht</span>
              <textarea
                name="Nachricht"
                rows="6"
                placeholder="Beschreiben Sie Ihr Projekt..."
              />
            </label>

            <label className={styles.checkbox}>
              <input type="checkbox" name="Datenschutz akzeptiert" required />
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
