import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "flash-messages-angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  email: string;
  // @ts-ignore
  password: string;

  constructor(
      private authService: AuthService,
      private router: Router,
      private flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.register(this.email, this.password).then(res => {
      this.flashMessage.show('New Account Created. You are now logged in!'
          , {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/']);
    }).catch(err => {
      this.flashMessage.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
    });

  }

}
