import { ReactNode } from 'react';

interface TablePageWrapperPops {
  children: ReactNode;
}

export const TablePageWrapper = ({ children }: TablePageWrapperPops) => {
  return (
    <div className="container overflow-x-auto mx-auto py-10 px-2">
      {children}
    </div>
  );
};
