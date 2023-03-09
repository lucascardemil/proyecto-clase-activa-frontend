import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../services/user/user.service';
import decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router
    ) { }



    canActivate(): boolean {

        if (!this.userService.isAuthenticated()) {
            console.log('Access denied');
            this.router.navigate(['/acceso']);
        }
        return true;

    }

}
