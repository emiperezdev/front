import { AxiosError } from 'axios';



import { ApiResponse } from '@/interfaces/api-response';

import { errorMessageKeyOf } from './ErrorUtils';

/**
 *  This function is designed to handle and return user-friendly error messages based on an Axios error response.
 */

export const generateErrorMessage = (error: unknown) => {
  if (error instanceof AxiosError && error.response) {
    const serverError: ApiResponse<unknown> = error.response.data;
    const errorCode = serverError?.code?.toString();
    return errorMessageKeyOf(errorCode);
  }

  return 'Se ha producido un error inesperado. Vuelva a intentarlo más tarde.';
};
