import { useCallback } from 'react';

export const getSelectStyles = (ctx: any) => {
  return {
    control: (provided: any, state: any) => ({
      ...provided,
      padding: '0.2rem',
      backgroundColor: ctx.backgroundColor ?? '#f0f5f7',
      border: '2px solid !impoetant',
      borderWidth: '2px !important',
      borderColor: ctx.isInvalid
        ? '#e53e3e !important'
        : state.isFocused
        ? '#1967d2'
        : '#E2E8F0 !important',
      borderRadius: '0.375rem',
      '&hover': {
        borderColor: '#cbd5e0 !important',
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
      backgroundColor: state.isSelected ? '#0385ff' : '#f0f5f7',
      '&:hover': {
        ...provided,
        fontSize: '0.875rem',
        padding: '0.2rem',
        color: 'white',
        backgroundColor: '#0385ff !important',
      },
      '&:focus': {
        ...provided,
        fontSize: '0.875rem',
        padding: '0.2rem',
        color: 'white',
        backgroundColor: '#0385ff !important',
      },
      '&:active': {
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
      background: '#d5e1f6',
      fontSize: '0.875rem',
      padding: '0.2rem 0.4rem',
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      zIndex: '2 !important',
      marginTop: '0',
    }),
    menuList: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: '#f0f5f7',
    }),
  };
};
