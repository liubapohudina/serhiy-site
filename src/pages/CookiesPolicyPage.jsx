import styles from './LegalPage.module.css';

const UPDATED_AT = '13.06.2026';

export function meta() {
  return [
    {
      title:
        'Cookie-Richtlinie | Serhii Drohaltsev Gebäudeservice & Renovierung',
    },
    {
      name: 'description',
      content:
        'Cookie-Richtlinie der Website von Serhii Drohaltsev Gebäudeservice & Renovierung.',
    },
    { name: 'robots', content: 'noindex, follow' },
  ];
}

export default function CookiesPolicyPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>Cookie-Hinweise</p>
          <h1>Cookie-Richtlinie</h1>
          <p>
            Informationen darüber, welche Cookies und ähnliche Technologien auf
            dieser Website verwendet werden.
          </p>
          <span>Stand: {UPDATED_AT}</span>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.box}>
            <h2>1. Was sind Cookies?</h2>
            <p>
              Cookies sind kleine Textinformationen, die im Browser gespeichert
              werden können. Sie können erforderlich sein, damit eine Website
              technisch funktioniert, oder optional für Analyse- und
              Marketingzwecke eingesetzt werden.
            </p>

            <h2>2. Aktueller Einsatz auf dieser Website</h2>
            <p>
              Diese Website verwendet derzeit keine Analyse- oder
              Marketing-Cookies. Es wird lediglich Ihre Cookie-Auswahl lokal in
              Ihrem Browser gespeichert, damit der Hinweis nicht bei jedem
              Besuch erneut angezeigt wird.
            </p>

            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Zweck</th>
                    <th>Typ</th>
                    <th>Speicherdauer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>cookie-consent</td>
                    <td>Speichert Ihre Auswahl im Cookie-Banner</td>
                    <td>Technisch notwendig</td>
                    <td>Bis zur Löschung im Browser</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>3. Technisch notwendige Cookies</h2>
            <p>
              Technisch notwendige Speicherungen sind erforderlich, um
              grundlegende Funktionen der Website bereitzustellen. Dazu gehört
              insbesondere die Speicherung Ihrer Entscheidung im Cookie-Banner.
            </p>

            <h2>4. Analyse-Cookies</h2>
            <p>
              Analyse-Cookies werden aktuell nicht eingesetzt. Sollte zukünftig
              Google Analytics oder ein vergleichbarer Dienst verwendet werden,
              wird dieser erst nach Ihrer ausdrücklichen Einwilligung aktiviert.
            </p>

            <h2>5. Google Analytics in Zukunft</h2>
            <p>
              Für die geplante Einbindung von Google Analytics gilt: Die
              Verarbeitung startet erst, wenn Sie im Cookie-Banner „Alle
              akzeptieren“ oder eine entsprechende Analyse-Einwilligung
              erteilen. Ohne Einwilligung werden keine Analyse-Skripte geladen.
            </p>

            <h2>6. Einwilligung ändern oder widerrufen</h2>
            <p>
              Sie können Ihre gespeicherte Auswahl jederzeit löschen, indem Sie
              die Website-Daten in Ihrem Browser entfernen. Nach dem Löschen
              wird der Cookie-Hinweis erneut angezeigt.
            </p>

            <h2>7. Browser-Einstellungen</h2>
            <p>
              Sie können Cookies zusätzlich über die Einstellungen Ihres
              Browsers blockieren oder löschen. Bitte beachten Sie, dass dadurch
              einzelne Funktionen der Website eingeschränkt sein können.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
