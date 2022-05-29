import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map} from 'rxjs/operators'
import { Post } from './post.model';
import { PostService } from './post.service';
import { ConstantPool } from '@angular/compiler';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[]= [];
  isFetching: boolean = false
  error = null
  postSubscription: Subscription
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.fecthPosts()
    this.postSubscription = this.postService.postError.subscribe(message => {
      this.error = message
    })
  }

  onCreatePost(postData: Post) {
    // Send Http request
  this.postService.createAndStorePost(postData.title, postData.content)
  }

  onFetchPosts() {
    // Send Http request
    this.fecthPosts()
  }

  onClearPosts() {
   this.postService.deletePosts().subscribe(data =>{
      this.loadedPosts = []
    })
  }

  private fecthPosts(){
    this.isFetching = true
    this.postService.getPosts().subscribe(data => {  
      this.loadedPosts = data
      this.isFetching = false
    }, error => {
      this.isFetching = false
      this.error = error.message
    })
  }
  
  onOkay(){
    this.error = null
  }
  ngOnDestroy(): void {
   this.postSubscription.unsubscribe()
  }
}
