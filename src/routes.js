import { layout, index, route } from '@react-router/dev/routes';

export default [
  layout('./layout/Layout.jsx', [
    index('./pages/HomePage.jsx'),

    route('leistungen', './pages/ServicesPage.jsx'),
    route('projekte', './pages/ProjectsPage.jsx'),
    route('ueber-mich', './pages/AboutPage.jsx'),
    route('kontakt', './pages/ContactPage.jsx'),

    route('datenschutz', './pages/PrivacyPolicyPage.jsx'),
    route('cookie-richtlinie', './pages/CookiesPolicyPage.jsx'),
    route('impressum', './pages/ImprintPage.jsx'),
    route('agb', './pages/TermsAndConditionsPage.jsx'),

    route('404', './pages/NotFoundPage.jsx'),
    route('*', './pages/CatchAllRedirect.jsx'),
  ]),
];
