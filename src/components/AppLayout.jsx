import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import BackgroundParticles from './BackgroundParticles.jsx';
import ScrollManager from './ScrollManager.jsx';
import SocialSidebar from './SocialSidebar.jsx';

const AppLayout = () => (
  <div className="relative min-h-screen bg-[#010511] text-slate-100 antialiased">
    <ScrollManager />
    <BackgroundParticles />
    <SocialSidebar />
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        <div className="content-shell pb-16 pt-24 sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-36">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  </div>
);

export default AppLayout;
