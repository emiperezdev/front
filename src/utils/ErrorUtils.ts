/**
 * The errorMessageKeyOf function maps a provided error code,
 * typically passed from the generateErrorMessage function,
 * to a predefined user-friendly error message.
 */

const ERROR_CODES: Record<string, string> = {} as const;

export function errorMessageKeyOf(code: string): string {
  return ERROR_CODES[code] || 'Algo ha ido mal. Vuelva a intentarlo más tarde.';
}
