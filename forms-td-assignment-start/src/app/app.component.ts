import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscription: string = 'advanced'
  @ViewChild('form', {static: true}) registerForm: NgForm

  onSubmit(){
    console.log(this.registerForm.value)
    this.onClean()
  }

  onClean(){
    this.registerForm.reset({
      type: this.defaultSubscription
    })
  }
}
