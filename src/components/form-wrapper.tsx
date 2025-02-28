import { ReactNode } from 'react';

interface FormWrapperProps {
  children: ReactNode;
}

export const FormWrapper = ({ children }: FormWrapperProps) => {
  return <div className="p-6 md:p-10 w-full max-w-3xl">{children}</div>;
};
