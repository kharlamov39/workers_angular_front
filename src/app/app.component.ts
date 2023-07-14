import { Component, OnInit } from '@angular/core';
import { WorkerService } from './services/worker.service';
import { AuthService } from './services/auth.service';
import { User } from './models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WorkerService]
})

export class AppComponent implements OnInit {
  currentUser: User | null = null

  constructor( public authService: AuthService, private router: Router) {
    this.authService.currentUser$.subscribe( user => {
        this.currentUser = user
    } );
  }

  ngOnInit(): void {
    this.authService.authMe();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login'])
  }
}
