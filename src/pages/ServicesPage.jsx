import ServicesHero from '../components/ServicesHero/ServicesHero.jsx';
import ServicesDetails from '../components/ServicesDetails/ServicesDetails.jsx';
import ServicesBenefits from '../components/ServicesBenefits/ServicesBenefits.jsx';
import CtaSection from '../components/CtaSection/CtaSection.jsx';

export function meta() {
  const title = 'Leistungen | Spachtelarbeiten, Trockenbau & Bodenverlegung';

  const description =
    'Professionelle Spachtelarbeiten, Airless-Anstriche, Fassadenanstriche, Trockenbau, Bodenverlegung und Renovierungsarbeiten. Über 20 Jahre Erfahrung, saubere Ausführung und persönliche Betreuung in Offenbach am Main und Umgebung.';

  return [
    { title },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    },
  ];
}
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDetails />
      <ServicesBenefits />
      <CtaSection />
    </>
  );
}
