import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private profileService: ProfileService,
    private userService: UserService){}

  ngOnInit() {
    this.profileService.getProfile("1").subscribe((res) => {
      console.log(res)
    })

    this.userService.getUser("1").subscribe((res) => {
      console.log(res)
    })
  }
}
