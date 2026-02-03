import CertificatesClient from './CertificatesClient.jsx';
import { getRouteMetadata } from '@/lib/getRouteMetadata.js';

export const metadata = getRouteMetadata('/certificates') ?? {};

const CertificatesPage = () => <CertificatesClient />;

export default CertificatesPage;
