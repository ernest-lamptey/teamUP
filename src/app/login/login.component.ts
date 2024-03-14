import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
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

  login(email:HTMLInputElement, password:HTMLInputElement) {
    this.userService.login(email.value, password.value)
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }
}
