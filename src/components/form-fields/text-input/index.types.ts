import { InputProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export interface TextInputProps extends InputProps {
  icon?: IconType;
  //mask: any;
  //maskChar: any;
}
