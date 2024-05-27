import { Component, Input } from '@angular/core';
import { CategoryNode } from '../category-node.model';

@Component({
  selector: 'app-recursive-tree',
  templateUrl: './recursive-tree.component.html',
})
export class RecursiveTreeComponent {
  @Input()
  children: CategoryNode[] = [];

  addNode(parentNode: CategoryNode, nodeName: string) {
    const newNode: CategoryNode = { name: nodeName };
    if (!parentNode.children) {
      parentNode.children = [];
    }
    parentNode.children.push(newNode);
  }
}
