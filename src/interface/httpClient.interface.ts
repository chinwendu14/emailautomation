/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IHttpResponse<T> {
  [x: string]: any;
  message: string;
  data: T;
}
export interface IHttpError {
  response: {
    status: number;
    data: {
      message: string;
      errors: string[];
    };
  };
}

export interface IHttpPaginatedRes<T> {
  total: number;
  page: number;
  limit: number;
  data: T;
}
