import styles from './LegalPage.module.css';

const UPDATED_AT = '13.06.2026';

export function meta() {
  return [
    { title: 'Impressum | Serhii Drohaltsev Gebäudeservice & Renovierung' },
    {
      name: 'description',
      content: 'Impressum von Serhii Drohaltsev Gebäudeservice & Renovierung.',
    },
    { name: 'robots', content: 'noindex, follow' },
  ];
}

export default function ImprintPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>Anbieterkennzeichnung</p>
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 DDG und weitere rechtliche Informationen.</p>
          <span>Stand: {UPDATED_AT}</span>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.box}>
            <h2>Angaben zum Diensteanbieter</h2>
            <p>
              <strong>Serhii Drohaltsev Gebäudeservice & Renovierung</strong>
              <br />
              Inhaber: Serhii Drohaltsev
              <br />
              Musterstraße 12
              <br />
              12345 Musterstadt
              <br />
              Deutschland
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: +49 176 12345678
              <br />
              E-Mail: info@your-domain.de
            </p>

            <h2>Gewerbeangaben</h2>
            <p>
              Gewerbeanmeldung Nr.: 123456789012
              <br />
              Zuständige Behörde: Gewerbeamt Musterstadt
              <br />
              Finanzamt: Finanzamt Musterstadt
            </p>

            <h2>Umsatzsteuer</h2>
            <p>
              USt-IdNr.: DE123456789
              <br />
              Falls keine Umsatzsteuer-ID vorhanden ist, diesen Abschnitt vor
              Veröffentlichung entsprechend anpassen oder entfernen.
            </p>

            <h2>Verantwortlich für den Inhalt</h2>
            <p>
              Serhii Drohaltsev
              <br />
              Musterstraße 12
              <br />
              12345 Musterstadt
              <br />
              Deutschland
            </p>

            <h2>Berufs- und Tätigkeitsbereich</h2>
            <p>
              Gebäudeservice, Malerarbeiten, Innenanstriche, Fassadenanstriche,
              Fassadensanierung und Renovierungsarbeiten.
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter
              bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Diese Website kann Links zu externen Websites enthalten. Auf deren
              Inhalte habe ich keinen Einfluss. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber
              verantwortlich.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
              dieser Website unterliegen dem deutschen Urheberrecht. Beiträge
              Dritter werden als solche gekennzeichnet. Jede Vervielfältigung,
              Bearbeitung oder Verwertung außerhalb der Grenzen des
              Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.
            </p>

            <h2>Hinweis</h2>
            <p>
              Bitte ersetzen Sie vor Veröffentlichung alle Platzhalter durch die
              tatsächlichen Unternehmens-, Kontakt- und Registrierungsdaten.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
