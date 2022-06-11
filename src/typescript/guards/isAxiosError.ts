import {AxiosError} from 'axios';

export function isAxiosError(error: any): error is AxiosError {
  return 'config' in error && 'isAxiosError' in error;
}
