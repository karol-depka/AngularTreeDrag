import { NgModule, Component } from '@angular/core';
import { Task } from './objects/Task';
import { TreeNode, TreeComponent, TREE_ACTIONS } from 'angular-tree-component'; // module

const TASKS: Task[] = [
  {id:1, text:"First item"},
  {id:2, text:"Second item"},
  {id:3, text:"Third item"},
  {id:4, text:"Fourth item"},
  {id:5, text:"Fifth item"}
];

@Component({
  selector: 'app-root',
  // template: '',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'Drag&Drop list';
  tasks = TASKS;

  nodes = [
    {
      id: 1,
      name: 'First item',
    },
    {
      id: 4,
      name: 'Second item',
    }
  ];

  options = {
    allowDrag: true,
    allowDrop: function(element, to) {
      // return to.parent.hasChildren;
      return true // false based on element, to.parent, to.index. e.g.
    },
    useVirtualScroll: true,
    nodeHeight: (node: TreeNode) => node.height,
    dropSlotHeight: 3,
    animateExpand: true
  }

  onMoveNode($event) {
    console.log(
      "Moved",
      $event.node.name,
      "to",
      $event.to.parent.name,
      "at index",
      $event.to.index);
  }
}
