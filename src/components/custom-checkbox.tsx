import { Label } from '@radix-ui/react-label';
import { UseFormRegisterReturn } from 'react-hook-form';

import { ErrorText } from './error-text';

interface CustomCheckboxProps {
  label: string;
  register?: UseFormRegisterReturn;
  error?: string;
  disabled?: boolean;
  hasValue?: boolean;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomCheckbox = ({
  label,
  register,
  error,
  disabled,
  required,
  onChange,
}: CustomCheckboxProps) => {
  return (
    <>
      <Label className="flex items-center gap-2">
        <input
          type="checkbox"
          disabled={disabled}
          required={required}
          {...register}
          onChange={(e) => {
            if (onChange)  onChange(e);
          }}
        />
        {label}
      </Label>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};
