import {
  BadgeCheck,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';

import styles from './ContactInfo.module.css';

const contactItems = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+49 176 12345678',
    href: 'tel:+4917612345678',
  },
  {
    icon: Mail,
    label: 'E-Mail',
    value: 'info@your-domain.de',
    href: 'mailto:info@your-domain.de',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Musterstraße 12, 12345 Musterstadt',
  },
  {
    icon: Clock3,
    label: 'Öffnungszeiten',
    value: 'Mo–Fr: 08:00–18:00, Sa: 09:00–14:00',
  },
];

const highlights = [
  '10+ Jahre Erfahrung',
  'Direkter Ansprechpartner',
  'Saubere Ausführung',
  'Termintreue Arbeit',
];

export default function ContactInfo() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className={styles.eyebrow}>Kontaktmöglichkeiten</p>

            <h2 className={styles.title}>
              Schnell erreichbar und persönlich für Sie da
            </h2>

            <p className={styles.text}>
              Ob kurzer Anruf, E-Mail oder Anfrage über das Formular — ich melde
              mich zeitnah zurück und bespreche Ihr Projekt persönlich.
            </p>

            <div className={styles.contacts}>
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className={styles.icon}>
                      <Icon size={22} strokeWidth={2} />
                    </span>

                    <span>
                      <strong>{label}</strong>
                      <em>{value}</em>
                    </span>
                  </>
                );

                return href ? (
                  <a key={label} href={href} className={styles.item}>
                    {content}
                  </a>
                ) : (
                  <div key={label} className={styles.item}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <aside className={styles.card}>
            <div className={styles.cardIcon}>
              <ShieldCheck size={34} strokeWidth={1.9} />
            </div>

            <p className={styles.cardLabel}>Persönlicher Ansprechpartner</p>

            <h3>Serhii Drohaltsev</h3>

            <p className={styles.cardText}>
              Ich begleite Ihr Projekt direkt — von der ersten Anfrage bis zur
              fertigen Ausführung.
            </p>

            <ul>
              {highlights.map((item) => (
                <li key={item}>
                  <BadgeCheck size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
