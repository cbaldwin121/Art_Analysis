import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Auth } from 'aws-amplify'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';





@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  hide = true;
  signupForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required), 
    email: new FormControl('', Validators.compose([
      Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    
    ]))
  

  });

  get emailInput() {
    return this.signupForm.get("email");
  }
  get passwordInput(){
    return this.signupForm.get("password");
  }
  get lastnameInput(){
    return this.signupForm.get("lastname")
  }
  get nameInput(){
    return this.signupForm.get("name")
  }
  
  constructor(
    private _authService: AuthService, 
    private _router: Router
  ) { }

  getEmailInputError(){
    if (this.emailInput.hasError("email")){
      return "Please enter a valid email address."
    }
    if (this.emailInput.hasError("required") ){
      return "An email is required.";
    }
  }
  getPasswordInputError(){
    if (this.passwordInput.hasError("required")){
      return "A password is required"
    }
  }

  shouldEnableSubmit(){
    return (
      !this.emailInput.valid ||
      !this.passwordInput.valid ||
      !this.lastnameInput.valid ||
      !this.nameInput.valid
    );
  }
  signUp(){
    this._authService.signUp({
      email: this.emailInput.value,
      password: this.passwordInput.value, 
      name: this.nameInput.value,
      lastName: this.lastnameInput.value
    }).then(data => {
      environment.confirm.email = this.emailInput.value;
      environment.confirm.password = this.passwordInput.value;
      this._router.navigate(["confirm-email"]);
    }).catch(error => console.log(error))
    console.log(environment.confirm.email)
  }



 


}
