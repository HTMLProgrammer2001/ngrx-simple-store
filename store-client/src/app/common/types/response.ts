import {ResponseStatus} from './response-status';

export interface IResponse<T> {
  status: ResponseStatus;
  data: T;
  errors: Array<string>;
}
