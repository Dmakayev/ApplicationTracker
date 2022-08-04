import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToDoItemsComponent } from './components/to-do-items/to-do-items.component';
import { ItemsComponent } from './components/items/items.component';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyApSSED2H5B1SIu_u-geDmyFCY2xrL322A",
  authDomain: "application-tracker-ca704.firebaseapp.com",
  projectId: "application-tracker-ca704",
  storageBucket: "application-tracker-ca704.appspot.com",
  messagingSenderId: "632158486737",
  appId: "1:632158486737:web:b547fc3f7d3a36217ec5f0",
  measurementId: "G-CBKNY84E1N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToDoItemsComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
