import { InputProps } from '@chakra-ui/react';
import { IconType } from '../../../interfaces';

export interface TextInputProps extends InputProps {
  icon?: IconType;
  //mask: any;
  //maskChar: any;
}
