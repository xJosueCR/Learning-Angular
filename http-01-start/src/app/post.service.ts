import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    postError = new Subject<string>()
    constructor(private http: HttpClient){

    }

    createAndStorePost(title: string, content: string){
        const postData: Post = {title, content}
        this.http.post<{name: string}>('https://learning-angular-6fd6b-default-rtdb.firebaseio.com/posts.json', postData, {
            observe: 'response'
        })
        .subscribe(data =>{
          console.log(data)
        }, error => {
            this.postError.next(error.message)
        })
    }

    getPosts(){
        //Multiple Params
        // let searchParams = new HttpParams()
        // searchParams = searchParams.append('key', 'value')

       return this.http.get<Post[]>('https://learning-angular-6fd6b-default-rtdb.firebaseio.com/posts.json', {
           headers: new HttpHeaders({
               "Custom-Header": "Hello",
           }),
           params: new HttpParams().set('print', 'pretty')
       })
        .pipe(map(serverData => {
          const postsArray: Post[] =[]
          for (const key in serverData){
            if(serverData.hasOwnProperty(key)){
              postsArray.push({...serverData[key], id: key})
            }
          }
          return postsArray
        }),
         catchError( error => {
            //Send to analytics server
           return throwError(error)
         })
         )

    }

    deletePosts(){
       return this.http.delete('https://learning-angular-6fd6b-default-rtdb.firebaseio.com/posts.json', {
           observe: 'events',
           responseType: 'json' //default
       }).pipe(tap( event =>{
           console.log(event)
           if(event.type === HttpEventType.Response){
               console.log(event.body)
           }
           if(event.type === HttpEventType.Sent){
            console.log(event.type)
        }
       }))
    }
}