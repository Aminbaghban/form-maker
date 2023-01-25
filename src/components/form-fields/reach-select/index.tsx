import { Text, HStack, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import React, { forwardRef, useCallback, useEffect } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { AsyncSelectProps } from './index.types';
import { getSelectStyles } from './styles';
import Creatable from 'react-select/creatable';
import { withAsyncPaginate } from 'react-select-async-paginate';
import { SearchIcon } from '@chakra-ui/icons';
import { useWatch } from 'react-hook-form';
import { compile } from 'path-to-regexp';

const CreatableAsyncPaginate = withAsyncPaginate(Creatable);
export const AsyncSelect = forwardRef<any, AsyncSelectProps>(
  ({ ...ctx }, ref) => {
    const dependentValue = useWatch({
      name: ctx.dependentTo?.fieldName || '',
      disabled: !ctx.dependentTo,
    });

    const loadOptions = useCallback(
      async (inputValue: string, loadedOptions: any) => {
        // const response = await axios.get(
        //   `${ctx.fetchUrl!}${ctx.searchQueryFieldName}=${inputValue}&${
        //     ctx.offsetQueryFieldName ?? 'SkipCount'
        //   }=${loadedOptions.length}`
        // );
        const response = await axios.get(
          ctx
            .fetchUrl!.replace(':query', inputValue)
            .replace(':offsetCount', loadedOptions.length)
            .replace(
              ':dependent',
              ctx.dependentTo?.valueExtractor(dependentValue) as string
            )
        );

        return {
          options: Array.isArray(response.data)
            ? response.data
            : response.data[ctx.resultFieldName ?? 'items'],
          hasMore: Array.isArray(response.data)
            ? response.data.length > loadedOptions.length
            : response.data[ctx.totalCountFieldName ?? 'totalCount'] >
              loadedOptions.length,
        };
      },
      [dependentValue]
    );

    if (ctx.isCreatable) {
      return (
        <CreatableAsyncPaginate
          styles={getSelectStyles(ctx)}
          isRtl
          placeholder='انتخاب کنید.'
          isClearable
          isSearchable
          selectRef={ref}
          defaultValue={ctx.value}
          noOptionsMessage={(obj) =>
            `گزینه ای مرتبط با ${obj.inputValue} یافت نشد.`
          }
          loadingMessage={() => 'در حال بارگزاری...'}
          onChange={(e, f) => ctx.onChange!(e, f)}
          components={{
            LoadingIndicator: () => <Spinner size='sm' colorScheme='blue' />,
          }}
          debounceTimeout={2000}
          //@ts-ignore
          formatCreateLabel={(data) => (
            <HStack>
              <SearchIcon />
              <Text>"{data}"</Text>
            </HStack>
          )}
          {...ctx}
          loadOptions={loadOptions}
        />
      );
    }

    return (
      <AsyncPaginate
        styles={getSelectStyles(ctx)}
        placeholder='انتخاب کنید.'
        noOptionsMessage={(obj) =>
          `گزینه ای مرتبط با ${obj.inputValue} یافت نشد.`
        }
        isClearable
        isSearchable
        selectRef={ref}
        defaultValue={ctx.value}
        debounceTimeout={2000}
        loadingMessage={() => 'در حال بارگزاری...'}
        onChange={(e, f) => ctx.onChange!(e, f)}
        components={{
          LoadingIndicator: () => <Spinner size='sm' colorScheme='blue' />,
        }}
        {...ctx}
        isDisabled={!!ctx.dependentTo ? !dependentValue : false}
        key={
          !!ctx.dependentTo
            ? (ctx.dependentTo.valueExtractor(dependentValue) as string)
            : ctx.name
        }
        loadOptions={loadOptions}
      />
    );
  }
);
