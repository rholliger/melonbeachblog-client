import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Router } from "@angular/router";

import 'rxjs/add/operator/map';
import { Subject } from "rxjs/Subject";

import { environment as config } from '../../environments/environment';

@Injectable()
export class AuthService {
    constructor(private http: Http, private router: Router) {}

    loggedInStatusChanged = new Subject<boolean>();
    
    login(email: string, password: string) {
        return new Promise((resolve, reject) => {
            this.http.post(config.apiUrl + '/login', {
                email: email,
                password: password
            }).subscribe(
                (response: Response) => {
                    let data = response.json();
                    localStorage.setItem('user-token', JSON.stringify(data.token));
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
}