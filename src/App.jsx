import { Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout.jsx';
import {
  AboutPage,
  BlogPage,
  CertificatesPage,
  ContactPage,
  GalleryPage,
  HomePage,
  InternshipPage,
  ProjectsPage,
  ResumePage,
  SkillsPage,
} from './pages';

const App = () => (
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
      <Route path="*" element={<HomePage />} />
    </Route>
  </Routes>
);

export default App;
