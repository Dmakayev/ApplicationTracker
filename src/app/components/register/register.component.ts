import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "flash-messages-angular";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Item} from "../../models/item";

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
  // @ts-ignore
  uid: string;
  apps: Item = {
    id:'',
    companyName:'',
    position:'',
    applicationStatus:'Pending',
    dateApplied:'',
    jobDashboardURL: ''
  }

  constructor(
      private authService: AuthService,
      private afsService: AngularFirestore,
      private router: Router,
      private flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.register(this.email, this.password).then(res => {
      this.flashMessage.show('New Account Created. You are now logged in!'
          , {cssClass: 'alert-success', timeout: 4000});
      // @ts-ignore
      this.afsService.collection('users')
          // @ts-ignore
          .doc(this.email).set({
        email: this.email,
        password: this.password});
      // @ts-ignore
      this.afsService.collection('users').doc(this.email).collection('Applications');
      this.router.navigate(['/']);
    }).catch(err => {
      this.flashMessage.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
    });

  }

}
