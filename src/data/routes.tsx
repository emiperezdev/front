import { createBrowserRouter, Navigate } from 'react-router-dom';

import ErrorBoundaryPage from '@/app/errorBoundary/ErrorBoundaryPage';
import NotFoundPage from '@/app/notFound/NotFoundPage';

import { PRODUCT_PATH } from './paths';
import { AuthenticatedRoutes } from './routes-config';

export const appRouters = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={PRODUCT_PATH} replace />,
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: '/*',
    element: <NotFoundPage />,
    errorElement: <ErrorBoundaryPage />,
  },
  ...AuthenticatedRoutes,
]);
