import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

export interface ButtonProps extends ChakraButtonProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
