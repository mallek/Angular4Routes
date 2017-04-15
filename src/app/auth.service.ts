import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    loggedIn: boolean = false;
    constructor() { }

    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 800);
        });
        return promise;
    }

    login() {
        this.loggedIn = true;
        console.log("loggerd In")
    }

    logOut() {
        this.loggedIn = false;
        console.log("logged out")
    }
}