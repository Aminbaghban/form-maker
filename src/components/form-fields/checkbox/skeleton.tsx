import { HStack, Skeleton } from '@chakra-ui/react';
import React from 'react';

export const CheckboxSkeleton: React.FC = () => {
  return (
    <HStack spacing='2'>
      <Skeleton h='5' rounded='sm' w='5' />
      <Skeleton h='5' rounded='sm' w='40' />
    </HStack>
  );
};
