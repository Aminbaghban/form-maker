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
export { SelectProps } from '../form-fields/select/index.types';
export { SwitchProps } from '../form-fields/switch/index.types';
export { TextareaProps } from '../form-fields/text-area/index.types';
export { TextInputProps } from '../form-fields/text-input/index.types';

type FormControlType =
  | 'input-text'
  | 'input-mask'
  | 'input-number'
  | 'checkbox'
  | 'switch'
  | 'text-area'
  | 'select'
  | 'slider'
  | 'input-pin'
  | 'editor';
export interface FormControlSetting extends ChakraFormControlProps {
  type: FormControlType;
  fieldProps?:
    | CheckboxProps
    | SelectProps
    | SwitchProps
    | TextareaProps
    | TextInputProps
    | SliderProps
    | PinInputProps
    | NumberInputProps;
  placeHolder?: string;
  helperText?: string;
  hideLabel?: boolean;
}

export interface FormControlProps {
  name: string;
  onChange?: (...event: any[]) => void;
  error?: FieldError;
  onBlur?: any;
  value?: any;
  hidden?: boolean;
  mx?: number;
  my?: number;
  width?: { base?: string; md?: string };
  fieldSetting?: FormControlSetting;
}

export interface ControlledFormControlProps extends FormControlProps {}
