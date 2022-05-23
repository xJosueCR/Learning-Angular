import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') //srvElement is the name that others components(parent components) should bind
  public element: {
    type: string,
    name: string,
    content: string
  }
  constructor() { }

  ngOnInit(): void {
  }

}
