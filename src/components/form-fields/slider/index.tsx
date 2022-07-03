import React from 'react';
import {
  Badge,
  Center,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SliderProps } from './index.types';

export const Slider: React.FC<SliderProps> = ({ ...ctx }) => {
  var [value, setValue] = useState<number[]>();
  return (
    <>
      <RangeSlider
        aria-label={['min', 'max']}
        min={1300}
        max={1401}
        defaultValue={[1350, 1380]}
        {...ctx}
        onChangeEnd={(val) => setValue(val)}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <Center>
        <Badge colorScheme='blue' py='1' px='4'>
          {value?.[0]} - {value?.[1]}
        </Badge>
      </Center>
    </>
  );
};
