import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  rootUrl = 'http://localhost:3000'
  loginStatus = new BehaviorSubject<boolean>(false);
  user = {}

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  getUsers() {
    return this.http.get<any[]>(this.rootUrl + '/authUser')
  }

  getUser(id:string) {
    return this.http.get(this.rootUrl + `/authUser/${id}`)
  }

  login(email: string, password: string) {
    this.authService.signin(email, password).subscribe(user => {
      this.loginStatus.next(!!user.idToken)
      this.user = user;
    },
    error => {
      console.log(error)
    })

  }

  logout() {
    this.loginStatus.next(false);
    alert('Logout success')
  }
}
