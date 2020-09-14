import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.email = '';
    this.password = '';
  }

  login() {
    this.router.navigateByUrl('/tabs/home');
  }

}
