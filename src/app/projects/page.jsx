import ProjectsClient from './ProjectsClient.jsx';
import { getRouteMetadata } from '@/lib/getRouteMetadata.js';

export const metadata = getRouteMetadata('/projects') ?? {};

const ProjectsPage = () => <ProjectsClient />;

export default ProjectsPage;
