import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


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
  get paswordInput() { return this.signinForm.get('password');}

  constructor(
    public auth: AuthService,
    private _router: Router, 
    private _loader: LoaderService 
  ) { }



}
