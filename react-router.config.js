export default {
  appDirectory: 'src',
  ssr: false,

  async prerender() {
    return [
      '/',

      '/leistungen',
      '/projekte',
      '/ueber-mich',
      '/kontakt',

      '/datenschutz',
      '/cookie-richtlinie',
      '/impressum',
      '/agb',

      '/404',
    ];
  },
};
