import { Link } from 'react-router';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

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
                alt="Serhii Drohaltsev Renovierung"
                width="210"
                height="70"
                loading="lazy"
              />
            </Link>

            <p>
              Ihr Ansprechpartner für Spachtelarbeiten, Airless-Anstriche,
              Fassadenanstriche, Trockenbau, Bodenverlegung und
              Renovierungsarbeiten in Offenbach am Main und Umgebung.
            </p>

            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/sd_renovierung"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://wa.me/4915256507271"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
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
                <a href="tel:+4915256507271">+49 152 56507271</a>
              </li>

              <li>
                <Mail size={17} />
                <a href="mailto:remontprof3110@gmail.com">
                  remontprof3110@gmail.com
                </a>
              </li>

              <li>
                <MapPin size={17} />
                <span>
                  Lilienthalstraße 16
                  <br />
                  63073 Offenbach am Main
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3>Einsatzgebiet</h3>

            <div className={styles.hours}>
              <p>Offenbach am Main</p>
              <p>Frankfurt am Main</p>
              <p>Hanau</p>
              <p>Rhein-Main-Gebiet</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Serhii Drohaltsev Renovierung. Alle
            Rechte vorbehalten.
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
