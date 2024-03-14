import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface AuthResponseData {
  // kind: string;
  email: string;
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  // registered: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signin(email:string, password:string) {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API}`, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }

  signup(email:string, password:string) {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API}`, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
}
