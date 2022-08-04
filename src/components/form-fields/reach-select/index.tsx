import { Spinner } from '@chakra-ui/react';
import axios from 'axios';
import React, { forwardRef } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { AsyncSelectProps } from './index.types';
import { getSelectStyles } from './styles';

export const AsyncSelect = forwardRef<any, AsyncSelectProps>(
  ({ ...ctx }, ref) => {
    const loadOptions = async (inputValue: string, loadedOptions: any) => {
      const response = await axios.get(
        `${ctx.fetchUrl!}${ctx.searchQueryFieldName}=${inputValue}&${
          ctx.offsetQueryFieldName ?? 'SkipCount'
        }=${loadedOptions.length}`
      );

      return {
        options: response.data[ctx.resultFieldName ?? 'items'],
        hasMore:
          response.data[ctx.totalCountFieldName ?? 'totalCount'] >
          loadedOptions.length,
      };
    };

    return (
      <AsyncPaginate
        {...ctx}
        isClearable
        isSearchable
        selectRef={ref}
        defaultValue={ctx.value}
        styles={getSelectStyles(ctx)}
        loadOptions={loadOptions}
        placeholder='انتخاب کنید.'
        noOptionsMessage={(obj) =>
          `گزینه ای مرتبط با ${obj.inputValue} یافت نشد.`
        }
        loadingMessage={() => 'در حال بارگزاری...'}
        onChange={(e, f) => ctx.onChange!(e, f)}
        components={{
          LoadingIndicator: () => <Spinner size='sm' colorScheme='blue' />,
        }}
      />
    );
  }
);
