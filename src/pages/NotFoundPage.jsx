import NotFoundSection from '../components/NotFoundSection/NotFoundSection.jsx';

export function meta() {
  return [
    {
      title: 'Seite nicht gefunden | Serhii Drohaltsev',
    },
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ];
}

export default function NotFoundPage() {
  return <NotFoundSection />;
}
