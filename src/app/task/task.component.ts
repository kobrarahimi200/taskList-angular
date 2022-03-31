import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  // name: string;
  // description: string;
  taskList: [{ name: string; description: string }];
  constructor() {}

  ngOnInit(): void {}

  addTask(form: NgForm) {
    const value = form.value;
    // this.taskList.push(value.name, value.description);
    console.log(value)
  }
}
