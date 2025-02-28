'use client';

import * as React from 'react';

import { Label } from '@radix-ui/react-label';
import { Check, ChevronsUpDown, Loader } from 'lucide-react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

import { ErrorText } from './error-text';

interface CustomComboboxProps {
  data: Array<Record<string, any>>;
  isLoading?: boolean;
  labelKey: string;
  placeholder: string;
  label: string;
  error?: string;
  disabled?: boolean;
  register?: UseFormRegisterReturn;
  value?: string;
  onChange?: (value: string) => void; // Agregamos el onChange para pasar el valor al formulario
}

export default function CustomCombobox({
  data = [],
  isLoading,
  labelKey,
  placeholder,
  label,
  error,
  disabled,
  register,
  value: controlledValue,
  onChange,
}: CustomComboboxProps) {
  if (isLoading) return <Loader />;

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(controlledValue || '');

  React.useEffect(() => {
    setValue(controlledValue || '');
  }, [controlledValue]);

  const handleSelect = (currentValue: string) => {
    const newValue = currentValue === value ? '' : currentValue;
    setValue(newValue);
    setOpen(false);
    if (onChange) {
      onChange(newValue); // Llamamos a onChange para actualizar el valor en React Hook Form
    }
  };

  return (
    <div className="flex flex-col gap-2 max-w-60">
      {label && <Label>{label}</Label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            disabled={disabled}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              'w-[200px] justify-between',
              error ? 'border-red-500 focus:ring-red-300' : '',
            )}
          >
            {value
              ? data.find((item) => item[labelKey] === value)?.[labelKey]
              : placeholder}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search..." className="h-9" />
            <CommandList>
              <CommandEmpty>No existen opciones.</CommandEmpty>
              <CommandGroup>
                {data.map((item) => (
                  <CommandItem
                    key={item[labelKey]}
                    value={item[labelKey]}
                    onSelect={() => handleSelect(item[labelKey])}
                  >
                    {item[labelKey]}
                    <Check
                      className={cn(
                        'ml-auto',
                        value === item[labelKey] ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {/* Si `register` se pasa, se asocia el valor y el evento de cambio */}
      {register && <input type="hidden" value={value} {...register} />}
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}
