import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { TokenService } from "./token.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private tokenService: TokenService) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this.tokenService.getAuthToken()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}