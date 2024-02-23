import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private profileService: ProfileService){}

  ngOnInit() {
    this.profileService.getProfile("1").subscribe((res) => {
      console.log(res)
    })
  }
}
