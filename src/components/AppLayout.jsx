import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import BackgroundParticles from './BackgroundParticles.jsx';
import ScrollManager from './ScrollManager.jsx';
import SocialSidebar from './SocialSidebar.jsx';
import RouteMetadataHandler from './RouteMetadataHandler.jsx';

const AppLayout = () => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  const initialState = prefersReducedMotion ? false : { opacity: 0, y: 32 };
  const animateState = prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const exitState = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 0, y: -20, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } };
  const animateTransition = prefersReducedMotion ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] };

  return (
    <div className="relative min-h-screen bg-[#010511] text-slate-100 antialiased">
      <RouteMetadataHandler />
      <ScrollManager />
      <BackgroundParticles />
      <SocialSidebar />
      <div className="relative flex min-h-screen flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" role="main" tabIndex={-1} className="app-main flex-1">
          <div className="content-shell layout-shell page-content">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={location.pathname}
                initial={initialState}
                animate={animateState}
                exit={exitState}
                transition={animateTransition}
                className="min-h-[55vh]"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
