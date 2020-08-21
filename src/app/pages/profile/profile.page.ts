import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'
import Auth, { CognitoUser } from '@aws-amplify/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileForm: FormGroup = new FormGroup({
    email: new FormControl('', [ Validators.email ]),
    });

  profile: any = {};
  user: CognitoUser;

  get emailInput() { return this.profileForm.get('email'); }
  
  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getUserInfo()

  }
  async getUserInfo(){
    this.profile = await Auth.currentUserInfo();
    this.user = await Auth.currentAuthenticatedUser();
    
    this.emailInput.setValue(this.profile.attributes['username'])
  }

}
