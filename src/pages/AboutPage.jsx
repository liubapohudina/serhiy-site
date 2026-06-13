import AboutHero from '../components/AboutHero/AboutHero.jsx';
import AboutStory from '../components/AboutStory/AboutStory.jsx';
import AboutExperience from '../components/AboutExperience/AboutExperience.jsx';
import CtaSection from '../components/CtaSection/CtaSection.jsx';

export function meta() {
  const title = 'Über mich | Serhii Drohaltsev Gebäudeservice & Renovierung';

  const description =
    'Erfahren Sie mehr über Serhii Drohaltsev, selbstständiger Handwerker mit über 10 Jahren Erfahrung in Malerarbeiten, Fassadenarbeiten und Renovierung.';

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

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutExperience />
      <CtaSection />
    </>
  );
}
