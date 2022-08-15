import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FlashMessagesService} from "flash-messages-angular";
import {Router} from "@angular/router";
import {FlashMessage} from "flash-messages-angular/module/flash-message";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    // @ts-ignore
    email: string;
    // @ts-ignore
    password: string;

    constructor(
        private authService: AuthService,
        private router: Router,
        private flashMessage: FlashMessagesService
    ) {
    }

    ngOnInit(): void {
        // @ts-ignore
        this.authService.getAuth().subscribe(auth => {
            if (auth) {
                this.router.navigate(['/'])
            }
        });
    }

    onSubmit() {
        this.authService.login(this.email, this.password).then(res => {
            this.flashMessage.show('You Are Now Logged In', {cssClass: 'alert-success', timeout: 4000});
            this.router.navigate(['/'])
                .catch(err => {
                    this.flashMessage.show(err.message, {cssClass: 'alert-danger', timeout:4000});
                });
        });
    }

}
