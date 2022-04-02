import { TaskObj } from './../taskObj';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks : {name: String , description : string, isDone:boolean};

  constructor() { }

  ngOnInit(): void {
  }

  
  // toggleDone(){
  //   if(this.tasks.isDone){
  //     this.tasks.isDone = false;
  //   }else{
  //     this.tasks.isDone = true;
  //   }
  // }
}
