export interface PasswordCheckerProps {
  min?: { value: number; message: string };
  max?: { value: number; message: string };
  regex?: { value: RegExp; message: string }[];
}
