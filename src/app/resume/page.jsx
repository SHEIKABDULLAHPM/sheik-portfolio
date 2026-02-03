import ResumeClient from './ResumeClient.jsx';
import { getRouteMetadata } from '@/lib/getRouteMetadata.js';

export const metadata = getRouteMetadata('/resume') ?? {};

const ResumePage = () => <ResumeClient />;

export default ResumePage;
