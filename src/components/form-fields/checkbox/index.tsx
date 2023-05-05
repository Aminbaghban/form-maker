import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import { CheckboxProps } from './index.types';
export const Checkbox = forwardRef<any, CheckboxProps>(({ ...ctx }, ref) => {
  return (
    <ChakraCheckbox
      {...ctx}
      isChecked={ctx.checked}
      onChange={ctx.onChange}
      ref={ref}
    >
      {ctx.title}
    </ChakraCheckbox>
  );
});
