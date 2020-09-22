import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.page.html',
  styleUrls: ['./logout-modal.page.scss'],
})
export class LogoutModalPage implements OnInit {

  constructor(private _authService: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  signOut(){
    this._authService.signOut()
    .then(() => this._router.navigate['login'])
  }

}
