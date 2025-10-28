import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/app/App';
import './assets/global.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// This is the entry point to the React application
// All pages, components, and functionality lives under this umbrella
// Start by entering the <App /> component

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

serviceWorkerRegistration.register();
