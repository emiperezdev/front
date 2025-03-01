import { RouteObject } from 'react-router-dom';

import ErrorBoundaryPage from '@/app/errorBoundary/ErrorBoundaryPage';
import WithSuspense from '@/components/with-suspense';
import { LazyComponents } from '@/data/lazy-components';

import { PRODUCT_PATH } from './paths';

const { CompanyPage } = LazyComponents;

const loggedInRoutes: RouteObject[] = [
  {
    path: PRODUCT_PATH,
    element: <CompanyPage />,
    errorElement: <ErrorBoundaryPage />,
  },
];

export const AuthenticatedRoutes: RouteObject[] = loggedInRoutes.map(
  (route: RouteObject) => {
    return {
      ...route,
      element: (
          <WithSuspense>{route.element}</WithSuspense>
      ),
    };
  },
);
