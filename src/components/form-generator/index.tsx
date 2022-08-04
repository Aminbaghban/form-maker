import { useToast } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosResponse } from 'axios';
import React, { PropsWithChildren } from 'react';
import { Control, FormProvider, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { SchemaDescription, SchemaObjectDescription } from 'yup/lib/schema';
import { useRecaptcha } from '../../hooks/useRecaptcha';
import { IError } from '../../interfaces/api';
import { FormControlProps } from '../form-control/index.types';
import { FormBuilderProps } from './index.types';

const FormBuilderContext = React.createContext<
  | {
      formSchema: SchemaObjectDescription;
      control: Control<any>;
      translation: any;
      router: any;
      isLoading: boolean;
      isError: boolean;
    }
  | undefined
>(undefined);

function FormBuilder<TFormSchema, TResponse>(
  ctx: PropsWithChildren<FormBuilderProps<TFormSchema, TResponse>>
) {
  /**
   * 3rd party hooks
   */
  let toast = useToast({
    position: 'top',
    isClosable: true,
    variant: 'top-accent',
  });

  /**
   * define recaptcha
   */
  let [getToken] = useRecaptcha(
    'recaptcha-key',
    ctx.recaptchaApiKey!,
    () => {},
    ctx.doesHaveRecaptcha ?? false
  );

  /**
   * describe formSchema
   */
  var formSchema = ctx.formSchema.describe() as SchemaObjectDescription;
  var mutate = useMutation<AxiosResponse<TResponse>, IError, TFormSchema>(
    ctx.mutationFunction as any,
    {
      retry: 0,
    }
  );

  const methods = useForm<TFormSchema>({
    resolver: yupResolver(ctx.formSchema),
    defaultValues: !!ctx.defaultValues ? (ctx.defaultValues as any) : undefined,
  });

  const onSubmit = async (data: any) => {
    if (ctx.doesHaveRecaptcha) {
      var token = await getToken();
      data = { ...data, captchaToken: token };
    }

    mutate.mutate(data, {
      onSuccess: (response) => {
        if (ctx.showToastOnSuccess) {
          toast({ title: ctx.successToastMessage, status: 'success' });
        }
        if (ctx.onSubmitSucess) {
          ctx.onSubmitSucess(response.data, data);
        }
      },
      onError: (error) => {
        toast({
          title: error.code,
          description: error.message,
          status: 'error',
        });
      },
    });
    console.log(data);
  };
  const onError = (errors: any) => {
    if (ctx.onError) {
      ctx.onError(errors);
      return;
    }
    //console.log(errors);
  };
  return (
    <FormBuilderContext.Provider
      value={{
        formSchema: formSchema,
        control: methods.control,
        translation: ctx.translation,
        router: ctx.router,
        isLoading: mutate.isLoading,
        isError: mutate.isError,
      }}
    >
      <FormProvider {...methods}>
        <form
          noValidate
          style={{ width: '100%' }}
          onSubmit={methods.handleSubmit(onSubmit, onError)}
        >
          {ctx.children}
        </form>
      </FormProvider>
    </FormBuilderContext.Provider>
  );
}

function useAminook() {
  const context = React.useContext(FormBuilderContext);
  if (context === undefined) {
    throw new Error('useAminook must be used within a FormBuilder Tag');
  }
  return context;
}

export { FormBuilder, useAminook };
