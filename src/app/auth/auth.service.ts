import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { HttpClient } from "../shared/http-client.service";
import { TokenService } from "./token.service";

@Injectable()
export class AuthService {
    constructor(
        private httpClient: HttpClient,
        private router: Router,
        private tokenService: TokenService) {}

    login(email: string, password: string) {
        return new Promise((resolve, reject) => {
            this.httpClient.post('/login', {
                email: email,
                password: password
            }, { showErrors: false }).subscribe(
                (loginData: any) => {
                    this.tokenService.setAuthToken(loginData.token);
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
        this.router.navigate(['/login']);
    }
}