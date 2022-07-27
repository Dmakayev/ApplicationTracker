import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToDoItemsComponent } from './components/to-do-items/to-do-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToDoItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
