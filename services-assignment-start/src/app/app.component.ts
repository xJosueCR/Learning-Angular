import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  activeUsers: string[] = []
  inactiveUsers: string[] = []
  activeCount: number = 0
  inactiveCount: number =0
  constructor(private userService: UserService, private counterService: CounterService){
    this.counterService.activeUsers.subscribe((count: number)=> this.activeCount = count)
    this.counterService.inactiveUsers.subscribe((count: number)=> this.inactiveCount = count)
  }
  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id)
  }

  onSetToActive(id: number) {
   this.userService.onSetToInactive(id)
  }

  ngOnInit(): void {
      this.activeUsers = this.userService.activeUsers
      this.inactiveUsers = this.userService.inactiveUsers

  }
}
