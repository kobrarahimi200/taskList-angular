import { TaskService } from './task.service';
import { TaskObj } from './taskObj';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskList';
  constructor(public taskService: TaskService){}
}
