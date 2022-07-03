import {
  Box,
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SchemaDescription } from 'yup/lib/schema';
import { fixPersianAndArabicNumber } from '../../helpers';
import { Checkbox } from '../form-fields/checkbox';
import { CheckboxProps } from '../form-fields/checkbox/index.types';
import { Editor } from '../form-fields/editor';
import { NumberInput } from '../form-fields/number-input';
import { NumberInputProps } from '../form-fields/number-input/index.types';
import { PinInput } from '../form-fields/pin-input';
import { PinInputProps } from '../form-fields/pin-input/index.types';
import { Select } from '../form-fields/select';
import { Slider } from '../form-fields/slider';
import { SliderProps } from '../form-fields/slider/index.types';
import { Switch } from '../form-fields/switch';
import { Textarea } from '../form-fields/text-area';
import { TextInput } from '../form-fields/text-input';
import { useAminook } from '../form-generator/index';
import {
  ControlledFormControlProps,
  FormControlProps,
  FormControlSetting,
  SelectProps,
  SwitchProps,
  TextareaProps,
  TextInputProps,
} from './index.types';

export const FormControl = forwardRef<any, FormControlProps>(
  ({ ...ctx }, ref) => {
    /**
     *3rd Hooks
     */
    const [formTranslation] = useTranslation('validations');
    const { translation: t, router } = useAminook();

    /**
     * Form Schema
     */
    const { formSchema } = useAminook();

    /**
     * describe schema
     */
    const fieldSchema = formSchema.fields[ctx.name] as SchemaDescription;
    const meta = (fieldSchema?.meta as FormControlSetting) ?? ctx.fieldSetting;
    const formControlMeta = { name: ctx.name, value: ctx.value };

    return (
      <Box
        my={ctx.my}
        mx={ctx.mx}
        display='inline-block'
        w={{ base: ctx.width?.base ?? 'full', md: ctx.width?.md ?? 'full' }}
      >
        <ChakraFormControl
          display={ctx.hidden ? 'none' : 'initial'}
          isInvalid={!!ctx.error}
          isRequired={
            fieldSchema?.tests.some((q) => q.name === 'required') ?? false
          }
        >
          {!meta?.hideLabel && (
            <FormLabel htmlFor={ctx.name} fontSize='sm' fontWeight='bold'>
              {fieldSchema?.label
                ? fieldSchema.label
                : ctx.fieldSetting?.label
                ? ctx.fieldSetting?.label
                : t(
                    `${
                      router ? router.pathname : window.location.pathname
                    }.form.labels.${ctx.name}`
                  )}
            </FormLabel>
          )}
          {(() => {
            switch (meta?.type ?? ctx.fieldSetting?.type) {
              case 'input-text':
              case 'input-mask':
                return (
                  <TextInput
                    ref={ref}
                    {...{
                      ...formControlMeta,
                      ...(meta?.fieldProps as TextInputProps),
                    }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      ctx.onChange!(fixPersianAndArabicNumber(e.target.value));
                    }}
                  />
                );
              case 'input-number':
                return (
                  <NumberInput
                    ref={ref}
                    {...{
                      ...formControlMeta,
                      ...(meta?.fieldProps as NumberInputProps),
                    }}
                    onChange={(
                      valueAsString: string,
                      valueAsNumber: number
                    ) => {
                      ctx.onChange!(valueAsNumber);
                    }}
                  />
                );
              case 'checkbox':
                return (
                  <Checkbox
                    {...(meta?.fieldProps as CheckboxProps)}
                    {...formControlMeta}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      ctx.onChange!(e.target.checked, e)
                    }
                  />
                );
              case 'select':
                return (
                  <Select
                    ref={ref}
                    {...(meta?.fieldProps as SelectProps)}
                    {...formControlMeta}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      ctx.onChange!(e.target.value, e)
                    }
                  />
                );
              case 'switch':
                return (
                  <Switch
                    {...formControlMeta}
                    {...(meta?.fieldProps as SwitchProps)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      ctx.onChange!(e.target.checked)
                    }
                  />
                );
              case 'text-area':
                return (
                  <Textarea
                    {...formControlMeta}
                    {...(meta?.fieldProps as TextareaProps)}
                    onChange={(e) => ctx.onChange!(e.target.value, e)}
                  />
                );
              case 'text-area':
                return (
                  <Textarea
                    {...formControlMeta}
                    {...(meta?.fieldProps as TextareaProps)}
                    onChange={(e) => ctx.onChange!(e.target.value, e)}
                  />
                );
              case 'slider':
                return (
                  <Slider
                    {...ctx}
                    {...(meta?.fieldProps as SliderProps)}
                    //onChange={(e) => ctx.onChange!(e.target.value, e)}
                  />
                );
              case 'input-pin':
                return (
                  <PinInput
                    {...formControlMeta}
                    {...(meta?.fieldProps as PinInputProps)}
                    isInvalid={!!ctx.error}
                    onChange={(value) => ctx.onChange!(value)}
                  />
                );
              case 'editor':
                return (
                  <Editor
                    value={ctx.value}
                    onChange={(value: string) => ctx.onChange!(value)}
                  />
                );
              default:
                return <Box>Unrecognized field type.</Box>;
            }
          })()}
          {!!meta?.helperText && (
            <FormHelperText fontSize='xs'>{meta?.helperText}</FormHelperText>
          )}
          {!!ctx.error && (
            <FormErrorMessage fontSize='xs'>
              {t
                ? formTranslation(ctx.error.type, {
                    path: t(
                      `${
                        router ? router.pathname : window.location.pathname
                      }.form.labels.${ctx.name}`
                    ),
                    value: ctx.value,
                  })
                : ctx.error.message}
            </FormErrorMessage>
          )}
        </ChakraFormControl>
      </Box>
    );
  }
);

export const ControlledFormControl: React.FC<ControlledFormControlProps> = ({
  ...ctx
}) => {
  /**
   * Form Control
   */
  const { control } = useAminook();

  return (
    <Controller
      name={ctx.name}
      control={control}
      render={({ field, fieldState, formState }) => {
        return (
          <FormControl
            error={fieldState.error}
            {...{ ...ctx, ...fieldState, ...field }}
          />
        );
      }}
    />
  );
};
