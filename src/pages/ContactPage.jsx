import ContactHero from '../components/ContactHero/ContactHero.jsx';
import ContactInfo from '../components/ContactInfo/ContactInfo.jsx';
import ContactFormSection from '../components/ContactFormSection/ContactFormSection.jsx';
import ContactFaq from '../components/ContactFaq/ContactFaq.jsx';

export function meta() {
  const title = 'Kontakt | Serhii Drohaltsev Gebäudeservice & Renovierung';

  const description =
    'Kontaktieren Sie Serhii Drohaltsev für Malerarbeiten, Fassadenanstriche, Fassadensanierung und Renovierungsarbeiten. Persönliche Beratung und unverbindliche Anfrage.';

  return [
    { title },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
  ];
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <ContactFaq />
    </>
  );
}
