import GalleryClient from './GalleryClient.jsx';
import { getRouteMetadata } from '@/lib/getRouteMetadata.js';

export const metadata = getRouteMetadata('/gallery') ?? {};

const GalleryPage = () => <GalleryClient />;

export default GalleryPage;
