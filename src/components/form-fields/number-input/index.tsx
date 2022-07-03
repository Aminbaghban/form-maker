import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  NumberInput as ChakraNumberInput,
} from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import { NumberInputProps } from './index.types';

export const NumberInput = forwardRef<any, NumberInputProps>(
  ({ ...ctx }, ref) => {
    return (
      <ChakraNumberInput
        ref={ref}
        {...ctx}
        size='sm'
        inputMode='numeric'
        min={0}
        max={Infinity}
        value={ctx.value || ctx.value === 0 ? ctx.value : ''}
      >
        <NumberInputField bg='#F0F5F7' p='6' />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </ChakraNumberInput>
    );
  }
);
