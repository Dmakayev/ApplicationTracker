import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddApplicationComponent} from "./components/addApplication/addApplication.component";
import {ItemsComponent} from "./components/items/items.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {RouterModule, Routes} from "@angular/router";
import {EditApplicationComponent} from "./components/edit-application/edit-application.component";
import {combineChange} from "@angular/fire/compat/firestore";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
    {path: 'addApplication', component: AddApplicationComponent, canActivate: [AuthGuard]},
    {path: '', component: ItemsComponent, canActivate: [AuthGuard]},
    {path: 'navbar', component: NavbarComponent},
    {path: 'edit/:id', component: EditApplicationComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
];


@NgModule({
    exports: [RouterModule],
    declarations: [],
    providers: [AuthGuard],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {
}
