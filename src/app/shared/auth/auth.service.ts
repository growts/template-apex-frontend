import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {AuthResponse} from "../../interfaces/authresponse";

@Injectable()
export class AuthService {
  token: string;

  constructor() {}

  signupUser(email: string, password: string) {
    //your code for signing up the new user

  }

  signinUser(email: string, password: string) {
    //your code for checking credentials and getting tokens for for signing in user
    let response = new(AuthResponse);
    response.user = "Dario";
    response.id = "1";
    console.log('response: '+ JSON.stringify(response));
    return response;
  }

  logout() {
    this.token = null;
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token
    return true;
  }
}
