import {
  Center,
  HStack,
  PinInput as ChakraPinInput,
  PinInputField,
} from '@chakra-ui/react';
import React from 'react';
import { PinInputProps } from './index.types';

export const PinInput: React.FC<PinInputProps> = ({ ...ctx }) => {
  return (
    <Center dir='ltr'>
      <HStack>
        <ChakraPinInput
          otp
          onChange={(value) => ctx.onChange!(value)}
          isInvalid={ctx.isInvalid}
          autoFocus
          size='lg'
        >
          {[...Array(ctx.count)].map((q, index) => {
            return <PinInputField key={index} />;
          })}
        </ChakraPinInput>
      </HStack>
    </Center>
  );
};
