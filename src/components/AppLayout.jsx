import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import BackgroundParticles from './BackgroundParticles.jsx';
import ScrollManager from './ScrollManager.jsx';

const AppLayout = () => (
  <div className="relative min-h-screen bg-[#010511] text-slate-100 antialiased">
    <ScrollManager />
    <BackgroundParticles />
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main
        id="main-content"
        role="main"
        tabIndex={-1}
        className="content-shell flex-1 pb-14 pt-20 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
);

export default AppLayout;
