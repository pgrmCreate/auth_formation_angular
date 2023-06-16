import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isAuth = false;
    userInfo: any = null;

    constructor() {
    }

    tryLoggin(login: string, password: string) {
        if (login === 'admin' && password === 'pass') {
            this.isAuth = true;
            this.userInfo = {
                name: login
            }
        }
    }

    isLogged() {
        return this.isAuth;
    }
}
