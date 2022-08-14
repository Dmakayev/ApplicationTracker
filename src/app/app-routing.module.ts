import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddApplicationComponent} from "./components/addApplication/addApplication.component";
import {ItemsComponent} from "./components/items/items.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {path: 'addApplication', component: AddApplicationComponent},
    {path: '', component: ItemsComponent},
    {path: 'navbar', component: NavbarComponent}
];


@NgModule({
    exports: [RouterModule],
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {
}
