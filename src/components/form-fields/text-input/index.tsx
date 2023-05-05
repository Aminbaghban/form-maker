import { Input } from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import { TextInputProps } from './index.types';

export const TextInput = forwardRef<any, TextInputProps>(({ ...ctx }, ref) => {
  return (
    <Input
      _focus={{ bg: 'white', border: '1px solid #1967D2' }}
      bg='#f0f5f7'
      p='1.36rem'
      color='#696969'
      {...ctx}
      onChange={ctx.onChange}
      ref={ref}
      value={ctx.value || ''}
    />
  );
});

// export const SimpleTextInput = forwardRef<any, TextInputProps>(
//   ({ ...ctx }, ref) => {
//     return (
//       //@ts-ignore
//       <Input
//         {...ctx}
//         ref={ref}
//         as={ctx.mask ? InputMask : undefined}
//         value={ctx.value || ''}
//         onChange={ctx.onChange}
//         bg='white'
//       />
//     );
//   }
// );

// export const TextInputWithIcon: React.FC<TextInputProps> = ({ ...ctx }) => {
//   //var Icon = useMemo(() => ctx.icon!, []);

//   return (
//     <InputGroup>
//       <InputRightElement pointerEvents='none'>
//         <Icon as={ctx.icon} color='gray.600' />
//       </InputRightElement>
//       <SimpleTextInput {...ctx} type='text' />
//     </InputGroup>
//   );
// };
