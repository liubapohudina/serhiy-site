import ProjectsHero from '../components/ProjectsHero/ProjectsHero.jsx';
import ProjectsGallery from '../components/ProjectsGallery/ProjectsGallery.jsx';
import CtaSection from '../components/CtaSection/CtaSection.jsx';

export function meta() {
  const title =
    'Referenzen & Projekte | Renovierung, Trockenbau & Bodenverlegung';

  const description =
    'Einblicke in abgeschlossene Projekte aus den Bereichen Spachtelarbeiten, Airless-Anstriche, Fassadenanstriche, Trockenbau, Bodenverlegung und Renovierungsarbeiten. Über 20 Jahre Erfahrung und professionelle Ausführung.';

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

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGallery />
      <CtaSection />
    </>
  );
}
