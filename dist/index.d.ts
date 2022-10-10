/// <reference types="react" />
import React$1, { PropsWithChildren, MouseEventHandler, FC } from 'react';
import { NumberInputProps as NumberInputProps$1, CheckboxProps as CheckboxProps$1, SelectProps as SelectProps$1, RangeSliderProps, SwitchProps as SwitchProps$1, TextareaProps as TextareaProps$1, InputProps, UsePinInputProps, ButtonProps as ButtonProps$1, FormControlProps as FormControlProps$1 } from '@chakra-ui/react';
import { FieldError, FieldErrors, Control } from 'react-hook-form';
import { UploaderProps } from '@aminbaghbanzadeh/chakra-file-uploader';
import { AsyncPaginateProps } from 'react-select-async-paginate';
import { TreeProps, TreeData } from '@aminbaghbanzadeh/chakra-tree-view';
import { AxiosResponse } from 'axios';
import { IProps } from '@tinymce/tinymce-react/lib/cjs/main/ts/components/Editor';
import { SchemaObjectDescription } from 'yup/lib/schema';
import * as yup from 'yup';
import { ObjectSchema } from 'yup';
import * as yup_lib_types from 'yup/lib/types';

interface NumberInputProps extends NumberInputProps$1 {
}

interface CheckboxProps extends CheckboxProps$1 {
}

interface SelectOption$1 {
    label: string;
    value: string | number;
}
interface SelectProps extends SelectProps$1 {
    options?: SelectOption$1[];
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

interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
}
declare type IconType = (props: IconBaseProps) => JSX.Element;

interface TextInputProps extends InputProps {
    icon?: IconType;
}

interface PinInputProps extends UsePinInputProps {
    count: number;
    onChange?: (value: string) => void;
    isInvalid?: boolean;
}

interface SelectOption {
    label: string;
    value: string | number;
}
interface GroupBase<Option> {
    readonly options: readonly Option[];
    readonly label?: string;
}
interface AsyncSelectProps extends AsyncPaginateProps<SelectOption, GroupBase<SelectOption>, undefined, true> {
    options?: SelectOption[];
    fetchUrl?: string;
    valueProperty?: string;
    labelProperty?: string;
    searchQueryFieldName?: string;
    offsetQueryFieldName?: string;
    resultFieldName?: string;
    totalCountFieldName?: string;
    isInvalid?: boolean;
    isDisabled?: boolean;
    isCreatable?: boolean;
}

interface TreeViewProps extends TreeProps {
    inline?: boolean;
    btnProps?: ButtonProps$1;
    fetchUrl?: string;
    btnText?: string;
    treeDataTransformer?: <TResponse>(apiResponse?: AxiosResponse<TResponse, any>) => TreeData[];
    requestHeaders?: object;
}

interface StartRatingProps {
    onClick?: (value: number) => void;
    initialValue?: number;
    ratingValue?: number;
    iconsCount?: number;
    size?: number;
    readonly?: boolean;
    fillColor?: string;
    fillColorArray?: string[];
    emptyColor?: string;
    fullIcon?: React.ReactElement | null;
    emptyIcon?: React.ReactElement | null;
    customIcons?: {
        icon: React.ReactElement;
    }[];
    rtl?: boolean;
    allowHalfIcon?: boolean;
    allowHover?: boolean;
    transition?: boolean;
    className?: string;
    style?: React.CSSProperties;
    fullClassName?: string;
    emptyClassName?: string;
    fullStyle?: React.CSSProperties;
    emptyStyle?: React.CSSProperties;
    showTooltip?: boolean;
    tooltipDefaultText?: string;
    tooltipArray?: string[];
    tooltipClassName?: string;
    tooltipStyle?: React.CSSProperties;
}

interface EditorProps {
    value: string;
    onChange: (value: string) => void;
    editorProps?: Partial<IProps>;
}

declare type FormControlType = 'input-text' | 'input-tag' | 'input-mask' | 'input-number' | 'checkbox' | 'switch' | 'text-area' | 'select' | 'slider' | 'input-pin' | 'editor' | 'uploader' | 'reach-select' | 'tree-view' | 'star-picker';
interface FormControlSetting extends FormControlProps$1 {
    type: FormControlType;
    fieldProps?: CheckboxProps | SelectProps | SwitchProps | TextareaProps | TextInputProps | SliderProps | PinInputProps | NumberInputProps | UploaderProps | AsyncSelectProps | TreeViewProps | StartRatingProps | EditorProps;
    placeHolder?: string;
    helperText?: string;
    hideLabel?: boolean;
    valueConverter?: (arg: any) => any;
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
    onSubmitSucess?: (varibales: TFormSchema) => void;
    onSubmitError?: (errors: FieldErrors<TFormSchema>) => void;
    onMutateSucess?: (data: TResponse, varibales: TFormSchema) => void;
    onMutateError?: (error: any) => void;
    mutationFunction?: (varibales: TFormSchema) => Promise<AxiosResponse<TResponse>>;
    defaultValues?: Partial<TFormSchema>;
    doesHaveRecaptcha?: boolean;
    recaptchaApiKey?: string;
    /**
     * you can pass this meanwhile you are fetching defaulkt values. During this it shows skeleton for form fields.
     */
    isDefaultValueFetching?: boolean;
}

declare function FormBuilder<TFormSchema, TResponse>(ctx: PropsWithChildren<FormBuilderProps<TFormSchema, TResponse>>): JSX.Element;
declare function useAminook(): {
    formSchema: SchemaObjectDescription;
    control: Control<any, any>;
    translation: any;
    router: any;
    isLoading: boolean;
    isError: boolean;
    isDefaultValueFetching?: boolean | undefined;
};

interface ButtonProps extends ButtonProps$1 {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const FormSubmitButton: FC<ButtonProps>;

declare const Select: React$1.ForwardRefExoticComponent<SelectProps & React$1.RefAttributes<any>>;

declare const mobileIranValidation: RegExp;
declare const phoneNumberIranValidation: RegExp;

declare const inherentNumberString: yup.StringSchema<string | undefined, yup_lib_types.AnyObject, string | undefined>;
declare const selectWithValueExtractor: () => yup.NumberSchema<number | undefined, yup_lib_types.AnyObject, number | undefined>;

export { ControlledFormControl, FormBuilder, FormControl, FormControlSetting, FormSubmitButton, Select, inherentNumberString, mobileIranValidation, phoneNumberIranValidation, selectWithValueExtractor, useAminook };
