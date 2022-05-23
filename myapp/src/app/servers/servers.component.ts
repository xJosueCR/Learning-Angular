import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true
  serverCreationStatus = "No server was created" 
  serverName = "Test server"
  serverCreated = false
  servers = ['Test server 1', 'Test server 2']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = false
    }, 2000);
   }
  ngOnInit(): void {
  }
  
  onCreateServer(){
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = "Server was create successfully. Name is " + this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName =(<HTMLInputElement> event.target).value
  }
}
