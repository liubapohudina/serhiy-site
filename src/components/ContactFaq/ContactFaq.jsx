import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import styles from './ContactFaq.module.css';

const faqs = [
  {
    question: 'Wie schnell erhalte ich eine Rückmeldung?',
    answer:
      'In der Regel melde ich mich innerhalb von 24 Stunden zurück, um Ihr Projekt kurz zu besprechen.',
  },
  {
    question: 'Erstellen Sie ein unverbindliches Angebot?',
    answer:
      'Ja. Nach einer kurzen Projektbeschreibung oder einer Besichtigung vor Ort erhalten Sie ein transparentes und unverbindliches Angebot.',
  },
  {
    question: 'Welche Arbeiten bieten Sie an?',
    answer:
      'Ich biete Spachtelarbeiten, Airless-Anstriche, Fassadenanstriche, Trockenbau, Bodenverlegung sowie Renovierungsarbeiten für Wohnungen, Häuser und Gewerbeobjekte an.',
  },
  {
    question: 'Verlegen Sie auch Laminat oder Vinyl?',
    answer:
      'Ja. Ich übernehme die Verlegung von Laminat, Vinyl und Parkett. Fliesenarbeiten gehören jedoch nicht zu meinem Leistungsumfang.',
  },
  {
    question: 'Übernehmen Sie auch kleinere Renovierungsarbeiten?',
    answer:
      'Ja, auch kleinere Renovierungs- und Modernisierungsarbeiten sind je nach Umfang und Verfügbarkeit möglich.',
  },
  {
    question: 'In welchem Gebiet sind Sie tätig?',
    answer:
      'Ich arbeite hauptsächlich in Offenbach am Main, Frankfurt am Main, Hanau und im gesamten Rhein-Main-Gebiet.',
  },
];

export default function ContactFaq() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.head}>
            <p className={styles.eyebrow}>FAQ</p>

            <h2 className={styles.title}>Häufige Fragen vor der Anfrage</h2>

            <p className={styles.text}>
              Hier finden Sie kurze Antworten auf typische Fragen zu Anfrage,
              Angebot und Zusammenarbeit.
            </p>
          </div>

          <div className={styles.faqs}>
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div key={faq.question} className={styles.item}>
                  <button
                    type="button"
                    className={styles.question}
                    aria-expanded={isActive}
                    onClick={() => setActiveIndex(isActive ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={22}
                      className={isActive ? styles.rotate : ''}
                    />
                  </button>

                  <div
                    className={`${styles.answer} ${
                      isActive ? styles.open : ''
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
