import { lazy } from 'react';

export const LazyComponents = {
  CompanyPage: lazy(() => import('@/app/product')),
};
