import {
  BadgeCheck,
  Clock,
  Handshake,
  PaintBucket,
  ShieldCheck,
  Wallet,
} from 'lucide-react';

import styles from './ServicesBenefits.module.css';

const benefits = [
  {
    icon: Handshake,
    title: 'Persönliche Betreuung',
    text: 'Sie sprechen direkt mit mir — von der ersten Anfrage bis zur fertigen Arbeit.',
  },
  {
    icon: PaintBucket,
    title: 'Saubere Arbeit',
    text: 'Ich achte auf Vorbereitung, Schutz der Räume und eine ordentliche Ausführung.',
  },
  {
    icon: Clock,
    title: 'Termintreue',
    text: 'Absprachen und Zeitpläne werden zuverlässig eingehalten.',
  },
  {
    icon: Wallet,
    title: 'Faire Preise',
    text: 'Transparente Angebote ohne versteckte Kosten oder unnötige Leistungen.',
  },
  {
    icon: ShieldCheck,
    title: 'Langlebiger Schutz',
    text: 'Besonders bei Fassaden stehen Schutz, Qualität und Beständigkeit im Fokus.',
  },
  {
    icon: BadgeCheck,
    title: 'Qualität im Detail',
    text: 'Jedes Projekt wird mit Sorgfalt, Erfahrung und Blick fürs Ergebnis umgesetzt.',
  },
];

export default function ServicesBenefits() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p className={styles.eyebrow}>Warum ich</p>

            <h2 className={styles.title}>
              Persönliche Handwerksarbeit statt anonymer Großbetrieb
            </h2>

            <p className={styles.text}>
              Bei mir haben Sie einen festen Ansprechpartner. Ich bespreche Ihr
              Projekt persönlich, arbeite sorgfältig und achte darauf, dass das
              Ergebnis zu Ihren Vorstellungen passt.
            </p>
          </div>

          <div className={styles.grid}>
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className={styles.card}>
                <span className={styles.icon}>
                  <Icon size={24} strokeWidth={2} />
                </span>

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
