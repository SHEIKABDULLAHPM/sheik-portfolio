import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import BackgroundParticles from './BackgroundParticles.jsx';

const AppLayout = () => (
  <div className="relative min-h-screen bg-[#010511] text-slate-100">
    <BackgroundParticles />
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="content-shell flex-1 pb-20 pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
);

export default AppLayout;
