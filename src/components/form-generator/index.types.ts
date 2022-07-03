import { AxiosResponse } from 'axios';
import { FieldErrors } from 'react-hook-form';
import { ObjectSchema } from 'yup';

export interface FormBuilderProps<TFormSchema, TResponse> {
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
  onSubmitSucess?: (data: TResponse, varibales: TFormSchema) => void;
  onError?: (errors: FieldErrors<TFormSchema>) => void;
  mutationFunction?: (
    varibales: TFormSchema
  ) => Promise<AxiosResponse<TResponse>>;
  defaultValues?: Partial<TFormSchema>;
  doesHaveRecaptcha?: boolean;
  recaptchaApiKey?: string;
}
