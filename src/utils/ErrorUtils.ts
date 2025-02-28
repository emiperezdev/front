/**
 * The errorMessageKeyOf function maps a provided error code,
 * typically passed from the generateErrorMessage function,
 * to a predefined user-friendly error message.
 */

const ERROR_CODES: Record<string, string> = {
  // UnknownError Error
  '403': 'Algo ha ido mal. Vuelva a intentarlo más tarde.',
  // General Error
  '404': 'No hay ninguna cuenta registrada con este username.',
  // Auth Errors
  '401': 'No tienes permitido acceder.',
  '401.2': 'Sesión expirada. Vuelva a hacer login.',
  // Log In Errors
  '401.1': 'Contraseña incorrecta. Vuelva a intentarlo.',
  '403.1': 'Login could not be completed. Please try again later.',
  '409.1': 'Ya existe un usuario con ese username.',
  '409.2': 'Ya existe una marca con ese nombre.',
  '409.3': 'Ya existe una categoría con ese nombre.',
  '409.4': 'Ya existe ese color.',
  '409.5': 'Ya existe esa medida.',
  '409.6': 'Ya existe un producto con ese modelo.',
} as const;

export function errorMessageKeyOf(code: string): string {
  return ERROR_CODES[code] || 'Algo ha ido mal. Vuelva a intentarlo más tarde.';
}
