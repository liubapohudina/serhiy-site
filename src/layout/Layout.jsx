import { Outlet, useNavigation } from 'react-router';

import TopBar from '../components/TopBar/TopBar.jsx';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Loader from '../components/Loader/Loader.jsx';
import CookieBanner from '../components/CookieBanner/CookieBanner.jsx';
import WhatsAppPopup from '../components/WhatsAppPopup/WhatsAppPopup.jsx';

export default function Layout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state !== 'idle';

  return (
    <>
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>

      <div className="page">
        <TopBar />
        <Header />
        <main
          id="main-content"
          className="main-content"
          tabIndex={-1}
          aria-label="Hauptinhalt der Website"
        >
          {isPageLoading ? <Loader /> : <Outlet />}
        </main>

        <Footer />
      </div>
      <WhatsAppPopup />
      <CookieBanner />
    </>
  );
}
