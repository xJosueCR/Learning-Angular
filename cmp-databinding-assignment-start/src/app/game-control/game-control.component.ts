import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() numberGenerator = new EventEmitter<{value: number}>();
  generator;
  constructor() { }

  ngOnInit(): void {
  }
  onStartGame(){
    this.start()
  }
  start(){
   this.generator = setInterval(()=> {
      this.numberGenerator.emit({
        value: Math.floor(Math.random() * 100)
      })
    }, 1000)
  }
  onStopGame(){
    clearInterval(this.generator)
  }
}
