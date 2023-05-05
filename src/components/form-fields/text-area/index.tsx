import React from 'react';
import { Textarea as ChakraTextarea } from '@chakra-ui/react';
import { TextareaProps } from './index.types';

export const Textarea: React.FC<TextareaProps> = ({ ...ctx }) => {
  return <ChakraTextarea {...ctx} value={ctx.value || ''} bg='#F0F5F7' />;
};
