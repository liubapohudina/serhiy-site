import Hero from '../components/Hero/Hero';
import ServicesPreview from '../components/ServicesPreview/ServicesPreview';
import AboutPreview from '../components/AboutPreview/AboutPreview';
import ProjectsPreview from '../components/ProjectsPreview/ProjectsPreview';
import ProcessPreview from '../components/ProcessPreview/ProcessPreview';
import CtaSection from '../components/CtaSection/CtaSection';

export function meta() {
  const title =
    'Serhii Drohaltsev Gebäudeservice & Renovierung | Maler- und Fassadenarbeiten';

  const description =
    'Professionelle Malerarbeiten, Fassadenanstriche, Fassadensanierung und Renovierungsarbeiten. Zuverlässige Handwerksleistungen, saubere Ausführung und individuelle Beratung für Wohnungen und Häuser in Deutschland.';

  const url = 'https://your-domain.de';

  const image = 'https://your-domain.de/og-image.jpg';

  return [
    {
      title,
    },

    {
      name: 'description',
      content: description,
    },

    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    },

    {
      name: 'keywords',
      content:
        'Malerarbeiten, Fassadenarbeiten, Fassadenanstrich, Fassadensanierung, Innenanstrich, Renovierungsarbeiten, Gebäudeservice, Malerbetrieb Deutschland, Hausrenovierung, Wandgestaltung, Fassadenrenovierung, Tapezierarbeiten, Spachtelarbeiten, Serhii Drohaltsev',
    },

    {
      name: 'author',
      content: 'Serhii Drohaltsev Gebäudeservice & Renovierung',
    },

    {
      name: 'publisher',
      content: 'Serhii Drohaltsev Gebäudeservice & Renovierung',
    },

    {
      name: 'theme-color',
      content: '#1f2933',
    },

    {
      name: 'format-detection',
      content: 'telephone=no',
    },

    {
      tagName: 'link',
      rel: 'canonical',
      href: url,
    },

    {
      tagName: 'link',
      rel: 'alternate',
      hrefLang: 'de',
      href: url,
    },

    {
      property: 'og:type',
      content: 'website',
    },

    {
      property: 'og:site_name',
      content: 'Serhii Drohaltsev Gebäudeservice & Renovierung',
    },

    {
      property: 'og:title',
      content: title,
    },

    {
      property: 'og:description',
      content: description,
    },

    {
      property: 'og:url',
      content: url,
    },

    {
      property: 'og:image',
      content: image,
    },

    {
      property: 'og:image:width',
      content: '1200',
    },

    {
      property: 'og:image:height',
      content: '630',
    },

    {
      property: 'og:image:alt',
      content:
        'Serhii Drohaltsev Gebäudeservice & Renovierung – Maler- und Fassadenarbeiten',
    },

    {
      property: 'og:locale',
      content: 'de_DE',
    },

    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },

    {
      name: 'twitter:title',
      content: title,
    },

    {
      name: 'twitter:description',
      content: description,
    },

    {
      name: 'twitter:image',
      content: image,
    },

    {
      name: 'twitter:image:alt',
      content: 'Professionelle Maler- und Fassadenarbeiten in Deutschland',
    },
  ];
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <ProjectsPreview />
      <ProcessPreview />
      <CtaSection />
    </>
  );
}
