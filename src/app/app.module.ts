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


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AddApplicationComponent,
        ItemsComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AppRoutingModule,
        FormsModule,
        FlashMessagesModule.forRoot(),
        MatDatepickerModule,
        MatInputModule
    ],
    providers: [ItemServiceService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
