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
    this.profileService.getProfile("1").subscribe((res) => {
      this.profile = res;
      console.log(res)
    })

    this.userService.getUser("1").subscribe((res) => {
      this.user = res;
      // console.log(res)
    })
  }
}
