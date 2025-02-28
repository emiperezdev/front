import { ReactNode, Suspense } from 'react';

import { Loader } from './loader';

interface WithSuspenseProps {
  children: ReactNode;
}

function WithSuspense({ children }: WithSuspenseProps) {
  return (
    <div className="flex items-center justify-center w-full">
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}

export default WithSuspense;
