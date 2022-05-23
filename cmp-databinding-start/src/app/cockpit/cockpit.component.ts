import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() //passing data out of the component
  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated')
  blueprintCreated =new EventEmitter<{blueprintName: string, blueprintContent: string}>();;
  // newServerName = ''; this value has been commented cus now we use local references in our .html file
  // newServerContent = ''; //this vaue has been commented cus we are using viewchild decorator
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef

  constructor() { }

  ngOnInit(): void {
  }
  
  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value 
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {

    this.blueprintCreated.emit({
      blueprintName: serverNameInput.value, 
      blueprintContent: this.serverContentInput.nativeElement.value 
    });
  }
}
