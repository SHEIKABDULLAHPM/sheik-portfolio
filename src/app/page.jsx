import HomeClient from './HomeClient.jsx';
import { getRouteMetadata } from '@/lib/getRouteMetadata.js';

export const metadata = getRouteMetadata('/') ?? {};

const Home = () => <HomeClient />;

export default Home;
