import { PasswordChecker } from '@aminbaghbanzadeh/password-policies-screen';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React, { forwardRef, useRef } from 'react';
import { PasswordInputProps } from './index.types';

export const PasswordInput = forwardRef<any, PasswordInputProps>(
  ({ showPasswordStatusScreen, passwordPolicies, ...ctx }, ref) => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const myRef = useRef<any | null>(null);
    return (
      <Box>
        <InputGroup>
          <Input
            _focus={{ bg: 'white', border: '1px solid #1967D2' }}
            bg='#f0f5f7'
            p='6'
            color='#696969'
            {...ctx}
            onChange={ctx.onChange}
            ref={(node) => {
              //@ts-ignore
              ref!(node);
              myRef.current = node;
            }}
            value={ctx.value || ''}
            type={show ? 'text' : 'password'}
          />
          <InputRightElement width='4.5rem' top={`calc(50% - 1.25rem)`}>
            <IconButton
              aria-label='toggle password showing'
              icon={show ? <ViewOffIcon /> : <ViewIcon />}
              onClick={handleClick}
            />
          </InputRightElement>
        </InputGroup>
        {showPasswordStatusScreen && (
          <PasswordChecker {...passwordPolicies} ref={myRef} />
        )}
      </Box>
    );
  }
);
