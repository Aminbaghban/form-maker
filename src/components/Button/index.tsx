import { Button as ChakraButton, useDisclosure } from '@chakra-ui/react';
import React, { FC } from 'react';
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

  return (
    <ChakraButton
      isLoading={isLoading || ctx.isLoading}
      disabled={isDefaultValueFetching || isLoading || ctx.isLoading}
      loadingText='در حال ذخیره اطلاعات...'
      type='submit'
      variant='primary_dark'
      {...ctx}
    >
      {text}
    </ChakraButton>

    /* {Object.keys(formState.errors)?.length > 0 && (
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
      </Collapse> */
  );
};
