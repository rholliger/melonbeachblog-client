import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (localStorage.getItem('user-token')) {
      this.isLoggedIn = true;
    }

    this.authService.loggedInStatusChanged.subscribe(
      (status: boolean) => this.isLoggedIn = status
    )
  }
}
