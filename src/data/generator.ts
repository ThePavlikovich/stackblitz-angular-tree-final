import { NamedResource } from '../common/common';

type nodeGenerator = (depth: number, maxChildren: number) => NamedResource;

export const generateNode: nodeGenerator = (depth, maxChildren) => {
  const createNode = (
    currentDepth: number,
    maxDepth: number,
    maxChildren: number
  ): NamedResource => {
    debugger;
    const nodeName = `Node_${currentDepth}_${Math.floor(Math.random() * 1000)}`;
    const node: NamedResource = { name: nodeName };

    if (currentDepth < maxDepth) {
      const numberOfChildren = Math.floor(Math.random() * (maxChildren + 1));
      if (numberOfChildren > 0) {
        node.children = [];
        for (let i = 0; i < numberOfChildren; i++) {
          node.children.push(
            createNode(currentDepth + 1, maxDepth, maxChildren)
          );
        }
      }
    }

    return node;
  };

  return createNode(0, depth, maxChildren);
};
