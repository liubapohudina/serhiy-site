import { ClipboardList, Eye, FileText, Paintbrush } from 'lucide-react';

import styles from './ProcessPreview.module.css';

const steps = [
  {
    icon: ClipboardList,
    title: 'Anfrage senden',
    text: 'Sie kontaktieren mich telefonisch oder über das Formular.',
  },
  {
    icon: Eye,
    title: 'Besichtigung & Beratung',
    text: 'Ich schaue mir die Flächen an und bespreche Ihre Wünsche.',
  },
  {
    icon: FileText,
    title: 'Angebot erhalten',
    text: 'Sie erhalten ein klares Angebot ohne versteckte Kosten.',
  },
  {
    icon: Paintbrush,
    title: 'Saubere Umsetzung',
    text: 'Ich führe die Arbeiten sorgfältig, zuverlässig und termingerecht aus.',
  },
];

export default function ProcessPreview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.head}>
            <p className={styles.eyebrow}>Ablauf</p>
            <h2 className={styles.title}>So läuft die Zusammenarbeit ab</h2>
            <p className={styles.text}>
              Persönlich, transparent und ohne unnötige Umwege — vom ersten
              Kontakt bis zur fertigen Arbeit.
            </p>
          </div>

          <div className={styles.steps}>
            {steps.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className={styles.step}>
                <div className={styles.top}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.icon}>
                    <Icon size={24} strokeWidth={2} />
                  </span>
                </div>

                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
