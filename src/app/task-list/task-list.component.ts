import { TaskObj } from './../taskObj';
import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() task : {id: number, name: String , description : string, isDone:boolean};

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

}
