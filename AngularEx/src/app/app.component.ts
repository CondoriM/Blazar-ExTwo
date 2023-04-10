import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Tasks: Array<string> = [];
  Task: string = '';

  newTask() {
    if (this.Task == '') {
      this.Task = "Valore null non valido"
    } else {
      this.Tasks.push(this.Task);
      this.Task = '';
    }
  }

  deleteTask(i : number){
    this.Tasks.splice(i, 1)
  }
}
