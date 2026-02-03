import { routeMetadata } from '@/data/routeMetadata.js';
import AppLayout from '@/components/AppLayout.jsx';
import './globals.css';

const DEFAULT_ROUTE = routeMetadata['/'];

export const metadata = {
  metadataBase: new URL('https://sheikabdullahpm.github.io/sheik-portfolio'),
  title: DEFAULT_ROUTE.title,
  description: DEFAULT_ROUTE.description,
  openGraph: {
    title: DEFAULT_ROUTE.title,
    description: DEFAULT_ROUTE.description,
    images: ['/sa-mark.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_ROUTE.title,
    description: DEFAULT_ROUTE.description,
    images: ['/sa-mark.svg'],
  },
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <AppLayout>{children}</AppLayout>
    </body>
  </html>
);

export default RootLayout;
