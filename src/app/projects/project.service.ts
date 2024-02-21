import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  rootUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<Project[]>(this.rootUrl + '/projects')
  }

  getOneProject(id:string) {
    return this.http.get<Project>(this.rootUrl + `/projects/${id}`)
  }
}
