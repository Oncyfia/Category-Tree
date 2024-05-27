import { CategoryNode } from './category-node.model';

export const treeData: CategoryNode[] = [
  {
    name: 'Lorem',
    children: [
      { name: 'Ipsum' },
      { name: 'Dolor', children: [{ name: 'Orci' }, { name: 'Quis' }] },
    ],
  },
  { name: 'Odio' },
  { name: 'Sit', children: [{ name: 'Amet' }, { name: 'Consectetur' }] },
  { name: 'Adipiscing' },
  { name: 'Elit' },
  { name: 'Vestibulum' },
  { name: 'Vitae' },
];
