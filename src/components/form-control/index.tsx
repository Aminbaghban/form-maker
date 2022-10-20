import {
  ChakraFileUploader,
  ChakraFileUploaderSkeleton,
  UploaderProps,
} from '@aminbaghbanzadeh/chakra-file-uploader';
import {
  Box,
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
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
import {
  AsyncSelectProps,
  TagInputProps,
} from '../form-fields/reach-select/index.types';
import { AsyncSelect } from '../form-fields/reach-select';
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
  RadioGroupProps,
} from './index.types';
import { Select } from '../form-fields/select';
import { TagInput } from '../form-fields/reach-select/creatable';
import { TreeView } from '../form-fields/tree';
import { RadioGroup } from '../form-fields/radio';
import { TreeViewProps } from '../form-fields/tree/index.types';
import { TextInputSkeleton } from '../form-fields/text-input/skeleton';
import { CheckboxSkeleton } from '../form-fields/checkbox/skeleton';
import { SelectSkeleton } from '../form-fields/select/skeleton';
import { TextAreaSkeleton } from '../form-fields/text-area/skeleton';
import { StartRating } from '../form-fields/star-selector';
import { StartRatingProps } from '../form-fields/star-selector/index.types';
import { EditorProps } from '../form-fields/editor/index.types';

export const FormControl = forwardRef<any, FormControlProps>(
  ({ ...ctx }, ref) => {
    /**
     *3rd Hooks
     */
    const [formTranslation] = useTranslation('validations');
    const {
      translation: t,
      router,
      formSchema,
      isDefaultValueFetching,
    } = useAminook();
    const { setValue } = useFormContext();

    /**
     * describe schema
     */
    const fieldSchema = formSchema.fields[ctx.name] as
      | SchemaDescription
      | undefined;
    const meta = (fieldSchema?.meta ?? ctx.fieldSetting) as FormControlSetting;
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
          {!meta?.hideLabel && meta.type !== 'checkbox' && (
            <FormLabel
              htmlFor={ctx.name}
              fontSize='sm'
              fontWeight='bold'
              color={isDefaultValueFetching ? 'gray.300' : '#202124'}
            >
              {fieldSchema?.label
                ? fieldSchema?.label
                : ctx?.fieldSetting?.label
                ? ctx?.fieldSetting?.label
                : t(
                    `${
                      router ? router?.pathname : window.location.pathname
                    }.form.labels.${ctx.name}`
                  )}
            </FormLabel>
          )}
          {(() => {
            switch (meta?.type ?? ctx.fieldSetting?.type) {
              case 'input-text':
              case 'input-mask':
                return !isDefaultValueFetching ? (
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
                ) : (
                  <TextInputSkeleton
                    width={(
                      meta?.fieldProps as TextInputProps
                    ).width?.toString()}
                  />
                );
              case 'input-number':
                return !isDefaultValueFetching ? (
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
                ) : (
                  <TextInputSkeleton
                    width={(
                      meta?.fieldProps as TextInputProps
                    ).width?.toString()}
                  />
                );
              case 'checkbox':
                return !isDefaultValueFetching ? (
                  <Checkbox
                    ref={ref}
                    {...(meta?.fieldProps as CheckboxProps)}
                    {...formControlMeta}
                    checked={formControlMeta.value}
                    title={fieldSchema?.label}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      ctx.onChange!(e.target.checked, e)
                    }
                  />
                ) : (
                  <CheckboxSkeleton />
                );
              case 'select':
                return !isDefaultValueFetching ? (
                  <Select
                    ref={ref}
                    {...(meta?.fieldProps as SelectProps)}
                    {...formControlMeta}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      ctx.onChange!(e.target.value, e)
                    }
                  />
                ) : (
                  <SelectSkeleton />
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
                return !isDefaultValueFetching ? (
                  <Textarea
                    {...formControlMeta}
                    {...(meta?.fieldProps as TextareaProps)}
                    onChange={(e) => ctx.onChange!(e.target.value, e)}
                  />
                ) : (
                  <TextAreaSkeleton />
                );
              case 'slider':
                return (
                  <Slider
                    {...ctx}
                    {...(meta?.fieldProps as SliderProps)}
                    onChange={(e: number[]) => {
                      ctx.name
                        .split('_')
                        .forEach((q, index) => setValue(`${q}`, e[index]));
                    }}
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
                    {...(meta?.fieldProps as EditorProps)}
                    value={ctx.value}
                    onChange={(value: string) => ctx.onChange!(value)}
                  />
                );
              case 'uploader':
                return !isDefaultValueFetching ? (
                  <ChakraFileUploader
                    {...(meta?.fieldProps as UploaderProps)}
                  />
                ) : (
                  <ChakraFileUploaderSkeleton
                    {...(meta?.fieldProps as UploaderProps)}
                  />
                );
              case 'reach-select':
                return !isDefaultValueFetching ? (
                  <AsyncSelect
                    ref={ref}
                    {...(meta?.fieldProps as AsyncSelectProps)}
                    isInvalid={!!ctx.error}
                    isDisabled={meta?.isDisabled}
                    {...formControlMeta}
                    onChange={(e: any) => {
                      ctx.onChange!(e);
                    }}
                  />
                ) : (
                  <SelectSkeleton />
                );
              case 'input-tag':
                return !isDefaultValueFetching ? (
                  <TagInput
                    ref={ref}
                    {...(meta?.fieldProps as TagInputProps)}
                    isInvalid={!!ctx.error}
                    {...formControlMeta}
                    onChange={(e: any) => {
                      ctx.onChange!(e);
                    }}
                    value={
                      !!ctx.value
                        ? ctx.value
                            ?.split(',')
                            ?.map((q: string) => ({ value: q, label: q }))
                        : undefined
                    }
                  />
                ) : (
                  <TextInputSkeleton />
                );
              case 'tree-view':
                return (
                  <TreeView
                    {...(meta?.fieldProps as TreeViewProps)}
                    {...formControlMeta}
                    onChange={(e: any) => {
                      ctx.onChange!(e);
                    }}
                    defaultSelected={ctx.value}
                  />
                );
              case 'radio-group':
                return (
                  <RadioGroup
                    {...(meta?.fieldProps as RadioGroupProps)}
                    {...formControlMeta}
                    onChange={(e: any) => {
                      ctx.onChange!(e);
                    }}
                  />
                );
              case 'star-picker':
                return (
                  <StartRating
                    {...(meta?.fieldProps as StartRatingProps)}
                    {...formControlMeta}
                    onClick={(e: any) => {
                      ctx.onChange!(e);
                    }}
                    initialValue={ctx.value}
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
                : ctx.error?.message}
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
