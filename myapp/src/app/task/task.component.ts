import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styles: [`
    .five {
      color: white;
    }
  `]
})
export class TaskComponent implements OnInit {
  clickCount : number = 0
  hidden = true
  clicks: Array<number> = []
  constructor() { }

  ngOnInit(): void {
  }
  onToggleContent(){
    this.clicks.push(this.clickCount++);
    return this.hidden ? this.hidden = false : this.hidden = true
  }

}
