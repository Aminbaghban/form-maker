export interface IError {
  code: string;
  message: string;
  details: string;
  data: object;
  validationErrors: { message: string; members: string[] }[];
}
