import './styles/global.css';

import { Outlet, Links, Meta, Scripts, ScrollRestoration } from 'react-router';

import Loader from './components/Loader/Loader.jsx';

export function Layout({ children }) {
  return (
    <html lang="de-DE">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="author"
          content="Serhii Drohaltsev Gebäudeservice & Renovierung"
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#1f2933" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        <meta
          name="application-name"
          content="Serhii Drohaltsev Gebäudeservice & Renovierung"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link rel="manifest" href="/site.webmanifest" />

        <link
          rel="preload"
          href="/fonts/Manrope-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="/fonts/Manrope-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="/fonts/Manrope-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <Meta />
        <Links />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HomeAndConstructionBusiness',
              name: 'Serhii Drohaltsev Gebäudeservice & Renovierung',
              image: 'https://your-domain.de/og-image.jpg',
              telephone: '+49 176 12345678',
              email: 'info@your-domain.de',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Musterstraße 12',
                postalCode: '12345',
                addressLocality: 'Musterstadt',
                addressCountry: 'DE',
              },
              openingHours: 'Mo-Sa 08:00-18:00',
              url: 'https://your-domain.de',
              priceRange: '$$',
              areaServed: {
                '@type': 'Country',
                name: 'Deutschland',
              },
              description:
                'Professionelle Malerarbeiten, Fassadenanstriche, Fassadensanierung und Renovierungsarbeiten.',
            }),
          }}
        />
      </head>

      <body>
        {children}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return (
    <div className="boot-screen">
      <Loader />
    </div>
  );
}

export default function Root() {
  return <Outlet />;
}
