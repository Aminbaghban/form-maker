import { ButtonOptions } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';
export interface ButtonProps extends ButtonOptions {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
