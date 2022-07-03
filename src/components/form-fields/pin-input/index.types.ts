import { UsePinInputProps as ChakraPinInputProps } from '@chakra-ui/react';

export interface PinInputProps extends ChakraPinInputProps {
  count: number;
  onChange?: (value: string) => void;
  isInvalid?: boolean;
}
