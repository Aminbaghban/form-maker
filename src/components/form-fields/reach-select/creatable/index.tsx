import React, {
  forwardRef,
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { ActionMeta, MultiValue, OnChangeValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { SelectOption, TagInputProps } from '../index.types';
import { getSelectStyles } from '../styles';

export const TagInput = forwardRef<any, TagInputProps>(({ ...ctx }, ref) => {
  const [inputValue, setInputValue] = useState<string>();
  const [values, setValues] = useState<OnChangeValue<SelectOption, true>>(
    (ctx.value as MultiValue<SelectOption>) ?? []
  );

  useEffect(() => {
    if (!!ctx.value) {
      setValues(ctx.value as MultiValue<SelectOption>);
    }
  }, [ctx.value]);

  const handleInputChange = useCallback((e: string) => {
    setInputValue(e);
  }, []);
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (!inputValue) return;
      switch (event.key) {
        case 'Enter':
        case 'Tab':
          event.preventDefault();
          event.stopPropagation();
          setInputValue('');
          setValues((values) => [
            ...values,
            { label: inputValue, value: inputValue },
          ]);
          ctx.onChange!(
            values
              .map((q) => q.value)
              .concat(inputValue)
              .join(',')
          );
          setInputValue('');
      }
    },
    [inputValue]
  );
  const handleChange = useCallback(
    (
      value: OnChangeValue<SelectOption, true>,
      actionMeta: ActionMeta<SelectOption>
    ) => {
      ctx.onChange!(value.map((q) => q.value).join(','));
      setValues(value);
    },
    [setValues]
  );
  return (
    <CreatableSelect
      styles={getSelectStyles(ctx)}
      {...ctx}
      ref={ref}
      placeholder={ctx.placeholder ?? 'انتخاب کنید.'}
      components={{ DropdownIndicator: null }}
      inputValue={inputValue}
      isMulti
      menuIsOpen={false}
      onChange={handleChange}
      onInputChange={handleInputChange}
      onKeyDown={handleKeyDown}
      value={values}
    />
  );
});
