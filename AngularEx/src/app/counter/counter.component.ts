import { Component } from '@angular/core';

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
}
