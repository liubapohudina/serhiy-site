import { NavLink } from 'react-router';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo-dark.webp';

import styles from './Header.module.css';

const navLinks = [
  {
    label: 'Startseite',
    to: '/',
  },
  {
    label: 'Leistungen',
    to: '/leistungen',
  },
  {
    label: 'Über mich',
    to: '/ueber-mich',
  },
  {
    label: 'Projekte',
    to: '/projekte',
  },
  {
    label: 'Kontakt',
    to: '/kontakt',
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.classList.toggle('lock', isOpen);

    return () => {
      document.body.classList.remove('lock');
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <NavLink to="/" className={styles.logo} onClick={closeMenu}>
            <img
              src={logo}
              alt="Serhii Drohaltsev Renovierung"
              width="260"
              height="74"
            />
          </NavLink>

          <nav className={styles.nav} aria-label="Hauptnavigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <NavLink to="/kontakt" className={styles.cta}>
            Kostenlose Anfrage
          </NavLink>

          <button
            className={styles.burger}
            type="button"
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`${styles.mobilePanel} ${isOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav} aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? `${styles.mobileLink} ${styles.mobileActive}`
                  : styles.mobileLink
              }
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/kontakt"
            className={styles.mobileCta}
            onClick={closeMenu}
          >
            Kostenlose Anfrage
            <ArrowRight size={18} />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
