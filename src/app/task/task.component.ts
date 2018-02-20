import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  // @Input() myTasks: TaskService[];
  @Output() aTaskEventEmitter = new EventEmitter();
  constructor() { }
  triggerEvent() {
    this.aTaskEventEmitter.emit(7);
  }
}
