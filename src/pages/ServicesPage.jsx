import ServicesHero from '../components/ServicesHero/ServicesHero.jsx';
import ServicesDetails from '../components/ServicesDetails/ServicesDetails.jsx';
import ServicesBenefits from '../components/ServicesBenefits/ServicesBenefits.jsx';
import CtaSection from '../components/CtaSection/CtaSection.jsx';

export function meta() {
  const title =
    'Leistungen | Malerarbeiten & Fassadenarbeiten | Serhii Drohaltsev';

  const description =
    'Professionelle Malerarbeiten, Innenanstriche, Fassadenanstriche, Fassadensanierung und Renovierungsarbeiten. Persönlich, sauber und zuverlässig.';

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
