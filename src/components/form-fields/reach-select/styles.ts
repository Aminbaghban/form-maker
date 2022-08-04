import { useCallback } from 'react';

export const getSelectStyles = (ctx: any) => {
  return {
    control: (provided: any) => ({
      ...provided,
      padding: '0.3rem',
      backgroundColor: '#f0f5f7',
      border: ctx.isInvalid ? '2px solid #E53E3E' : '1px solid #E2E8F0',
      borderRadius: '0.375rem',
      '&focus': {
        borderColor: '#3182ce !important',
      },
    }),
    input: (provided: any) => ({
      ...provided,
      color: '#696969',
      fontSize: '0.875rem',
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      color: '#696969',
      fontSize: '0.875rem',
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: 'none',
    }),
    indicatorsContainer: (provided: any) => ({
      ...provided,
      color: 'black',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'black',
      padding: '0.2rem',
      paddingRight: '0.5rem',
      fontFamily: 'inherit !important',
      fontSize: '0.875rem',
      '&:hover': {
        ...provided,
        fontSize: '0.875rem',
        padding: '0.2rem',
        color: 'white',
        backgroundColor: '#0385ff !important',
      },
    }),
    loadingMessage: (provided: any, state: any) => ({
      ...provided,
      fontSize: '0.875rem',
    }),
    noOptionsMessage: (provided: any, state: any) => ({
      ...provided,
      fontSize: '0.875rem',
    }),
    multiValue: (provided: any, state: any) => ({
      ...provided,
      background: '#e8f0fa',
      fontSize: '0.875rem',
    }),
  };
};
