import {IResponse, ResponseStatus} from './types/response';

export const isNil = (value: any) => value === null || value === undefined;

export const createSuccessResponse = <T>(value: T): IResponse<T> => ({
  status: ResponseStatus.Ok,
  data: value,
  errors: []
});

export const createErrorResponse = (errors: Array<string>): IResponse<void> => ({
  status: ResponseStatus.Failed,
  data: null,
  errors: errors
});
