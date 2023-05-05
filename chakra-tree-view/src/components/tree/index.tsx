import { MinusIcon, PlusSquareIcon } from '@chakra-ui/icons';
import {
  Box,
  Checkbox,
  Collapse,
  Flex,
  Icon,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React, { useCallback, useEffect } from 'react';
import { TreeData, TreeProps } from './index.types';

export const TreeRenderer = ({
  ...ctx
}: {
  data: TreeData[];
  onExpand: (node: TreeData) => void;
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openNodes: string[];
  selectedNodes: string[];
}) => {
  return (
    <>
      {ctx.data?.map((q) => {
        return (
          <>
            <Flex alignItems='center' pos='relative'>
              {!!q.children && q.children.length > 0 && (
                <Icon
                  pos='absolute'
                  insetStart='-6'
                  color='#1967D2'
                  cursor='pointer'
                  as={
                    ctx.openNodes.some((i) => i == q.value)
                      ? MinusIcon
                      : PlusSquareIcon
                  }
                  me='2'
                  onClick={() => ctx.onExpand(q)}
                />
              )}
              {!!q.hideCheckbox ? (
                <Box fontSize='sm'>{q.label}</Box>
              ) : (
                <Checkbox
                  isChecked={ctx.selectedNodes.some((i) => i == q.value)}
                  isIndeterminate={
                    !ctx.selectedNodes.some((i) => i == q.value) &&
                    q.children!.some((ch) =>
                      ctx.selectedNodes.some((i) => i == ch.value)
                    )
                  }
                  value={q.value}
                  onChange={ctx.onSelect}
                  my='2'
                >
                  <Box fontSize='sm'>{q.label}</Box>
                </Checkbox>
              )}
            </Flex>
            {!!q.children && q.children.length > 0 && (
              <Collapse
                in={ctx.openNodes.some((o) => o == q.value)}
                animateOpacity
                style={{ overflow: 'visible' }}
              >
                <Stack
                  ps={10}
                  spacing={1}
                  borderStart='1px solid #d9d9d9'
                  ms='2 !important'
                >
                  {<TreeRenderer {...ctx} data={q.children} />}
                </Stack>
              </Collapse>
            )}
          </>
        );
      })}
    </>
  );
};

export const Tree = ({ ...ctx }: TreeProps) => {
  const [checkedItems, setCheckedItems] = React.useState<string[]>(
    ctx.defaultSelected
      ? ctx.isMulti
        ? (ctx.defaultSelected as string[])
        : [`${ctx.defaultSelected}`]
      : []
  );
  const [openParents, setOpenParents] = React.useState<string[]>([]);
  const onSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setCheckedItems((items) =>
          !ctx.isMulti ? [e.target.value] : items.concat(e.target.value)
        )
      : setCheckedItems((items) => items.filter((i) => i != e.target.value));
  }, []);
  const onExpand = useCallback((node: TreeData) => {
    setOpenParents((opens) =>
      opens.some((i) => i == node.value)
        ? opens.filter((i) => i != node.value)
        : opens.concat(`${node.value}`)
    );
  }, []);
  useEffect(() => {
    if (checkedItems.length > 0) {
      ctx.onChange(ctx.isMulti ? checkedItems : checkedItems[0]);
    }
  }, [checkedItems]);
  return (
    <VStack
      alignItems={ctx.rtl ? 'start' : 'end'}
      border='1px solid #e9e9e9'
      rounded='md'
      p='4'
      ps='8'
      mt='2'
    >
      <TreeRenderer
        data={ctx.data!}
        onExpand={onExpand}
        onSelect={onSelect}
        openNodes={openParents}
        selectedNodes={checkedItems}
      />
    </VStack>
  );
};
