import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';
import { User } from '../../models/User';
import decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private url = environment.apiUrl;

    constructor(
        private http: HttpClient,
        private jwtHelper: JwtHelperService
    ) { }

    singIn(user: User) {
        return this.http.post(`${this.url}/users/signIn`, user);
    }

    singUp(user: User) {
        return this.http.post(`${this.url}/users/signUp`, user);
    }

    getUserId(id: any) {
        return this.http.get(`${this.url}/users/${id}`);
    }

    updateInfoPerson(user: User) {
        return this.http.put(`${this.url}/users/updateInfoPerson`, user);
    }

    changePasswordUser(user: User) {
        return this.http.put(`${this.url}/users/changePasswordUser`, user);
    }

    isAuthenticated(): boolean {
        if (localStorage.getItem('token') == null) {
            const token = localStorage.getItem('token');
            if (token) {
                if (this.jwtHelper.isTokenExpired(token)) {
                    return false;
                }
            }
            return false;
        }
        return true;
    }

    logout() {
        localStorage.removeItem('token');
    }

    getUserlogged(searchTerm: string){
        let text = '';
        
        const token = localStorage.getItem('token');
        if (token) {
            const user: string = decode(token);

            switch (searchTerm) {
                case 'name': {
                    text = user[0]
                }
                break;
                case 'id': {
                    text = user[1]
                }
                break;
                case 'role': {
                    text = user[2]
                }
            }
            
        }
        return text;
    }
}


