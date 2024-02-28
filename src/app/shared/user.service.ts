import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  rootUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.rootUrl + '/authUser')
  }

  getUser(id:string) {
    return this.http.get(this.rootUrl + `/authUser/${id}`)
  }
}
