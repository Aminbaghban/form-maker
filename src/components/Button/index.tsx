import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button as ChakraButton,
  Collapse,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';
import React, { FC, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useAminook } from '../form-generator';
import { ButtonProps } from './Button.types';

export const FormSubmitButton: FC<ButtonProps> = ({
  type,
  text,
  onClick,
  ...ctx
}) => {
  const { isLoading, isDefaultValueFetching } = useAminook();
  const { formState } = useFormContext();
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    console.log(formState.errors);
  }, [formState]);
  return (
    <HStack spacing='6' mt={!!ctx.mt ? ctx.mt : '6'}>
      <ChakraButton
        isLoading={isLoading}
        loadingText='در حال ذخیره اطلاعات...'
        type='submit'
        variant='primary_dark'
        fontSize='sm'
        {...ctx}
        disabled={isDefaultValueFetching || isLoading}
      >
        {text}
      </ChakraButton>

      {Object.keys(formState.errors)?.length > 0 && (
        <ChakraButton
          fontSize='sm'
          onClick={onToggle}
          variant='outline'
          colorScheme='red'
        >
          مشاهده مشکلات
        </ChakraButton>
      )}
      <Collapse
        in={isOpen && Object.keys(formState.errors)?.length > 0}
        animateOpacity
      >
        <Alert
          status='error'
          variant='top-accent'
          flexDirection='column'
          alignItems='start'
          justifyContent='start'
          textAlign='right'
          p='6'
        >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='sm'>
            ثبت اطلاعات پس از رفع مشکلات زیر امکانپذیر است.
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            <UnorderedList>
              {Object.keys(formState.errors)?.map((q, index) => (
                <ListItem key={index}>
                  <HStack>
                    <Text fontWeight='bold' fontSize='sm'>
                      {q}
                    </Text>
                    <Text fontSize='xs'>{formState.errors[q].message}</Text>
                  </HStack>
                </ListItem>
              ))}
            </UnorderedList>
          </AlertDescription>
        </Alert>
      </Collapse>
    </HStack>
  );
};
