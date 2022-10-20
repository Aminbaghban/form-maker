import { Text, HStack, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import React, { forwardRef } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { AsyncSelectProps } from './index.types';
import { getSelectStyles } from './styles';
import Creatable from 'react-select/creatable';
import { withAsyncPaginate } from 'react-select-async-paginate';
import { SearchIcon } from '@chakra-ui/icons';
const CreatableAsyncPaginate = withAsyncPaginate(Creatable);
export const AsyncSelect = forwardRef<any, AsyncSelectProps>(
  ({ ...ctx }, ref) => {
    const loadOptions = async (inputValue: string, loadedOptions: any) => {
      const response = await axios.get(
        `${ctx.fetchUrl!}${ctx.searchQueryFieldName}=${inputValue}&${
          ctx.offsetQueryFieldName ?? 'SkipCount'
        }=${loadedOptions.length}`
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
    };

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
        loadOptions={loadOptions}
      />
    );
  }
);
