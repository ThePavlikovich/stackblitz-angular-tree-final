import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core';
import { NamedResource } from '../../common/common';

interface TreeNode extends NamedResource {
  parent?: TreeNode;
  expanded: boolean;
  path: string;
}

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {
  /**
   * Height of the tree node.
   */
  public nodeHeight = 36;

  /**
   * Tracking of the unique element identification.
   * @param index - Index of the element that must be tracked.
   * @param item - Element that must be tracked.
   */
  public trackBy(index: number, item: TreeNode): string {
    return item.path;
  }

  /**
   * Getter of the tree nodes.
   * It will return elements that have expanded parents or no parents at all.
   */
  public get displayItems(): TreeNode[] {
    return this._items.filter((item) => !item.parent || item.parent.expanded);
  }

  /**
   * Setter of the root node of the tree.
   * @param node - Root element of the tree.
   */
  @Input()
  public set rootNode(node: NamedResource) {
    this._items = this._flat(node);
  }

  /**
   * Template of the tree element.
   */
  @Input()
  public nodeTemplate!: TemplateRef<any>;

  private _items: TreeNode[] = [];

  /**
   * Collapsing the tree node sub-elements.
   * Will collapse all child nodes recursively.
   * @param node Tree node that must be collapsed.
   */
  public collapse(element: TreeNode): void {
    if (!element.expanded || !element.children?.length) return;
    element.children.forEach((child) => this.collapse(child));
    element.expanded = false;
  }

  /**
   * Expanding the tree node sub-elements
   * if the node is not already expanded.
   * @param node Tree node that must be expanded.
   */
  public expand(node: TreeNode): void {
    if (node.expanded) return;
    node.expanded = true;
  }

  /**
   * Toggles the node expansion state.
   * Will ignore nodes that have no children.
   * @param node Tree node that must be expanded.
   */
  public toggle(node: TreeNode): void {
    node.expanded ? this.collapse(node) : this.expand(node);
  }

  private _flat(value: NamedResource): TreeNode[] {
    const result: TreeNode[] = [];
    const traverse = (
      node: any,
      depth: number = 0,
      parent?: TreeNode
    ): TreeNode => {
      const item = {
        ...node,
        path: parent ? `${parent.path}/${node.name}` : `${node.name}`,
        depth,
        parent,
        expanded: false,
        children: [],
      } as unknown as TreeNode;
      if (node.children?.length) {
        for (let i = 0; i < node.children.length; i++) {
          let child = traverse(node.children[i], depth + 1, item);
          item.children?.push(child);
        }
      }
      result.push(item);
      return item;
    };
    traverse(value);

    return result.reverse();
  }
}
