import { AsyncPaginateProps } from 'react-select-async-paginate';
import { CreatableProps } from 'react-select/creatable';
export interface SelectOption {
    label: string;
    value: string | number;
}
export interface GroupBase<Option> {
    readonly options: readonly Option[];
    readonly label?: string;
}
export interface AsyncSelectProps extends AsyncPaginateProps<SelectOption, GroupBase<SelectOption>, undefined, true> {
    options?: SelectOption[];
    fetchUrl?: string;
    valueProperty?: string;
    labelProperty?: string;
    searchQueryFieldName?: string;
    offsetQueryFieldName?: string;
    resultFieldName?: string;
    totalCountFieldName?: string;
    isInvalid?: boolean;
    isDisabled?: boolean;
    isCreatable?: boolean;
    backgroundColor?: string;
}
export interface TagInputProps extends Omit<CreatableProps<SelectOption, true, GroupBase<SelectOption>>, 'onChange'> {
    isInvalid?: boolean;
    onChange: (value: string) => void;
}
