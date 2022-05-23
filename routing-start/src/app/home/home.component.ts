import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers() {
    // complex calculations
    this.router.navigate(['/servers']) // navigate to the specify routes
  }
  onLoadServer(id: number) {
    // complex calculations
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: 1 }, fragment: 'loading' }) // navigate to the specify routes
  }
  onLogin(){
    this.authService.login()
  }
  onLogout(){
    this.authService.logout()
  }
}
