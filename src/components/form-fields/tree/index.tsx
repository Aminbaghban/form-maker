import { Tree } from '@aminbaghbanzadeh/chakra-tree-view';
import { Button, Collapse, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { TreeViewProps } from './index.types';

export const TreeView: React.FC<TreeViewProps> = ({ ...ctx }) => {
  console.log(ctx);
  const { isOpen, onToggle } = useDisclosure();
  var { data, isLoading } = useQuery(
    ctx.fetchUrl!,
    () =>
      axios
        .get(ctx.fetchUrl!, { headers: { ...ctx.requestHeaders } })
        .then((res) => res),
    {
      enabled: !!ctx.fetchUrl,
    }
  );
  return (
    <>
      {!ctx.inline && (
        <Button onClick={onToggle} {...ctx.btnProps}>
          {ctx.btnText}
        </Button>
      )}
      <Collapse in={ctx.inline ? true : isOpen} animateOpacity>
        <Tree
          {...ctx}
          data={!!ctx.data ? ctx.data : ctx.treeDataTransformer!(data)}
        />
      </Collapse>
    </>
  );
};
