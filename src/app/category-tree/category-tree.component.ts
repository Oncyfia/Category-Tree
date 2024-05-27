import { Component } from '@angular/core';
import { CategoryNode } from './category-node.model';
import { treeData } from './default-tree-data.const';

@Component({
  selector: 'app-category-tree',
  templateUrl: './category-tree.component.html',
  styleUrl: './category-tree.component.scss',
})
export class CategoryTreeComponent {
  data = treeData;

  addNode(parent: CategoryNode, nodeName: string) {
    const newNode: CategoryNode = { name: nodeName };
    if (!parent.children) {
      parent.children = [];
    }
    parent.children.push(newNode);
  }
}
