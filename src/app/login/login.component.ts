import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy { 
  private userSub!:Subscription;
  isAuthenticated = false;
  constructor(private userService: UserService, private router:Router){}

  ngOnInit(): void {
    this.userSub = this.userService.loginStatus.subscribe(status => {
      this.isAuthenticated = status
      if(this.isAuthenticated) {
        this.router.navigateByUrl('')
      }
    })
  }

  login() {
    this.userService.login('mcrowe1@constantcontact.com', "qU1?DOPA'2")
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }
}
