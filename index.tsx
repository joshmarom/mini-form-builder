import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FormEditor } from './components/FormEditor';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'document/:documentId',
    element: <FormEditor />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
