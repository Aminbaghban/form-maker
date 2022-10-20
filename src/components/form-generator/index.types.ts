import { AxiosResponse } from 'axios';
import { FieldErrors } from 'react-hook-form';
import { ObjectSchema } from 'yup';

export interface FormBuilderProps<TFormSchema, TResponse> {
  mode?: 'onSubmit' | 'onChange';
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
  /**
   * you must pass translation object such as t in useTranslation in order to use your localization system for
   * form control labels or place holders or validations messages. Notice that you can still label and it has it hiher priority than translation system.
   */
  translation?: any;
  /**
   * you must
   */
  router?: any;
  onSubmitSucess?: (varibales: TFormSchema) => void;
  onSubmitError?: (errors: FieldErrors<TFormSchema>) => void;
  onMutateSucess?: (data: TResponse, varibales: TFormSchema) => void;
  onMutateError?: (error: any) => void;
  mutationFunction?: (
    varibales: TFormSchema
  ) => Promise<AxiosResponse<TResponse>>;
  defaultValues?: Partial<TFormSchema>;
  doesHaveRecaptcha?: boolean;
  recaptchaApiKey?: string;
  /**
   * you can pass this meanwhile you are fetching defaulkt values. During this it shows skeleton for form fields.
   */
  isDefaultValueFetching?: boolean;
}
