import { Component, ViewChild, ElementRef } from '@angular/core';
import { UserService } from './Api/user.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private userService: UserService) {}

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

  ////////////////////////////////////////// Logica Chiamata Api

  user$ = this.userService.getUsers().pipe(map((users) => users[3]));
  posts$ = this.user$.pipe(
    switchMap((user) => this.userService.getPostsByUserId(user.id))
  );
}
