import { Skeleton } from '@chakra-ui/react';
import React from 'react';

export const TextInputSkeleton = ({ width }: { width?: string | number }) => {
  return <Skeleton h='12' w={!!width ? width : 'full'} borderRadius='8px' />;
};
