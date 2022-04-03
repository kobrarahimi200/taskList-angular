import { TaskObj } from './../taskObj';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() task : {name: String , description : string, isDone:boolean};

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(){
    // this.tasks.splice();
  }
  // toggleDone(){
  //   if(this.tasks.isDone){
  //     this.tasks.isDone = false;
  //   }else{
  //     this.tasks.isDone = true;
  //   }
  // }
}
