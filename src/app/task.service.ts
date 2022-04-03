import { TaskObj } from './taskObj';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public taskList: TaskObj[] = [];
  constructor() {}

  /**
   *
   * @returns generate the id and return it
   */
  getId(): number {
    return this.taskList.length + 1;
  }

  /**
   *
   * @param form add the given task to the taskList array
   */
  addTask(form: NgForm) {
    const value = form.value;

    this.taskList.push({
      id: this.getId(),
      name: value.name,
      description: value.description,
      isDone: false,
    });
  }
  /**
   *
   * set the isDone attribute of the clicked task to true value
   * @param id of the clicked task
   */
  toggleDone(id: number) {
    const index = this.taskList.findIndex((i) => i.id === id);
    if (index >= 0) {
      this.taskList[index].isDone = true;
    }
  }
}
