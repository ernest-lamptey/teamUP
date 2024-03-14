import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated!:boolean;
  constructor(private userService: UserService){}

  ngOnInit() {    
    this.userService.loginStatus.subscribe(status => {
      // console.log("auth status: ", status)
      this.isAuthenticated = status;
    });
  }
}
