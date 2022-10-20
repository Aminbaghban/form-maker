import { Tree } from '@aminbaghbanzadeh/chakra-tree-view';
import { Button, Collapse, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TreeViewProps } from './index.types';

export const TreeView: React.FC<TreeViewProps> = ({ ...ctx }) => {
  const [data, setData] = useState();
  const { isOpen, onToggle } = useDisclosure();
  useEffect(() => {
    axios
      .get(ctx.fetchUrl!, { headers: { ...ctx.requestHeaders } })
      .then((res) => setData(res.data));
  }, []);

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
