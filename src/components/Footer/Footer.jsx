import { Link } from 'react-router';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/images/logo-white.webp';

import styles from './Footer.module.css';

const navLinks = [
  { label: 'Startseite', to: '/' },
  { label: 'Leistungen', to: '/leistungen' },
  { label: 'Projekte', to: '/projekte' },
  { label: 'Über mich', to: '/ueber-mich' },
  { label: 'Kontakt', to: '/kontakt' },
];

const legalLinks = [
  { label: 'Datenschutz', to: '/datenschutz' },
  { label: 'Cookie-Richtlinie', to: '/cookie-richtlinie' },
  { label: 'Impressum', to: '/impressum' },
  { label: 'AGB', to: '/agb' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <img
                src={logo}
                alt="Serhii Drohaltsev Gebäudeservice & Renovierung"
                width="210"
                height="70"
                loading="lazy"
              />
            </Link>

            <p>
              Ihr Ansprechpartner für Malerarbeiten, Fassadenanstriche und
              Renovierungsarbeiten — persönlich, sauber und zuverlässig.
            </p>

            <div className={styles.socials}>
              <a href="#" aria-label="Facebook">
                <FaFacebook size={18} />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3>Navigation</h3>
            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Kontakt</h3>
            <ul className={styles.contact}>
              <li>
                <Phone size={17} />
                <a href="tel:+4917612345678">+49 176 12345678</a>
              </li>
              <li>
                <Mail size={17} />
                <a href="mailto:info@your-domain.de">info@your-domain.de</a>
              </li>
              <li>
                <MapPin size={17} />
                <span>
                  Musterstraße 12
                  <br />
                  12345 Musterstadt
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3>Öffnungszeiten</h3>
            <div className={styles.hours}>
              <p>Mo–Fr: 08:00–18:00 Uhr</p>
              <p>Sa: 09:00–14:00 Uhr</p>
              <p>So: Geschlossen</p>
            </div>

            <h3 className={styles.legalTitle}>Rechtliches</h3>
            <div className={styles.legalInfo}>
              <p>Gewerbeanmeldung Nr.: 123456789012</p>
              <p>Finanzamt Musterstadt</p>
              <p>USt-IdNr.: DE123456789</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Serhii Drohaltsev Gebäudeservice &
            Renovierung. Alle Rechte vorbehalten.
          </p>

          <nav aria-label="Rechtliche Links">
            {legalLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
