export interface IErrorResponse {
  data: Record<string, Array<string>>;
  message: string;
  success: boolean;
}
