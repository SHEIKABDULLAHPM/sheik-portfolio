import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout.jsx';
import RouteFallback from './components/RouteFallback.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import RouteLoader from './components/RouteLoader.jsx';

const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'));
const CertificatesPage = lazy(() => import('./pages/CertificatesPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const GalleryPage = lazy(() => import('./pages/GalleryPage.jsx'));
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const InternshipPage = lazy(() => import('./pages/InternshipPage.jsx'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.jsx'));
const ResumePage = lazy(() => import('./pages/ResumePage.jsx'));
const SkillsPage = lazy(() => import('./pages/SkillsPage.jsx'));

const BOOTSTRAP_DELAY = 2200;

const App = () => {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsBooting(false), BOOTSTRAP_DELAY);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen
        isVisible={isBooting}
        autoClose={false}
        overlayClassName="bg-[#05060a]"
      />
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/internships" element={<InternshipPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<RouteFallback variant="not-found" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
