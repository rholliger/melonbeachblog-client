import { Injectable } from "@angular/core";

@Injectable()
export class TokenService {
    tokenKey: string = 'user-token';

    setAuthToken(token: string) {
        localStorage.setItem(this.tokenKey, JSON.stringify(token));
    }

    getAuthToken() {
        return JSON.parse(localStorage.getItem(this.tokenKey));
    }
}