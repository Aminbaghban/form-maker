import { Skeleton } from '@chakra-ui/react';
import React from 'react';

export const SelectSkeleton: React.FC = () => {
  return <Skeleton h='12' w='full' borderRadius='8px' />;
};
