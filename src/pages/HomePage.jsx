import Hero from '../components/Hero/Hero';
import ServicesPreview from '../components/ServicesPreview/ServicesPreview';
import AboutPreview from '../components/AboutPreview/AboutPreview';
import ProjectsPreview from '../components/ProjectsPreview/ProjectsPreview';
import ProcessPreview from '../components/ProcessPreview/ProcessPreview';
import CtaSection from '../components/CtaSection/CtaSection';
export function meta() {
  const title =
    'Serhii Drohaltsev Renovierung | Spachtelarbeiten, Airless-Anstriche & Trockenbau';

  const description =
    'Professionelle Spachtelarbeiten, Airless-Anstriche, Fassadenanstriche, Trockenbau, Bodenverlegung und Renovierungsarbeiten. Saubere Ausführung, faire Preise und zuverlässiger Service für Wohnungen, Häuser und Gewerbeobjekte in Deutschland.';

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
        'Spachtelarbeiten, Airless-Anstriche, Fassadenanstriche, Fassadenarbeiten, Renovierungsarbeiten, Trockenbau, Bodenverlegung, Innenausbau, Wandspachtelung, Airless Spritzverfahren, Fassadensanierung, Bodenbeläge, Laminat verlegen, Vinylboden verlegen, Gebäudeservice Deutschland, Serhii Drohaltsev',
    },

    {
      name: 'author',
      content: 'Serhii Drohaltsev Renovierung',
    },

    {
      name: 'publisher',
      content: 'Serhii Drohaltsev Renovierung',
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
      content: 'Serhii Drohaltsev Renovierung',
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
        'Spachtelarbeiten, Airless-Anstriche, Trockenbau und Renovierungsarbeiten',
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
      content: 'Professionelle Spachtelarbeiten, Trockenbau und Bodenverlegung',
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
