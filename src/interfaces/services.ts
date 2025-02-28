export interface BaseServerResponse<P> {
  code: number;
  message: string;
  payload: P;
}

export type BaseServerError = BaseServerResponse<undefined>;