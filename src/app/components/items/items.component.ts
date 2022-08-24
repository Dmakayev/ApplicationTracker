import {Component, OnInit} from '@angular/core';
import {Item} from "../../models/item";
import {ItemServiceService} from "../../services/item-service.service";
import {map, Observable} from "rxjs";
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "@angular/fire/compat/database";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
    apps: Item[] | undefined;
    loggedInUser: string | null | undefined;

    constructor(
        private itemService: ItemServiceService,
        private authService: AuthService

    ) {
    }

    ngOnInit(): void {
        this.retrieveApplications();

    }


    retrieveApplications(): void {
        this.authService.getAuth().subscribe(auth => {
            if (auth) {
                this.loggedInUser = auth.email;
                this.itemService.getApplications(this.loggedInUser).snapshotChanges().pipe(map(changes =>
                    changes.map(c =>
                        ({
                            // @ts-ignore
                            id: c.payload.doc.id, ...c.payload.doc.data()
                        })))).subscribe(data => {
                    this.apps = data;
                });
            }
        });


    }


    goToDashboard(item: Item) {
        return item.jobDashboardURL;
    }
}
