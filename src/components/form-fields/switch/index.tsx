import { Switch as ChakraSwitch } from '@chakra-ui/react';
import React from 'react';
import { SwitchProps } from './index.types';

export const Switch: React.FC<SwitchProps> = ({ ...ctx }) => {
  return <ChakraSwitch onChange={ctx.onChange} />;
};
