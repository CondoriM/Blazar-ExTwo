import { Component, Input } from '@angular/core';
import { Post, User } from '../Api/my-models';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  Count : number = 0

  minor(){
    this.Count--
  }

  plus(){
    this.Count++
  }

  @Input() user!: User;
  @Input() posts: Post[] = []
}
