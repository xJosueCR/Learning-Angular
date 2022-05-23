import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = []
  onNumberGenerated(numberCreated:{value: number} ){
    this.numbers.push(numberCreated.value)
  }
}
