import SkillsClient from './SkillsClient.jsx';
import { getRouteMetadata } from '@/lib/getRouteMetadata.js';

export const metadata = getRouteMetadata('/skills') ?? {};

const SkillsPage = () => <SkillsClient />;

export default SkillsPage;
