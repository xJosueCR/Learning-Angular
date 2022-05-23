import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userService: UserService){
    this.userService.setUserActive.subscribe((id: number) =>{
        this.userService.onSetToActive(id)
    })
  }
  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.userService.setUserInactive.emit(id)
  }
}
