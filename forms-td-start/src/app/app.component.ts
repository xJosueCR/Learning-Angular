import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signForm: NgForm
  defaultQuestion: string = 'pet'
  answer: string = ''
  genders: string[] = [
    'male',
    'female'
  ]
  user ={
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender:''
  }
  submitted: boolean = false
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email:''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender:'male'
    // })
  this.signForm.form.patchValue({
    userData: {
      username:suggestedName
    }
  })
  }

  // onSubmit(form: NgForm){
  //   console.log(form)
  // }
  onSubmit(){
    // console.log(this.signForm)
    this.user.username = this.signForm.value.userData.username
    this.user.email = this.signForm.value.userData.email
    this.user.secret = this.signForm.value.secret
    this.user.answer = this.signForm.value.questionAnswer
    this.user.gender = this.signForm.value.gender
    this.submitted = true
    //resetting the form
    this.signForm.reset()
  }
}
