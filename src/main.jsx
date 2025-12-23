import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';  // Changed from BrowserRouter
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element.');
}

createRoot(rootElement).render(
  <StrictMode>
    <HashRouter>  {/* Changed from BrowserRouter */}
      <App />
    </HashRouter>
  </StrictMode>
);