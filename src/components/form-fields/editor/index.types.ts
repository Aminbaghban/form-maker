import { FormControlProps as ChakraFormControlProps } from '@chakra-ui/react';

export interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}
