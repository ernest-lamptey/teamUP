import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  rootUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getProfile(id:string) {
    return this.http.get(this.rootUrl + `/profiles/${id}`)
  }
}
