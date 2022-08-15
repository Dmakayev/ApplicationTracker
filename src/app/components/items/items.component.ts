import { Component, OnInit } from '@angular/core';
import {Item} from "../../models/item";
import {ItemServiceService} from "../../services/item-service.service";
import {map, Observable} from "rxjs";
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "@angular/fire/compat/database";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  apps: Item[] | undefined;
  currentApp?: Item;
  currentIndex = -1;

  constructor(private itemService: ItemServiceService) {}

  ngOnInit(): void {
    this.retrieveApplications();
  }

  refreshList(): void {
    this.currentApp = undefined;
    this.currentIndex = -1;
    this.retrieveApplications();
  }

  retrieveApplications(): void {
    this.itemService.getApplications().snapshotChanges().pipe(map(changes =>
    changes.map(c =>
        // @ts-ignore
        ({id: c.payload.doc.id, ...c.payload.doc.data()
        })))).subscribe(data => {
          this.apps = data;
    });
  }

  setActiveApplication(app: Item, index: number): void {
    this.currentApp = app;
    this.currentIndex = index;
    console.log(this.currentApp.companyName + " " + this.currentIndex);
  }




  goToDashboard(item: Item) {
    return item.jobDashboardURL;
  }
}
