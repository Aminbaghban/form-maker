import { PropsWithChildren } from 'react';
import { Control } from 'react-hook-form';
import { SchemaObjectDescription } from 'yup/lib/schema';
import { FormBuilderProps } from './index.types';
declare function FormBuilder<TFormSchema, TResponse>(ctx: PropsWithChildren<FormBuilderProps<TFormSchema, TResponse>>): JSX.Element;
declare function useAminook(): {
    formSchema: SchemaObjectDescription;
    control: Control<any, any>;
    translation: any;
    router: any;
    isLoading: boolean;
    isError: boolean;
};
export { FormBuilder, useAminook };
