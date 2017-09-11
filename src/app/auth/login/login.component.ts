import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    // Log a user out if he switches to the /login route (initializes the login component)
    this.authService.logout();
  }

  onSubmit(form: NgForm) {
    this.authService.login(form.value.email, form.value.password)
      .then(() => this.router.navigate(['']))
      .catch((error) => {
        const errorMessage = error.json().message;
        this.error = errorMessage;
        form.setValue({
          email: form.value.email,
          password: ''
        });
      });
  }

}
