import {
  HStack,
  Radio,
  RadioGroup as ChakraRadioGroup,
  Skeleton,
  SkeletonCircle,
  Stack,
  textDecoration,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SelectOption } from '../reach-select/index.types';
import { RadioGroupProps } from './index.types';

export const RadioGroup: React.FC<RadioGroupProps> = ({ ...ctx }) => {
  const [options, setOptions] = useState<SelectOption[] | undefined>(
    ctx.options
  );
  useEffect(() => {
    if (!!ctx.fetchUrl) {
      axios.get(ctx.fetchUrl).then((response) => {
        setOptions(() =>
          Array.isArray(response.data)
            ? response.data
            : response.data[ctx.resultFieldName ?? 'items']
        );
      });
    }
  }, [ctx.fetchUrl]);
  return (
    <ChakraRadioGroup {...ctx} mt='4' value={ctx.value} onChange={ctx.onChange}>
      <Stack spacing={2}>
        {options?.map((q) => (
          <Radio {...ctx.radioProps} key={q.value} value={q.value?.toString()}>
            {q.label}
          </Radio>
        ))}
        {!options &&
          Array(5)
            .fill(0)
            .map((q, index) => (
              <HStack key={index}>
                <SkeletonCircle boxSize='20px' />
                <Skeleton h='10' w='48' />
              </HStack>
            ))}
        {!!options && !!ctx.value && (
          <Radio {...ctx.radioProps} key={'init'} value={''}>
            تفاوتی ندارد
          </Radio>
        )}
      </Stack>
    </ChakraRadioGroup>
  );
};
