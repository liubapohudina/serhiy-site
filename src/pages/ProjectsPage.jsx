import ProjectsHero from '../components/ProjectsHero/ProjectsHero.jsx';
import ProjectsGallery from '../components/ProjectsGallery/ProjectsGallery.jsx';
import CtaSection from '../components/CtaSection/CtaSection.jsx';

export function meta() {
  const title =
    'Projekte | Malerarbeiten & Fassadenarbeiten | Serhii Drohaltsev';

  const description =
    'Einblicke in abgeschlossene Malerarbeiten, Fassadenanstriche, Fassadensanierungen und Renovierungsarbeiten von Serhii Drohaltsev.';

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
