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
    value: '+49 152 56507271',
    href: 'tel:+4915256507271',
  },
  {
    icon: Mail,
    label: 'E-Mail',
    value: 'remontprof3110@gmail.com',
    href: 'mailto:remontprof3110@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Lilienthalstraße 16, 63073 Offenbach am Main',
  },
  {
    icon: Clock3,
    label: 'Öffnungszeiten',
    value: 'Mo–Sa: 08:00–18:00',
  },
];

const highlights = [
  '20+ Jahre Erfahrung',
  'Persönliche Betreuung',
  'Saubere Ausführung',
  'Termingerechte Umsetzung',
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
              Ob Telefon, E-Mail oder Kontaktformular – ich melde mich zeitnah
              zurück und berate Sie persönlich zu Ihrem Renovierungs- oder
              Ausbauprojekt.
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
              Über 20 Jahre Erfahrung im Bereich Renovierung, Innenausbau und
              Modernisierung. Ich begleite Ihr Projekt persönlich – von der
              ersten Anfrage bis zur fertigen Ausführung.
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
