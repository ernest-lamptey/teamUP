import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  rootUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get(this.rootUrl + '/projects')
  }
}
