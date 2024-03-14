import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  rootUrl = 'http://localhost:3000'

  constructor(private dataService: DataService) { }

  getProfile(email:string) {
    return this.dataService.getProfile(email)
  }
}
