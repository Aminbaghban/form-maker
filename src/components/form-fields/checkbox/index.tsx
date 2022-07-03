import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';
import React from 'react';
import { CheckboxProps } from './index.types';
export const Checkbox: React.FC<CheckboxProps> = ({ ...ctx }) => {
  return <ChakraCheckbox onChange={ctx.onChange} />;
};
