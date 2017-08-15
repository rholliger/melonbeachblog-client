import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Http } from "@angular/http";
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
    private http: Http,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.login(form.value.email, form.value.password)
      .then(() => this.router.navigate(['']))
      .catch((error) => {
        const bla = error.json();
        this.error = bla.message;
        form.setValue({
          email: form.value.email,
          password: ''
        });
      });
  }

}
