import { useState, useEffect } from 'react';

import { FieldValues, UseFormWatch } from 'react-hook-form';

type GenerateErrorMessageFn = (error: unknown) => string;

function useFormErrorHandler<T extends FieldValues>(
  watch: UseFormWatch<T>,
  generateErrorMessage: GenerateErrorMessageFn,
): { formErrorMessage: string; handleFormError: (error: unknown) => void } {
  const [formErrorMessage, setFormErrorMessage] = useState<string>('');

  // Reset form error message on any input change
  useEffect(() => {
    const subscription = watch(
      () => formErrorMessage && setFormErrorMessage(''),
    );
    return () => subscription.unsubscribe();
  }, [watch, formErrorMessage]);

  // Handle API errors by generating and setting an error message
  const handleFormError = (error: unknown) => {
    const errorMessage = generateErrorMessage(error);
    setFormErrorMessage(errorMessage);
  };

  return { formErrorMessage, handleFormError };
}

export default useFormErrorHandler;
