import ContactHero from '../components/ContactHero/ContactHero.jsx';
import ContactInfo from '../components/ContactInfo/ContactInfo.jsx';
import ContactFormSection from '../components/ContactFormSection/ContactFormSection.jsx';
import ContactFaq from '../components/ContactFaq/ContactFaq.jsx';

export function meta() {
  const title = 'Kontakt | Renovierung & Innenausbau in Offenbach am Main';

  const description =
    'Jetzt unverbindlich anfragen. Über 20 Jahre Erfahrung in Spachtelarbeiten, Trockenbau, Bodenverlegung, Airless-Anstrichen und Renovierungsarbeiten in Offenbach am Main, Frankfurt und Umgebung.';

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
