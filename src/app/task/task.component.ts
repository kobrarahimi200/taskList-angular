import { TaskService } from './../task.service';
import { TaskObj } from './../taskObj';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {}
  }

