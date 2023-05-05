import { ButtonProps } from '@chakra-ui/react';
import React from 'react';

export interface TreeProps {
  data?: TreeData[];
  rtl?: boolean;
  isMulti?: boolean;
  onChange: (e: string | string[]) => void;
  defaultSelected?: string[] | string;
}

export interface TreeData {
  label: string | React.ReactNode;
  value: string | number;
  hideCheckbox?: boolean;
  children?: TreeData[];
}
