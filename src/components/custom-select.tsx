import { Label } from '@radix-ui/react-label';
import { ArrowDown } from 'lucide-react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { ErrorText } from './error-text';

interface Option {
  value: any;
  label: string;
}

interface CustomSelectProps {
  label?: string;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  options: Option[];
  required?: boolean;
}

export const CustomSelect = ({
  label,
  register,
  placeholder,
  error,
  disabled,
  options,
  required,
}: CustomSelectProps) => {
  return (
    <div className="grid gap-2 max-w-60">
      <Label>
        {label}
        <div className="relative">
          <select
            disabled={disabled}
            {...register}
            className={`w-full cursor-pointer rounded-lg border px-4 py-2 text-sm shadow-sm transition-all duration-200 appearance-none
              bg-white text-black
              dark:bg-zinc-950 dark:text-gray-100
              ${
                disabled
                  ? 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500'
                  : error
                    ? 'border-red-500 focus:ring-red-300 dark:focus:ring-red-500'
                    : 'border-gray-300 focus:ring-blue-500 hover:border-blue-400 dark:border-gray-600 dark:focus:ring-blue-400 dark:hover:border-blue-300'
              } focus:outline-none focus:ring-2`}
          >
            <option value="" disabled>
              {required ? `${placeholder} (Requerido)` : placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400 dark:text-gray-500">
            <ArrowDown size="1.2rem" />
          </span>
        </div>
      </Label>
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
};
