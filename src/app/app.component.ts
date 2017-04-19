import { ViewChild, ElementRef, AfterViewInit, Component } from '@angular/core';
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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Drag&Drop list';
  tasks = TASKS;

  /* Init textarea plugin, which makes height of the element flexable */
  @ViewChild('.flexable_textarea') textarea: ElementRef; // obtain element by class

  ngAfterViewInit() {
    JQuery(this.textarea.nativeElement).flexText(); // init flexText plugin
  }


}
