import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    inputLogging = '';
    inputPassword = '';
    constructor(private authService: AuthService) {

    }
    tryLog() {
        this.authService.tryLoggin(this.inputLogging, this.inputPassword)
    }

    isLogged() {
        return this.authService.isLogged();
    }

    getUser() {
        return this.authService.userInfo;
    }
}
