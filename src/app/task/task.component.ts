import { TaskObj } from './../taskObj';
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  // name: string;
  // description: string;
  @Output() taskList = new EventEmitter<{
    name: string;
    description: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  addTask(form: NgForm) {
    const value = form.value;
    this.taskList.emit({
      name : value.name,
      description: value.description
    });

    // console.log(value);
    console.log(this.taskList);
  }
}
