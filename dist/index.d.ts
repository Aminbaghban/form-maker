/// <reference types="react" />
import React$1, { PropsWithChildren, MouseEventHandler, FC } from 'react';
import { NumberInputProps as NumberInputProps$1, CheckboxProps as CheckboxProps$1, SelectProps as SelectProps$1, RangeSliderProps, SwitchProps as SwitchProps$1, TextareaProps as TextareaProps$1, InputProps, UsePinInputProps, FormControlProps as FormControlProps$1, ButtonOptions } from '@chakra-ui/react';
import { FieldError, FieldErrors, Control } from 'react-hook-form';
import { IconType } from 'react-icons';
import { SchemaObjectDescription } from 'yup/lib/schema';
import { AxiosResponse } from 'axios';
import { ObjectSchema } from 'yup';

interface NumberInputProps extends NumberInputProps$1 {
}

interface CheckboxProps extends CheckboxProps$1 {
}

interface SelectOption {
    label: string;
    value: string | number;
}
interface SelectProps extends SelectProps$1 {
    options?: SelectOption[];
    fetchUrl?: string;
    valueProperty?: string;
    labelProperty?: string;
}

interface SliderProps extends RangeSliderProps {
}

interface SwitchProps extends SwitchProps$1 {
}

interface TextareaProps extends TextareaProps$1 {
}

interface TextInputProps extends InputProps {
    icon?: IconType;
}

interface PinInputProps extends UsePinInputProps {
    count: number;
    onChange?: (value: string) => void;
    isInvalid?: boolean;
}

declare type FormControlType = 'input-text' | 'input-mask' | 'input-number' | 'checkbox' | 'switch' | 'text-area' | 'select' | 'slider' | 'input-pin' | 'editor';
interface FormControlSetting extends FormControlProps$1 {
    type: FormControlType;
    fieldProps?: CheckboxProps | SelectProps | SwitchProps | TextareaProps | TextInputProps | SliderProps | PinInputProps | NumberInputProps;
    placeHolder?: string;
    helperText?: string;
    hideLabel?: boolean;
}
interface FormControlProps {
    name: string;
    onChange?: (...event: any[]) => void;
    error?: FieldError;
    onBlur?: any;
    value?: any;
    hidden?: boolean;
    mx?: number;
    my?: number;
    width?: {
        base?: string;
        md?: string;
    };
    fieldSetting?: FormControlSetting;
}
interface ControlledFormControlProps extends FormControlProps {
}

declare const FormControl: React$1.ForwardRefExoticComponent<FormControlProps & React$1.RefAttributes<any>>;
declare const ControlledFormControl: React$1.FC<ControlledFormControlProps>;

interface FormBuilderProps<TFormSchema, TResponse> {
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
    mutationFunction?: (varibales: TFormSchema) => Promise<AxiosResponse<TResponse>>;
    defaultValues?: Partial<TFormSchema>;
    doesHaveRecaptcha?: boolean;
    recaptchaApiKey?: string;
}

declare function FormBuilder<TFormSchema, TResponse>(ctx: PropsWithChildren<FormBuilderProps<TFormSchema, TResponse>>): JSX.Element;
declare function useAminook(): {
    formSchema: SchemaObjectDescription;
    control: Control<any, any>;
    translation: any;
    router: any;
    isLoading: boolean;
    isError: boolean;
};

interface ButtonProps extends ButtonOptions {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const FormSubmitButton: FC<ButtonProps>;

declare const Select: React$1.ForwardRefExoticComponent<SelectProps & React$1.RefAttributes<any>>;

declare const mobileIranValidation: RegExp;
declare const phoneNumberIranValidation: RegExp;

export { ControlledFormControl, FormBuilder, FormControl, FormControlSetting, FormSubmitButton, Select, mobileIranValidation, phoneNumberIranValidation, useAminook };
