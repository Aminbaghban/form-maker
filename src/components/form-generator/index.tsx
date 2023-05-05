import { useToast } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { Control, FieldValues, FormProvider, useForm } from 'react-hook-form';
import { SchemaObjectDescription } from 'yup/lib/schema';
import { FormBuilderProps } from './index.types';

const FormBuilderContext = React.createContext<
  | {
      formSchema: SchemaObjectDescription;
      control: Control<any>;
      isLoading: boolean;
      isError: boolean;
      isDefaultValueFetching?: boolean;
    }
  | undefined
>(undefined);

function FormBuilder<TFormSchema extends FieldValues, TResponse>(
  ctx: PropsWithChildren<FormBuilderProps<TFormSchema, TResponse>>
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  /**
   * 3rd party hooks
   */
  let toast = useToast({
    position: 'top',
    isClosable: true,
    variant: 'top-accent',
  });

  /**
   * describe formSchema
   */
  var formSchema = useMemo(
    () => ctx.formSchema.describe() as SchemaObjectDescription,
    []
  );

  const methods = useForm<TFormSchema>({
    mode: ctx.mode ?? 'onSubmit',
    resolver: yupResolver(ctx.formSchema),
    defaultValues: !!ctx.defaultValues ? (ctx.defaultValues as any) : undefined,
  });

  const onSubmit = async (data: any) => {
    if (!!ctx.onSubmitSucess) {
      ctx.onSubmitSucess(data);
    }
    if (!!ctx.mutationFunction) {
      if (ctx.doesHaveRecaptcha) {
        setIsLoading(true);
        let token = await ctx.getRecaptcha!();
        data = { ...data, captchaToken: token };
        setIsLoading(false);
      }
      ctx.mutationFunction(data);
      // .then((response) => {
      //   setIsLoading(false);
      //   if (ctx.showToastOnSuccess) {
      //     toast({ title: ctx.successToastMessage, status: 'success' });
      //   }
      //   if (!!ctx.onMutateSucess) {
      //     ctx.onMutateSucess(response.data, data);
      //   }
      // })
      // .catch((error) => {
      //   setIsLoading(false);
      //   if (!!ctx.onMutateError) {
      //     ctx.onMutateError(error);
      //   }
      //   toast({
      //     title: error.code,
      //     description: error.message,
      //     status: 'error',
      //   });
      // });
    }
  };
  const onError = (errors: any) => {
    // if (ctx.onSubmitError) {
    //   ctx.onSubmitError(errors);
    //   return;
    // }
  };
  useEffect(() => {
    if (!!ctx.defaultValues) {
      //@ts-ignore
      methods.reset(ctx.defaultValues);
    }
  }, [ctx.defaultValues]);
  useEffect(() => {
    return () => methods.reset();
  }, []);
  return (
    <FormBuilderContext.Provider
      value={{
        formSchema: formSchema,
        control: methods.control,
        isLoading: isLoading,
        isError: false,
        isDefaultValueFetching: ctx.isDefaultValueFetching,
      }}
    >
      <FormProvider {...methods}>
        <form
          id={ctx.id}
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
