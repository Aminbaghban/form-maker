import { AxiosResponse } from 'axios';
import { FieldErrors } from 'react-hook-form';
import { ObjectSchema } from 'yup';

export interface FormBuilderProps<TFormSchema, TResponse> {
  mode?: 'onSubmit' | 'onChange';
  id?: string;
  showToastOnSuccess?: boolean;
  title?: string;
  successToastMessage?: string;
  /**
   * you must declare valid yup object schema
   */
  formSchema: ObjectSchema<any>;
  /**
   * pass ControlledFormControl or UncontrolledFormControl as children
   */
  children: React.ReactNode;
  onSubmitSucess?: (varibales: TFormSchema) => void;
  onSubmitError?: (errors: FieldErrors<TFormSchema>) => void;
  // onMutateSucess?: (data: TResponse, varibales: TFormSchema) => void;
  // onMutateError?: (error: any) => void;
  mutationFunction?: (
    varibales: TFormSchema
  ) => Promise<AxiosResponse<TResponse>> | void;
  defaultValues?: Partial<TFormSchema>;
  /**
   *something like captcha token
   */
  extraPropsForMutation?: object;
  /**
   * you can pass this meanwhile you are fetching defaulkt values. During this it shows skeleton for form fields.
   */
  isDefaultValueFetching?: boolean;
  doesHaveRecaptcha?: boolean;
  getRecaptcha?: () => Promise<string>;
}
