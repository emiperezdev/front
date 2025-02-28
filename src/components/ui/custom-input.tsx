import { HTMLInputTypeAttribute, KeyboardEvent, useState } from 'react';

import { Label } from '@radix-ui/react-label';
import { Eye, EyeOff } from 'lucide-react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { ErrorText } from '../error-text';
import { Input } from './input';

interface CustomInputProps {
  label?: string;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  error?: string;
  type?: HTMLInputTypeAttribute;
  disabled?: boolean;
  hasValue?: boolean;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
}

export const CustomInput = ({
  label,
  register,
  placeholder,
  error,
  type,
  disabled,
  minLength,
  maxLength,
  required,
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    const char = e.key;

    // Prevent Enter key event
    if (char === 'Enter') e.preventDefault();

    if (type === 'tel') {
      if (
        !/^\d$/.test(char) &&
        char !== '+' &&
        char !== 'Backspace' &&
        char !== 'Delete' &&
        char !== 'ArrowLeft' &&
        char !== 'ArrowRight'
      ) {
        e.preventDefault();
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="grid gap-2">
      <Label>
        {label}
        {type === 'textarea' ? (
          <textarea
            placeholder={required ? `${placeholder} (Requerido)` : placeholder}
            disabled={disabled}
            role="textbox"
            {...register}
            maxLength={maxLength}
          />
        ) : (
          <div className="relative">
            <Input
              placeholder={
                required ? `${placeholder} (Requerido)` : placeholder
              }
              type={type === 'password' && showPassword ? 'text' : type}
              disabled={disabled}
              role="textbox"
              onKeyUp={handleKeyPress}
              onKeyDown={handleKeyPress}
              {...register}
              minLength={minLength}
              maxLength={maxLength}
            />
            {type === 'password' && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-2 flex items-center"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            )}
          </div>
        )}
      </Label>
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
};
