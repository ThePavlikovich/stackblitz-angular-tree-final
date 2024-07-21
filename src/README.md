# Angular Tree Component

## Setting

We have a data set of type `{ name: string; children?: any[] }` and want to render the nodes in a hierarchical view.

## Requirements

Create an Angular tree component (under `components/tree`) that receives a root node `{ name: 'root', children: NamedResource[] }` and renders the data in a hierarchical view
Each additional level of depth should be properly indented.

### API

Tree component should be data bound and accept an @Input of type `NamedResource` (the root of the tree)

```html
<app-tree [data]="treeRoot"></app-tree>
```

Tree component should accept a template for what to render - either as an input or as a passed ng-template

```html
<app-tree [data]="treeRoot">
  <ng-template treeNode let-node>
    {{ node.icon }}{{ node.name }}
  </ng-template>
</app-tree>
```

Methods and properties marked as `public` should have API docs.

### User Interaction

Nodes with children should have an indicator that denotes that they have children.
⬇️ - Node has children and IS expanded
➡️ - Node has children and IS NOT expanded

Each node with children can be toggled (expanded or collapsed)

### Styling

Each node has a fixed height of `36px`. Each node spans the whole container **horizontally**
Each additional level of depth (non-root children) should indent children by `4px` to visually denote the depth.
The tree should grow to fit the container it is put in.

## Additional Requirements

These are **not** mandatory, but if your time permits, they would be nice to have!

### Keyboard Navigation

Users should be able to navigate through nodes using Arrow Keys
ALT + ARROW_DOWN expands a node
ALT + ARROW_UP collapses a node
SPACE toggles current node

Current node should have focused state to denote where the use currently is.

### Virtualization

When dealing with large amounts of data, the tree could have performance issues
Implement virtualization using [@angular/cdk/virtual-scroll](https://material.angular.io/cdk/scrolling/api)
