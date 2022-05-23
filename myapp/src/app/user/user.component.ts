import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string = ""
  canAddUser: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  onChangeInput(){
    if(this.username.length > 0){
      this.canAddUser = true
    }
  }
  onResetUser(){
    this.username = ""
  }
}
