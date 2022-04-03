import { TaskObj } from './taskObj';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskList';
  
  allTasks :TaskObj[]  = [];
  onTaskAdded($task: {name :string, description:string}){
    this.allTasks.push({
    name: $task.name,
    description:$task.description,
    isDone:false
  });
}
}
