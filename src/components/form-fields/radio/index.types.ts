import {
  RadioGroupProps as ChakraRadioGroupProps,
  RadioProps,
} from '@chakra-ui/react';
import { SelectOption } from '../reach-select/index.types';

export interface RadioGroupProps extends ChakraRadioGroupProps {
  radioProps?: RadioProps;
  options?: SelectOption[];
  fetchUrl?: string;
  resultFieldName?: string;
}
