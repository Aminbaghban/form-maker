import { NumberInputProps } from './../form-fields/number-input/index.types';
import { FormControlProps as ChakraFormControlProps } from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import { CheckboxProps } from '../form-fields/checkbox/index.types';
import { SelectProps } from '../form-fields/select/index.types';
import { SliderProps } from '../form-fields/slider/index.types';
import { SwitchProps } from '../form-fields/switch/index.types';
import { TextareaProps } from '../form-fields/text-area/index.types';
import { TextInputProps } from '../form-fields/text-input/index.types';
import { PinInputProps } from './../form-fields/pin-input/index.types';
import { UploaderProps } from '@aminbaghbanzadeh/chakra-file-uploader';
import { AsyncSelectProps } from '../form-fields/reach-select/index.types';
import { TreeViewProps } from '../form-fields/tree/index.types';
import { StartRatingProps } from '../form-fields/star-selector/index.types';
import { EditorProps } from '../form-fields/editor/index.types';
import { RadioGroupProps } from '../form-fields/radio/index.types';
import { PasswordInputProps } from '../form-fields/password-input/index.types';
export { SelectProps } from '../form-fields/select/index.types';
export { SwitchProps } from '../form-fields/switch/index.types';
export { TextareaProps } from '../form-fields/text-area/index.types';
export { TextInputProps } from '../form-fields/text-input/index.types';
export { RadioGroupProps } from '../form-fields/radio/index.types';

type FormControlType =
  | 'input-text'
  | 'input-password'
  | 'input-tag'
  | 'input-mask'
  | 'input-number'
  | 'checkbox'
  | 'switch'
  | 'text-area'
  | 'select'
  | 'slider'
  | 'input-pin'
  | 'editor'
  | 'uploader'
  | 'reach-select'
  | 'tree-view'
  | 'star-picker'
  | 'radio-group';
export interface FormControlSetting {
  type: FormControlType;
  fieldProps?:
    | CheckboxProps
    | SelectProps
    | SwitchProps
    | TextareaProps
    | TextInputProps
    | SliderProps
    | PinInputProps
    | NumberInputProps
    | UploaderProps
    | AsyncSelectProps
    | TreeViewProps
    | StartRatingProps
    | EditorProps
    | RadioGroupProps
    | PasswordInputProps;
  valueConverter?: (arg: any) => any;
}

export interface FormControlProps extends Partial<ChakraFormControlProps> {
  name: string;
  onChange?: (...event: any[]) => void;
  error?: FieldError;
  value?: any;
  fieldSetting?: FormControlSetting;
  placeHolder?: string;
  helperText?: string;
  hideLabel?: boolean;
  hideError?: boolean;
}

export interface ControlledFormControlProps extends FormControlProps {}
