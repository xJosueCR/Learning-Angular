import { Component, OnDestroy, OnInit } from '@angular/core';

import {interval, Observable, Observer, Subscription} from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstSubscription: Subscription
  constructor() { }
  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe()
    console.log('Observable have been destroyed')
  }

  ngOnInit() {
    // this.firstSubscription = interval(1000).subscribe(count =>{
    //   console.log(count)
    // })
    const customObservable = Observable.create((observer) => {
      let count =0
    
      
      setInterval(() => {
        observer.next(count)
        if(count == 2){
          observer.complete()
        }
        if(count > 3){
          observer.error(new Error('Invalid count'));
        }
        count++
      }, 1000)
    })
   this.firstSubscription= customObservable.subscribe((data)=>{
      console.log(data)
    }, error => {
      alert(error.message)
      console.log(error)
    }, () => {
      console.log('Completed ')
    })
  }

}
