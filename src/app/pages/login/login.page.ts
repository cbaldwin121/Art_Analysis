import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { CognitoUser } from '@aws-amplify/auth';
import { Router } from '@angular/router'



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  signinForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.email, Validators.required]), 
    password: new FormControl('',[Validators.required, Validators.min(6) ])
  });

  // hide = true;
  get emailInput(){return this.signinForm.get('email');}
  get passwordInput() { return this.signinForm.get('password');}

  constructor(
    public auth: AuthService,
    private _router: Router, 
    // private _loader: LoaderService 
  ) { }
  
  getEmailInputError() {
    if (this.emailInput.hasError('email')){
      return 'Please enter a valid email address.';
    }
    if (this.emailInput.hasError('required')) {
      return 'An email is required.';
    }
  }
  getPasswordInputError(){
    if (this.passwordInput.hasError('required')){
      return 'A password is required.';
    }
  }
  signIn(){
    // this._loader.show();
    this.auth.signIn(this.emailInput.value, this.passwordInput.value, '')
    .then((user: CognitoUser|any) => {
      // this._loader.hide();
      this._router.navigate(['home']);
    })
    .catch((error: any) => {
      // this._loader.hide();
      console.log(error.message); // Add notification functionality here 
      switch (error.code) {
        case "UserNotConfirmedException":
          environment.confirm.email = this.emailInput.value;
          environment.confirm.password = this.passwordInput.value;
          this._router.navigate(['confirm']);
          break;
        case "UsernameExistsException":
          this._router.navigate(['signin']);
          break;
      }
    })
  }


}
