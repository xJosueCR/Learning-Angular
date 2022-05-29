import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectStatus: string[] = ['Stable', 'Critical', 'Finished']
  forbiddenNames: string[] = ['Test']
  myReactiveForm: FormGroup
  constructor(){

  }
  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], [this.forbiddenProjectName.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    })
  }
  onSubmit(){
    console.log(this.myReactiveForm.value)
  }

  checkProjectName(control: FormControl) : {[s: string]: boolean} {
    if(this.forbiddenNames.indexOf(control.value) !== -1){
      return {
        'notAllowName': true
      }
    }
    return null
  }
  onClear(){
    this.myReactiveForm.reset({
      'status': 'Stable'
    })
  }

  forbiddenProjectName(control: FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) =>{
      setTimeout(()=>{
        if(this.forbiddenNames.indexOf(control.value) !== -1){
          resolve({'notAllowName': true})
        } else {
          resolve(null)
        }
      }, 1500)
    })
    return promise
  }
}
