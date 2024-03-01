import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  rootUrl = 'http://localhost:3000'
  loginStatus = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any[]>(this.rootUrl + '/authUser')
  }

  getUser(id:string) {
    return this.http.get(this.rootUrl + `/authUser/${id}`)
  }

  login(email: string, password: string) {
    this.getUsers().subscribe(users => {
      const user = users.filter((user) => user.email == email.trim())[0];
      const result = user && (user.password === password)
      this.loginStatus.next(result);
    })
  }

  logout() {
    this.loginStatus.next(false);
    alert('Logout success')
  }
}
