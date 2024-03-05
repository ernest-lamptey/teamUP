import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { UserService } from '../shared/user.service';
import { faChevronLeft, faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faEllipsis = faEllipsis;
  user!:any;
  profile!:any;

  constructor(private profileService: ProfileService,
    private userService: UserService){}

  ngOnInit() {
    this.user = this.userService.user
    // console.log("logged in user:", this.user)

    this.profileService.getProfile(this.user.id.toString()).subscribe((res) => {
      this.profile = res;
      // console.log(res)
    })

  }
}
