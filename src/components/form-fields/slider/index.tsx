import React from 'react';
import {
  Badge,
  Box,
  Center,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SliderProps } from './index.types';

export const Slider: React.FC<SliderProps> = ({ ...ctx }) => {
  var [value, setValue] = useState<number[]>(ctx.defaultValue ?? [10, 100]);
  return (
    <>
      <RangeSlider
        aria-label={['min', 'max']}
        min={ctx.min}
        max={ctx.max}
        defaultValue={ctx.defaultValue}
        {...ctx}
        width='full'
        onChangeEnd={(val) => {
          setValue(val);
          ctx.onChange!(val);
        }}
        onChange={(val) => {
          setValue(val);
        }}
        size='md'
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} width={16} height={6}>
          <Box color='primary.500' fontSize='2xs'>
            حداقل ({value[0]})
          </Box>
        </RangeSliderThumb>
        <RangeSliderThumb index={1} width={16} height={6}>
          <Box color='primary.500' fontSize='2xs'>
            حداکثر ({value[1]})
          </Box>
        </RangeSliderThumb>
      </RangeSlider>
      {/* <Center>
        <Badge colorScheme='blue' py='1' px='4'>
          {value?.[0]} - {value?.[1]}
        </Badge>
      </Center> */}
    </>
  );
};
