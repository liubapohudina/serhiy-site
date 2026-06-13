import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import styles from './TopBar.module.css';

const topBarItems = [
  {
    icon: Clock,
    text: 'Mo–Sa: 08:00–18:00',
  },
  {
    icon: Phone,
    text: '+49 176 12345678',
    href: 'tel:+4917612345678',
  },
  {
    icon: Mail,
    text: 'info@meisterarbeiten.de',
    href: 'mailto:info@meisterarbeiten.de',
  },
  {
    icon: MapPin,
    text: 'Musterstraße 12, 12345 Musterstadt',
  },
];

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className="container">
        <div className={styles.inner}>
          {topBarItems.map(({ icon: Icon, text, href }) => {
            const content = (
              <>
                <Icon className={styles.icon} size={17} strokeWidth={2} />
                <span>{text}</span>
              </>
            );

            return href ? (
              <a key={text} href={href} className={styles.item}>
                {content}
              </a>
            ) : (
              <div key={text} className={styles.item}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
