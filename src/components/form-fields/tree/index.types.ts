import { TreeData, TreeProps } from '@aminbaghbanzadeh/chakra-tree-view';
import { ButtonProps } from '@chakra-ui/react';
import { AxiosResponse } from 'axios';

export interface TreeViewProps extends TreeProps {
  inline?: boolean;
  btnProps?: ButtonProps;
  fetchUrl?: string;
  btnText?: string;
  treeDataTransformer?: <TResponse>(
    apiResponse?: AxiosResponse<TResponse, any>
  ) => TreeData[];
  requestHeaders?: object;
}
