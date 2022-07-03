import { Box, Button as ChakraButton } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useAminook } from '../form-generator';
import { ButtonProps } from './Button.types';

export const FormSubmitButton: FC<ButtonProps> = ({ type, text, onClick }) => {
  let { isLoading } = useAminook();
  return (
    <Box mt='10'>
      <ChakraButton
        isLoading={isLoading}
        loadingText='در حال ذخیره اطلاعات...'
        type='submit'
        variant='primary_dark'
      >
        {text}
      </ChakraButton>
    </Box>
  );
};
