import { Select as ChakraSelect } from '@chakra-ui/react';
import axios from 'axios';
import React, { forwardRef } from 'react';
import { useQuery } from 'react-query';
import { SelectProps } from './index.types';
import { SelectSkeleton } from './skeleton';

export const Select = forwardRef<any, SelectProps>(({ ...ctx }, ref) => {
  if (ctx.options) {
    return <SimpleSelect ref={ref} {...ctx} />;
  }
  if (ctx.fetchUrl) {
    return <AsyncSelect ref={ref} {...ctx} />;
  }
  return <ChakraSelect />;
});

export const SimpleSelect = forwardRef<any, SelectProps>(({ ...ctx }, ref) => {
  return (
    <ChakraSelect
      ref={ref}
      onChange={ctx.onChange!}
      bg='#F0F5F7'
      size='lg'
      fontSize='sm'
    >
      {ctx.options?.map((q) => {
        return (
          <option value={q.value} key={q.value}>
            {q.label}
          </option>
        );
      })}
    </ChakraSelect>
  );
});

export const AsyncSelect = forwardRef<any, SelectProps>(({ ...ctx }, ref) => {
  var { data, isLoading } = useQuery(
    ctx.fetchUrl!,
    () => axios.get(ctx.fetchUrl!).then((res) => res.data),
    {
      select: (res: any) =>
        res.items.map((q: any) => ({
          label: ctx.labelProperty ? q[ctx.labelProperty!] : q['label'],
          value: ctx.valueProperty ? q[ctx.valueProperty!] : q['value'],
        })),
    }
  );
  if (isLoading) {
    return <SelectSkeleton />;
  }
  return <SimpleSelect ref={ref} options={data} {...ctx} />;
});
