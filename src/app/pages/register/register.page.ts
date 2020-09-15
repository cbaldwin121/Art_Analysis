import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: string;
  phone: string;
  email: string;
  password: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.email = '';
    this.password = '';
  }

  register() {
    this.router.navigateByUrl('/tabs/home');
  }

}
