import { VStack, HStack, Skeleton } from '@chakra-ui/react';
import React from 'react';

export const TreeSkeleton = () => {
  return (
    <VStack alignItems='start'>
      <HStack>
        <Skeleton boxSize={4} />
        <Skeleton w={20} h={3} />
      </HStack>
      <VStack alignItems='start' ps={6}>
        <HStack>
          <Skeleton boxSize={4} />
          <Skeleton w={20} h={3} />
        </HStack>
        <VStack alignItems='start' ps={6}>
          <HStack>
            <Skeleton boxSize={4} />
            <Skeleton w={20} h={3} />
          </HStack>
          <HStack>
            <Skeleton boxSize={4} />
            <Skeleton w={20} h={3} />
          </HStack>
          <HStack>
            <Skeleton boxSize={4} />
            <Skeleton w={20} h={3} />
          </HStack>
        </VStack>
        <HStack>
          <Skeleton boxSize={4} />
          <Skeleton w={20} h={3} />
        </HStack>
        <HStack>
          <Skeleton boxSize={4} />
          <Skeleton w={20} h={3} />
        </HStack>
      </VStack>
    </VStack>
  );
};
