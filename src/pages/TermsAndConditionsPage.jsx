import styles from './LegalPage.module.css';

const UPDATED_AT = '13.06.2026';

export function meta() {
  return [
    { title: 'AGB | Serhii Drohaltsev Gebäudeservice & Renovierung' },
    {
      name: 'description',
      content:
        'Allgemeine Geschäftsbedingungen für Leistungen von Serhii Drohaltsev Gebäudeservice & Renovierung.',
    },
    { name: 'robots', content: 'noindex, follow' },
  ];
}

export default function TermsAndConditionsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>Allgemeine Geschäftsbedingungen</p>
          <h1>AGB</h1>
          <p>
            Bedingungen für Malerarbeiten, Fassadenarbeiten und
            Renovierungsleistungen.
          </p>
          <span>Stand: {UPDATED_AT}</span>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.box}>
            <h2>1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für Leistungen von
              Serhii Drohaltsev Gebäudeservice & Renovierung im Bereich
              Malerarbeiten, Innenanstriche, Fassadenanstriche,
              Fassadensanierung und Renovierungsarbeiten, sofern nicht
              schriftlich etwas anderes vereinbart wurde.
            </p>

            <h2>2. Angebot und Vertragsschluss</h2>
            <p>
              Angebote sind, sofern nicht anders angegeben, freibleibend. Ein
              Vertrag kommt zustande, wenn ein Angebot schriftlich, per E-Mail
              oder in anderer nachvollziehbarer Form angenommen wurde.
            </p>

            <h2>3. Leistungsumfang</h2>
            <p>
              Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen
              Angebot oder der individuellen Vereinbarung. Zusätzliche Arbeiten,
              die nicht im Angebot enthalten sind, können gesondert berechnet
              werden.
            </p>

            <h2>4. Mitwirkung des Kunden</h2>
            <p>
              Der Kunde stellt sicher, dass die zu bearbeitenden Bereiche zum
              vereinbarten Termin zugänglich sind. Möbel, Wertgegenstände und
              empfindliche Gegenstände sind nach Möglichkeit vor Beginn der
              Arbeiten zu entfernen oder entsprechend zu schützen.
            </p>

            <h2>5. Termine und Ausführung</h2>
            <p>
              Vereinbarte Termine werden mit größtmöglicher Sorgfalt
              eingehalten. Verzögerungen durch Witterung, Materialverfügbarkeit,
              höhere Gewalt oder nicht vorhersehbare Umstände können zu
              Terminverschiebungen führen.
            </p>

            <h2>6. Fassadenarbeiten und Witterung</h2>
            <p>
              Fassadenanstriche und Fassadensanierungen sind witterungsabhängig.
              Bei Regen, Frost, starker Hitze oder ungeeigneten
              Untergrundbedingungen kann eine Ausführung verschoben werden, um
              die Qualität der Arbeit sicherzustellen.
            </p>

            <h2>7. Preise und Zahlung</h2>
            <p>
              Die Preise ergeben sich aus dem jeweiligen Angebot. Sofern nicht
              anders vereinbart, ist die Zahlung nach Fertigstellung und
              Rechnungsstellung fällig. Bei größeren Projekten können
              Abschlagszahlungen vereinbart werden.
            </p>

            <h2>8. Abnahme</h2>
            <p>
              Nach Fertigstellung der Arbeiten erfolgt eine gemeinsame
              Besichtigung, soweit dies vereinbart oder erforderlich ist.
              Offensichtliche Mängel sollten zeitnah mitgeteilt werden, damit
              eine Prüfung und gegebenenfalls Nachbesserung erfolgen kann.
            </p>

            <h2>9. Gewährleistung</h2>
            <p>
              Es gelten die gesetzlichen Gewährleistungsrechte. Keine
              Gewährleistung besteht für Schäden, die durch unsachgemäße
              Nutzung, fehlende Pflege, nachträgliche Eingriffe Dritter oder
              ungeeignete Untergründe entstehen, sofern diese Umstände nicht zu
              vertreten sind.
            </p>

            <h2>10. Haftung</h2>
            <p>
              Für Schäden hafte ich nach den gesetzlichen Vorschriften. Bei
              einfacher Fahrlässigkeit ist die Haftung, soweit gesetzlich
              zulässig, auf vorhersehbare und vertragstypische Schäden begrenzt.
            </p>

            <h2>11. Eigentumsvorbehalt</h2>
            <p>
              Gelieferte Materialien bleiben bis zur vollständigen Bezahlung der
              jeweiligen Rechnung Eigentum von Serhii Drohaltsev Gebäudeservice
              & Renovierung, soweit dies rechtlich zulässig ist.
            </p>

            <h2>12. Datenschutz</h2>
            <p>
              Personenbezogene Daten werden ausschließlich im Rahmen der
              gesetzlichen Vorschriften und zur Durchführung der vereinbarten
              Leistungen verarbeitet. Weitere Informationen finden Sie in der
              Datenschutzerklärung.
            </p>

            <h2>13. Schlussbestimmungen</h2>
            <p>
              Es gilt deutsches Recht. Sollten einzelne Bestimmungen dieser AGB
              unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen
              unberührt.
            </p>

            <h2>14. Hinweis</h2>
            <p>
              Diese AGB sind auf ein kleines handwerkliches
              Dienstleistungsangebot zugeschnitten. Vor endgültiger
              Veröffentlichung empfiehlt sich eine Prüfung durch eine
              fachkundige Stelle, insbesondere wenn feste Werkverträge,
              Subunternehmer oder größere Bauprojekte geplant sind.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
