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
import { SchemaDescription } from 'yup/lib/schema';
import { fixPersianAndArabicNumber } from '../../helpers';
import { Checkbox } from '../form-fields/checkbox';
import { CheckboxProps } from '../form-fields/checkbox/index.types';
import { CheckboxSkeleton } from '../form-fields/checkbox/skeleton';
import { Editor } from '../form-fields/editor';
import { EditorProps } from '../form-fields/editor/index.types';
import { NumberInput } from '../form-fields/number-input';
import { NumberInputProps } from '../form-fields/number-input/index.types';
import { PasswordInput } from '../form-fields/password-input';
import { PasswordInputProps } from '../form-fields/password-input/index.types';
import { PinInput } from '../form-fields/pin-input';
import { PinInputProps } from '../form-fields/pin-input/index.types';
import { RadioGroup } from '../form-fields/radio';
import { AsyncSelect } from '../form-fields/reach-select';
import { TagInput } from '../form-fields/reach-select/creatable';
import {
  AsyncSelectProps,
  TagInputProps,
} from '../form-fields/reach-select/index.types';
import { Select } from '../form-fields/select';
import { SelectSkeleton } from '../form-fields/select/skeleton';
import { Slider } from '../form-fields/slider';
import { SliderProps } from '../form-fields/slider/index.types';
import { StartRating } from '../form-fields/star-selector';
import { StartRatingProps } from '../form-fields/star-selector/index.types';
import { Switch } from '../form-fields/switch';
import { Textarea } from '../form-fields/text-area';
import { TextAreaSkeleton } from '../form-fields/text-area/skeleton';
import { TextInput } from '../form-fields/text-input';
import { TextInputSkeleton } from '../form-fields/text-input/skeleton';
import { TreeView } from '../form-fields/tree';
import { TreeViewProps } from '../form-fields/tree/index.types';
import { useAminook } from '../form-generator/index';
import {
  ControlledFormControlProps,
  FormControlProps,
  FormControlSetting,
  RadioGroupProps,
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

    const { formSchema, isDefaultValueFetching } = useAminook();
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
        w={ctx.width ?? 'full'}
      >
        <ChakraFormControl
          display={ctx.hidden ? 'none' : 'initial'}
          isInvalid={!!ctx.error}
          isRequired={
            fieldSchema?.tests.some((q) => q.name === 'required') ?? false
          }
        >
          {!ctx?.hideLabel && meta.type !== 'checkbox' && (
            <FormLabel
              htmlFor={ctx.name}
              fontSize='sm'
              fontWeight='bold'
              color={isDefaultValueFetching ? 'gray.300' : '#202124'}
            >
              {!!fieldSchema?.label ? fieldSchema?.label : ctx?.label}
            </FormLabel>
          )}
          {(() => {
            switch (meta?.type ?? meta?.type) {
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
              case 'input-password':
                return !isDefaultValueFetching ? (
                  <PasswordInput
                    ref={ref}
                    {...{
                      ...formControlMeta,
                      ...(meta?.fieldProps as PasswordInputProps),
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
                    title={fieldSchema?.label ?? ctx.label}
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
                  //@ts-ignore
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
                    isDisabled={ctx.isDisabled}
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
                    // {...{
                    //   formControlMeta,
                    //   value:
                    //     formControlMeta.value === null
                    //       ? undefined
                    //       : formControlMeta.value,
                    // }}
                    name={ctx.name}
                    value={ctx.value}
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
          {!!ctx?.helperText && (
            <FormHelperText fontSize='xs'>{ctx?.helperText}</FormHelperText>
          )}
          {!!ctx.error && !ctx.hideError && (
            <FormErrorMessage fontSize='xs'>
              {ctx.error?.message}
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
