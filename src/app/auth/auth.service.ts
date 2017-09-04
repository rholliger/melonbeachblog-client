import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Router } from "@angular/router";

import 'rxjs/add/operator/map';
import { Subject } from "rxjs/Subject";

import { environment as config } from '../../environments/environment';
import { HttpClient } from "../shared/http-client.service";

@Injectable()
export class AuthService {
    constructor(private httpClient: HttpClient, private router: Router) {}

    loggedInStatusChanged = new Subject<boolean>();
    
    login(email: string, password: string) {
        return new Promise((resolve, reject) => {
            this.httpClient.post('/login', {
                email: email,
                password: password
            }, { showErrors: false }).subscribe(
                (loginData: any) => {
                    localStorage.setItem('user-token', JSON.stringify(loginData.token));
                    this.loggedInStatusChanged.next(true);
                    resolve();
                },
                (error) => {
                    reject(error);
                }
            )
        });
    }

    logout() {
        localStorage.removeItem('user-token');
        this.loggedInStatusChanged.next(false);
        this.router.navigate(['/login']);
    }

    getAuthorizationHeader() {
        return JSON.parse(localStorage.getItem('user-token'));
    }
}