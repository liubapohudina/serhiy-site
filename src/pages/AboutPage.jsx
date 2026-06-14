import AboutHero from '../components/AboutHero/AboutHero.jsx';
import AboutStory from '../components/AboutStory/AboutStory.jsx';
import AboutExperience from '../components/AboutExperience/AboutExperience.jsx';
import CtaSection from '../components/CtaSection/CtaSection.jsx';

export function meta() {
  const title = 'Über mich | 20+ Jahre Erfahrung in Renovierung & Innenausbau';

  const description =
    'Lernen Sie Serhii Drohaltsev kennen. Selbstständiger Handwerker mit über 20 Jahren Erfahrung in Spachtelarbeiten, Airless-Anstrichen, Fassadenanstrichen, Trockenbau, Bodenverlegung und Renovierungsarbeiten in Offenbach am Main und Umgebung.';

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
