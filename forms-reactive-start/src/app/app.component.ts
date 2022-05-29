import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { rejects } from 'assert';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup
  forbiddenUsernames: string[] = ['Chris', 'Anna']

  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.signupForm = new FormGroup({ //controls are key values pairs
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmail]),
      }),

      'gender': new FormControl('male'), // its radio button in html but still an input
      'hobbies': new FormArray([]) //initialization
    })
    // this.signupForm.valueChanges.subscribe((value)=> {
    //   console.log(value)
    // })
    this.signupForm.statusChanges.subscribe((value)=> {
      console.log(value)
    })
  }

  onSubmit(){
    console.log(this.signupForm.value)
    this.signupForm.reset()
  }
  onAddHobby(){
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  getControls(){
    return (<FormArray>this.signupForm.get('hobbies')).controls
  }

  forbiddenNames(control: FormControl) : {[s: string]:boolean }{
   if(this.forbiddenUsernames.indexOf(control.value) !== -1){
    return {
      'nameIsForbidden': true
    }
   }
   return null
  }

  forbiddenEmail(control: FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) =>{
      setTimeout(()=>{
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true})
        } else {
          resolve(null)
        }
      }, 1500)
    })
    return promise
  }

}
