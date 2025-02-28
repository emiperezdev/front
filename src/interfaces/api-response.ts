export interface ApiResponse<P> {
  code: number;
  payload: P;
  message: string;
}