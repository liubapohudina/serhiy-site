import styles from './LegalPage.module.css';

const UPDATED_AT = '13.06.2026';

export function meta() {
  return [
    { title: 'Datenschutz | Serhii Drohaltsev Renovierung' },
    {
      name: 'description',
      content:
        'Datenschutzerklärung für die Website von Serhii Drohaltsev Renovierung in Offenbach am Main.',
    },
    { name: 'robots', content: 'noindex, follow' },
  ];
}

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>Rechtliche Informationen</p>
          <h1>Datenschutzerklärung</h1>
          <p>
            Informationen zur Verarbeitung personenbezogener Daten auf dieser
            Website.
          </p>
          <span>Stand: {UPDATED_AT}</span>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.box}>
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              <strong>Serhii Drohaltsev Renovierung</strong>
              <br />
              Lilienthalstraße 16
              <br />
              63073 Offenbach am Main
              <br />
              Deutschland
              <br />
              Telefon: +49 152 56507271
              <br />
              E-Mail: remontprof3110@gmail.com
            </p>

            <h2>2. Allgemeine Hinweise</h2>
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist mir wichtig. Diese
              Website informiert über meine Leistungen im Bereich
              Spachtelarbeiten, Airless-Anstriche, Fassadenanstriche,
              Trockenbau, Bodenverlegung und Renovierungsarbeiten.
              Personenbezogene Daten werden nur verarbeitet, soweit dies für den
              Betrieb der Website, die Bearbeitung von Anfragen oder zur
              Erfüllung gesetzlicher Pflichten erforderlich ist.
            </p>

            <h2>3. Zugriffsdaten und Server-Logfiles</h2>
            <p>
              Beim Besuch dieser Website können technische Daten automatisch
              verarbeitet werden. Dazu gehören insbesondere IP-Adresse, Datum
              und Uhrzeit des Zugriffs, aufgerufene Seite, Browsertyp,
              Betriebssystem und Referrer-URL. Diese Daten dienen der sicheren
              Bereitstellung der Website, der Fehleranalyse und dem Schutz vor
              Missbrauch.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes
              Interesse liegt im sicheren und stabilen Betrieb dieser Website.
            </p>

            <h2>4. Kontaktaufnahme</h2>
            <p>
              Wenn Sie mich per Telefon, E-Mail oder Kontaktformular
              kontaktieren, werden die von Ihnen übermittelten Angaben
              verarbeitet, um Ihre Anfrage zu beantworten und mögliche
              vorvertragliche Maßnahmen durchzuführen.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
              Anfrage auf eine Beauftragung gerichtet ist. In anderen Fällen
              erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO.
            </p>

            <h2>5. Kontaktformular</h2>
            <p>
              Im Kontaktformular können Name, Telefonnummer, E-Mail-Adresse,
              gewünschte Leistung und Ihre Nachricht verarbeitet werden. Die
              Angabe dieser Daten ist erforderlich, damit ich Ihr Anliegen
              sinnvoll bearbeiten und Sie kontaktieren kann.
            </p>
            <p>
              Die Daten werden nicht ohne Ihre Einwilligung an Dritte
              weitergegeben, es sei denn, dies ist zur Bearbeitung Ihrer
              Anfrage, zur Vertragserfüllung oder aufgrund gesetzlicher
              Pflichten erforderlich.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Diese Website verwendet derzeit nur technisch notwendige
              Speicherungen, etwa zur Speicherung Ihrer Cookie-Auswahl im
              Browser. Diese sind erforderlich, um grundlegende Funktionen
              bereitzustellen.
            </p>
            <p>
              Analyse- oder Marketing-Cookies werden aktuell nicht aktiv
              eingesetzt. Sollte in Zukunft Google Analytics oder ein ähnlicher
              Dienst verwendet werden, erfolgt dies nur nach Ihrer
              ausdrücklichen Einwilligung.
            </p>

            <h2>7. Google Analytics / Analyse-Dienste</h2>
            <p>
              Google Analytics ist derzeit nicht aktiv eingebunden. Falls dieser
              Dienst zukünftig eingesetzt wird, wird die Verarbeitung erst nach
              vorheriger Einwilligung über ein Cookie- bzw. Consent-Banner
              erfolgen. Ohne Einwilligung werden keine Analyse-Skripte geladen.
            </p>

            <h2>8. Instagram</h2>
            <p>
              Auf dieser Website kann ein Link zu meinem Instagram-Profil
              eingebunden sein. Beim Anklicken des Links verlassen Sie diese
              Website und werden zu Instagram weitergeleitet. Für die
              Verarbeitung personenbezogener Daten auf Instagram ist der
              jeweilige Anbieter verantwortlich.
            </p>

            <h2>9. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie es für
              den jeweiligen Zweck erforderlich ist. Anfragen werden gelöscht,
              sobald sie nicht mehr benötigt werden, sofern keine gesetzlichen
              Aufbewahrungspflichten bestehen.
            </p>

            <h2>10. Ihre Rechte</h2>
            <p>
              Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf
              Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit sowie Widerspruch gegen bestimmte
              Verarbeitungen.
            </p>
            <p>
              Zudem haben Sie das Recht, eine erteilte Einwilligung jederzeit
              mit Wirkung für die Zukunft zu widerrufen.
            </p>

            <h2>11. Beschwerderecht</h2>
            <p>
              Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen
              Datenschutzrecht verstößt, haben Sie das Recht, sich bei einer
              Datenschutzaufsichtsbehörde zu beschweren.
            </p>

            <h2>12. Aktualisierung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung kann angepasst werden, wenn sich
              technische, rechtliche oder organisatorische Änderungen ergeben.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
