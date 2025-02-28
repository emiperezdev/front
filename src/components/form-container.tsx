import React, { forwardRef } from 'react';

interface FormContainerProps {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const FormContainer = forwardRef<HTMLFormElement, FormContainerProps>(
  ({ children, onSubmit }, ref) => {
    return (
      <form ref={ref} className="flex flex-col gap-6" onSubmit={onSubmit}>
        {children}
      </form>
    );
  },
);
