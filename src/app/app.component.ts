import { Component } from '@angular/core';
// import { TaskService } from './task.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();
  users = [];
  onSubmit() {
    this.users.push(this.user);
    this.user = new User();
  }

  onButtonClick(event) {
    console.log(`Click event is working, event:`, event);
  }

  constructor() { }
  dataFromChild(eventData) {
    console.log(eventData);
  }

  title = 'app';

  // tasks: TaskService[] = [
  //   {
  //     _id: 1,
  //     title: 'first task',
  //     completed: false,
  //   },
  //   {
  //     _id: 2,
  //     title:'second task',
  //     completed: false
  //   }
  // ];
}
