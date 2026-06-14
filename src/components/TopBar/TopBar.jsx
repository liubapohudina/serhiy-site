import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import styles from './TopBar.module.css';

const topBarItems = [
  {
    icon: Clock,
    text: 'Mo–Sa: 08:00–18:00',
  },
  {
    icon: Phone,
    text: '+49 152 56507271',
    href: 'tel:+4915256507271',
  },
  {
    icon: Mail,
    text: 'remontprof3110@gmail.com',
    href: 'mailto:remontprof3110@gmail.com',
  },
  {
    icon: MapPin,
    text: 'Lilienthalstraße 16,63073 Offenbach am Main',
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
