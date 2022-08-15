import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AddApplicationComponent} from './components/addApplication/addApplication.component';
import {ItemsComponent} from './components/items/items.component';

import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { AppRoutingModule } from './app-routing.module';
import {ItemServiceService} from "./services/item-service.service";
import {FormsModule} from "@angular/forms";
import {FlashMessagesModule} from "flash-messages-angular";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatNativeDateModule} from "@angular/material/core";
import { EditApplicationComponent } from './components/edit-application/edit-application.component';
import { ApplicationDetailsComponent } from './components/application-details/application-details.component';
import { LoginComponent } from './components/login/login.component';
import {AuthService} from "./services/auth.service";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import { RegisterComponent } from './components/register/register.component';
import {SettingsService} from "./services/settings.service";


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AddApplicationComponent,
        ItemsComponent,
        EditApplicationComponent,
        ApplicationDetailsComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        AppRoutingModule,
        FormsModule,
        FlashMessagesModule.forRoot(),
        MatDatepickerModule,
        MatInputModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatNativeDateModule
    ],
    providers: [ItemServiceService, AuthService, SettingsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
