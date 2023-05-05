import { SelectProps as ChakraSelectProps } from '@chakra-ui/react';

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps extends ChakraSelectProps {
  options?: SelectOption[];
  fetchUrl?: string;
  valueProperty?: string;
  labelProperty?: string;
}
