import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth/auth.service";
import { MessagingService } from "./core/messaging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  isLoggedIn: boolean = false;
  showToastMessage: boolean = false;

  constructor(private authService: AuthService, private messagingService: MessagingService) {}

  ngOnInit() {
    if (localStorage.getItem('user-token')) {
      this.isLoggedIn = true;
    }

    this.authService.loggedInStatusChanged.subscribe(
      (status: boolean) => this.isLoggedIn = status
    );
  }
}
