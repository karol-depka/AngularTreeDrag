import { NgModule, Component} from '@angular/core';
import { Task } from './objects/Task';

declare var JQuery: any;

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

  /* Init textarea plugin, which makes height of the element flexable */
  //@ViewChild('.flexable_textarea') textarea: ElementRef; // obtain element by class

  /*ngAfterViewInit() {
    JQuery(this.textarea.nativeElement).flexText(); // init flexText plugin
  }*/

  options = {
    allowDrag: true,
    allowDrop: function(element, to) {
      // return true / false based on element, to.parent, to.index. e.g.
      return to.parent.hasChildren;
    }
  }

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

}
